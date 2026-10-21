import { Capsule } from "./office/Capsule.jsx";
import { Chair } from "./office/Chair.jsx";
import { Drawer, Usb } from "./office/Drawer.jsx";
import { MainMonitor, PluggedUsb } from "./office/MainMonitor.jsx";
import { StickyNote, WorldlinePoster, WorksOnMyMachine } from "./office/Posters.jsx";
import { Room } from "./office/Room.jsx";

// The office scene. Everything inside `.scene` is positioned in percentages of a
// 1200x750 drawing, so props keep their place at any window size. To add a new
// prop: make a component in ./office/, give it a button with `left/top/width/height`
// in %, and render it below.
export default function Office({ state, actions }) {
  const sceneClass = ["scene", state.monZoom && `zoom ${state.zoomSide}`].filter(Boolean).join(" ");

  return (
    <div className="screen">
      <button className="exit" onClick={actions.exitLab}>← exit lab</button>
      <div className={sceneClass}>
        <Room />
        <MainMonitor state={state} actions={actions} />
        <button className="side" onClick={actions.openAboutPC} aria-label="Open About me on the left computer" style={{ left: "16.67%" }} />
        <button className="side" onClick={actions.openContactPC} aria-label="Open Contact on the right computer" style={{ left: "64.17%" }} />
        <button
          className="lamp"
          onClick={actions.toggleLight}
          aria-label={state.dark ? "Turn the light on (light mode)" : "Turn the light off (dark mode)"}
        />
        <Drawer state={state} actions={actions} />
        <Usb state={state} actions={actions} />
        {state.usb === "plugged" && <PluggedUsb />}
        {state.usb === "carry" && (
          <div className="note" style={{ left: "63%", top: "58.5%" }}>← drag it (or click) onto the computer</div>
        )}
        <Chair state={state} actions={actions} />
        <StickyNote state={state} actions={actions} />
        <WorldlinePoster state={state} actions={actions} />
        <WorksOnMyMachine state={state} actions={actions} />
        <Capsule state={state} actions={actions} />
      </div>
      <button className="skip" onClick={actions.skip}>skip intro →</button>
    </div>
  );
}
