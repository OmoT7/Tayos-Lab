# Tayo's Lab

An interactive, hand-drawn portfolio. Visitors load into the lab, open the door, explore the office, and boot Portfolio OS to see projects, About Me and Contact. There's also a hidden Hobbies OS behind the desk drawer.

Built with React 18 + Vite. No other dependencies.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the build locally
```

Jump straight to any screen while you work: `http://localhost:5173/?start=office`
(`boot`, `door`, `office`, `os`, `folders`, `project`, `about`, `contact`, `hobbies`).

## Edit content

All the words live in **`src/data.js`**: projects, About Me, Lab Log, contact links, hobbies, worldline numbers, and boot-log jokes. Replace every `[BRACKETED]` placeholder.

To add real images, put them in `src/assets/`, import them at the top of `data.js`, and set `image` on a project or `photo` on `ABOUT`:

```js
import jpm from "./assets/jpm.png";
// ...
{ num: "#01", name: "JPMorgan Chase Modernization", image: jpm, ... }
```

Images keep their real colors in dark mode.

## Project map

```
src/
  App.jsx               picks which screen to show; applies dark/boil classes
  hooks/useLab.js       ALL app state, timers and click handlers (start here for behavior)
  constants.js          every delay/timing in one place
  data.js               every piece of copy on the site
  styles.css            line-art styles, animations, custom cursors (sectioned, search "=====")
  lib/svg.js            shared SVG stroke/text attribute bundles
  assets/cursors/       crosshair.svg (default) + crosshair-lock.svg (hover)
  components/
    Boot.jsx            "Loading Tayo's Lab..." screen
    Door.jsx            the door (landing page)
    OsBoot.jsx          Portfolio OS / Hobbies OS boot screen
    InkFilters.jsx      SVG filters that make lines wobble
    Office.jsx          office scene: assembles the props below
    office/             one file per prop (Chair, Drawer + USB, Posters, Capsule, ...)
    Desktop.jsx         Portfolio OS desktop: icons, project folders, open window
    desktop/            the windows (Project, About, Contact, Hobbies) + shared UI + icons
```

## How the code fits together

- Every screen component receives two props: `state` (read-only data) and `actions` (functions to call). They are defined in `hooks/useLab.js`.
- To change *what happens* on a click, edit the matching function in `actions` there. To change *how long* something takes, edit `constants.js`.
- To change *how something looks*, edit its component (SVG artwork + inline layout) or `styles.css` (hover effects and animations).

### Common tasks

| I want to...                  | Edit                                                                        |
| ----------------------------- | --------------------------------------------------------------------------- |
| Add a project                 | `PROJECTS` in `data.js` (replace a `placeholderProject(...)`)               |
| Add a project slot            | add an entry to `PROJECTS`; the grid and numbering adapt automatically      |
| Add an office easter egg      | new component in `components/office/`, render it in `Office.jsx`, add state + action in `useLab.js` |
| Make the intro faster/slower  | `DELAY`, `BOOT_TICKS`, `OS_BOOT_TICKS` in `constants.js`                    |
| Add a desktop window          | new file in `components/desktop/` built on `Window`, wire in `Desktop.jsx`  |

### Formatting

`npm run format` runs Prettier over `src/` (config in `.prettierrc.json`).

## Easter eggs (for your own reference)

- Lamp: toggles dark mode
- Chair: spins
- Worldline poster: cycles divergence numbers
- "Works on my machine" poster: PROD: NOPE stamp
- "ship it" sticky: Friday warning
- Capsule on the floor: rubber duck
- Drawer: TOP SECRET USB → drag (or click) it onto the main computer → Hobbies OS

## Deploy

- **Vercel / Netlify:** import the repo; build command `npm run build`, output folder `dist`.
- **GitHub Pages:** `npm run build`, then publish `dist/` (for example with the `gh-pages` package or a Pages GitHub Action). `vite.config.js` uses `base: "./"` so it works from a sub-path.
