// Timings for the intro sequences and animations. All values are milliseconds
// unless the name says "TICKS". Tweak here instead of hunting through code.

// The loading screens use a shared animation clock that advances every TICK_MS.
export const TICK_MS = 100;
export const BOOT_TICKS = 30; // "Loading Tayo's Lab..." lasts 3s
export const OS_BOOT_TICKS = 24; // "Loading Portfolio OS..." progress bar speed

export const DELAY = {
  bootToDoor: 3500, // boot screen -> door
  osBootToDesktop: 2900, // OS boot screen -> desktop
  doorZoomStart: 600, // door swings open, then the camera starts zooming in
  doorToOffice: 1350, // door -> office
  monitorZoomToOs: 1150, // camera zooms into the monitor, then OS boot starts
  usbPlugToHobbies: 2600, // "new device detected..." pause before Hobbies OS
};

// Screens the app can start on via ?start=<name> (dev shortcut, see README).
export const START_SCREENS = ["boot", "door", "office", "os", "folders"];
export const START_WINDOWS = ["about", "contact", "hobbies"];
