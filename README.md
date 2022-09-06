# vanilla-screen

Dynamically set height based on screen size, because `VH` can't always be trusted...

[NPM](https://www.npmjs.com/package/vanilla-screen)

[SOURCE](https://github.com/3derekmason/vanilla-screen)

## About

Vanilla Screen was created as a simple method to set a "screen-height" css variable based on the size of the viewport window.

Vanilla screen exports a function `setScreenSize`, that you can import anywhere in your application (most sensibly at the root level).

This function does two things:

- Calculates the inner height of the viewport window the app is loaded from
- Sets a root CSS variable `--screen-height` (the inner height in pixels).

## Installing

```
npm install vanilla-screen
```

## Usage

At the top level index.js/main.js _(or similar alias...)_ import the setScreenSize function:

```
// main.js

import setScreenSize from 'vanilla-screen';

// more imports etc...

setScreenSize()

// Your other important stuff like app rendering...
```

and finally, "screen-height" can be applied to CSS:

```
// app.css

:root {
  height: var(--screen-height);
}
```

<br>

I hope this is useful! _Coming soon: prebuilt React, Vue, and Svelte components._
