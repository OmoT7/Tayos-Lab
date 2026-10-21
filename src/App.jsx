import { useLab } from "./hooks/useLab.js";
import InkFilters from "./components/InkFilters.jsx";
import Boot from "./components/Boot.jsx";
import Door from "./components/Door.jsx";
import Office from "./components/Office.jsx";
import OsBoot from "./components/OsBoot.jsx";
import Desktop from "./components/Desktop.jsx";

// Which component renders for each `state.screen` value.
const SCREENS = {
  boot: Boot,
  door: Door,
  office: Office,
  os: OsBoot,
  folders: Desktop,
};

// `boil` turns on the wobbling hand-drawn line animation.
export default function App({ startScreen, boil = true }) {
  const { state, actions } = useLab(startScreen);
  const Screen = SCREENS[state.screen];

  const className = ["lab", boil && "boil", state.dark && "dark"].filter(Boolean).join(" ");

  return (
    <div className={className}>
      <InkFilters />
      <Screen state={state} actions={actions} />
    </div>
  );
}
