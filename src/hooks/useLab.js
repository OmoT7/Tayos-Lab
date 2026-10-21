import { useCallback, useEffect, useRef, useState } from "react";
import { BOOT_TICKS, DELAY, OS_BOOT_TICKS, START_SCREENS, START_WINDOWS, TICK_MS } from "../constants.js";

// Every piece of UI state lives in this one object. Components receive it as `state`.
const INITIAL_STATE = {
  screen: "boot", // boot | door | office | os | folders
  tick: 0, // animation clock, advances during the boot screens
  t0: 0, // value of `tick` when the current screen started

  // door + office
  doorOpen: false,
  zoom: false, // camera zoom on the door
  monZoom: false, // camera zoom on a monitor
  zoomSide: "", // "zl" | "zr" aims the zoom at the left/right monitor

  // desktop windows
  proj: null, // index into PROJECTS, or null
  win: null, // about | contact | hobbies | null

  // office easter eggs
  dark: false,
  wl: 0, // worldline poster index
  friday: false,
  stamped: false,
  duck: false,
  spin: 0, // chair spin count (odd/even picks which CSS animation plays)
  drawer: false,
  usb: "none", // none | carry | plugged
  hobbyBoot: false, // OS boot screen shows the Hobbies variant
  hobUnlocked: false, // .hobbies icon appears on the desktop
};

// Dev shortcut: ?start=office (see README for the full list).
function readStartScreen() {
  try {
    return new URLSearchParams(window.location.search).get("start") || "boot";
  } catch {
    return "boot";
  }
}

/**
 * Owns the app's state, timers and click handlers.
 * Returns `{ state, actions }`; components only ever call `actions.*`.
 */
export function useLab(startScreen = readStartScreen()) {
  const [state, setState] = useState(INITIAL_STATE);

  // Always-current copy of state, for handlers that run inside timers.
  const latest = useRef(state);
  latest.current = state;

  // Accepts a partial object, or a function(prev) that returns one.
  const set = useCallback(
    (patch) => setState((prev) => ({ ...prev, ...(typeof patch === "function" ? patch(prev) : patch) })),
    []
  );

  // ---- timers: everything scheduled here is cancelled when the screen changes ----
  const timers = useRef([]);
  const cancelTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };
  const after = (ms, fn) => timers.current.push(setTimeout(fn, ms));

  // Which window to open once the OS finishes booting (set by enterMonitor).
  const pendingWin = useRef(null);

  // ---- navigation ----
  const go = (screen, proj = null, win = null) => {
    cancelTimers();
    set((prev) => ({ screen, t0: prev.tick, doorOpen: false, zoom: false, monZoom: false, zoomSide: "", proj, win }));

    if (screen === "boot") after(DELAY.bootToDoor, () => go("door"));
    if (screen === "os") {
      after(DELAY.osBootToDesktop, () => {
        const win = pendingWin.current;
        pendingWin.current = null;
        go("folders", null, win);
        set(win === "hobbies" ? { hobbyBoot: false, hobUnlocked: true } : { hobbyBoot: false });
      });
    }
  };

  // Zoom into the main monitor, then boot the OS (optionally landing on a window).
  const enterMonitor = (target = null) => {
    if (latest.current.monZoom) return;
    pendingWin.current = target;
    set({
      monZoom: true,
      hobbyBoot: target === "hobbies",
      zoomSide: target === "about" ? "zl" : target === "contact" ? "zr" : "",
    });
    after(DELAY.monitorZoomToOs, () => go("os"));
  };

  const plugUsb = () => {
    if (latest.current.usb === "plugged") return;
    set({ usb: "plugged", drawer: false });
    after(DELAY.usbPlugToHobbies, () => enterMonitor("hobbies"));
  };

  const actions = {
    // navigation
    skip: () => go("folders"),
    exitLab: () => go("door"),
    openDoor: () => {
      if (latest.current.doorOpen) return;
      set({ doorOpen: true });
      after(DELAY.doorZoomStart, () => set({ zoom: true }));
      after(DELAY.doorToOffice, () => go("office"));
    },
    clickMonitor: () => {
      const { usb } = latest.current;
      if (usb === "carry") plugUsb();
      else enterMonitor(usb === "plugged" ? "hobbies" : null);
    },
    openAboutPC: () => enterMonitor("about"),
    openContactPC: () => enterMonitor("contact"),

    // office easter eggs
    toggleLight: () => set((p) => ({ dark: !p.dark })),
    toggleFriday: () => set((p) => ({ friday: !p.friday })),
    spinChair: () => set((p) => ({ spin: p.spin + 1 })),
    shiftWorldline: () => set((p) => ({ wl: p.wl + 1 })),
    toggleStamp: () => set((p) => ({ stamped: !p.stamped })),
    toggleDuck: () => set((p) => ({ duck: !p.duck })),

    // the USB stick: drawer -> carry -> plugged into the monitor
    toggleDrawer: () => {
      if (latest.current.usb !== "plugged") set((p) => ({ drawer: !p.drawer, usb: "none" }));
    },
    grabUsb: () => set((p) => ({ usb: p.usb === "carry" ? "none" : "carry" })),
    usbDragStart: (e) => {
      try {
        e.dataTransfer.setData("text/plain", "usb");
        e.dataTransfer.effectAllowed = "move";
      } catch {
        /* some browsers block dataTransfer; click-to-carry still works */
      }
      set({ usb: "carry" });
    },
    allowDrop: (e) => {
      if (latest.current.usb === "carry") e.preventDefault();
    },
    dropUsb: (e) => {
      e.preventDefault();
      if (latest.current.usb === "carry") plugUsb();
    },

    // desktop windows
    openProject: (index) => set({ proj: index, win: null }),
    closeProject: () => set({ proj: null }),
    openWin: (win) => set({ win, proj: null }),
    closeWin: () => set({ win: null }),
  };

  // Animation clock for the two loading screens.
  useEffect(() => {
    const interval = setInterval(() => {
      const { screen } = latest.current;
      if (screen === "boot" || screen === "os") set((p) => ({ tick: p.tick + 1 }));
    }, TICK_MS);
    return () => clearInterval(interval);
  }, [set]);

  // Jump to the screen named in ?start=... (defaults to the boot screen).
  useEffect(() => {
    pendingWin.current = null;
    if (startScreen === "project") {
      go("folders", 0);
    } else if (START_WINDOWS.includes(startScreen)) {
      go("folders", null, startScreen);
      if (startScreen === "hobbies") set({ hobUnlocked: true });
    } else if (START_SCREENS.includes(startScreen)) {
      go(startScreen);
    } else {
      go("boot");
    }
    return cancelTimers;
    // Only re-run when the requested start screen changes; go/cancelTimers are stable in behavior.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startScreen]);

  return { state, actions };
}

// Loading-screen progress, 0-100, derived from the animation clock.
export const bootProgress = (state) => Math.min(100, Math.round(((state.tick - state.t0) * 100) / BOOT_TICKS));
export const osBootProgress = (state) => Math.min(100, Math.round(((state.tick - state.t0) * 100) / OS_BOOT_TICKS));
