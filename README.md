# anim

>Animate a property from current to specified value, with requestAnimationFrame and easing.

## example

```js
// Fake scroll
anim(element.style, 'marginTop', -100, {
  px: true, 
  duration: 600,
  ease: 'outSine'
})
```

## api

`anim(obj, prop, to, opts, cb)`

- `{object} obj` Container object
- `{string} prop` Property to animate
- `{mixed} to` Target value
- `{object} opts` Optional options
- `{Function} cb` Optional callback

Options are:

- `{integer} duration` In ms
- `{boolean} px` Append "px" to value
- `{boolean} round` Round value
- `{string} ease` [Easing function](https://github.com/component/ease), e.g. `outSine` or `inOutQuart`

## install

With [npm](https://npmjs.org) do:

```
npm install anim
```

## license

MIT

## credits

Adapted from [scroll](https://github.com/michaelrhodes/scroll) by Michael Rhodes (license: MIT).
