var raf    = require('raf-component')
  , easers = require('ease-component')

module.exports = anim

/**
 * Animate a property from current to specified 
 * value.
 * 
 * Adapted from `scroll` module by Michael 
 * Rhodes (license: MIT)
 * 
 * @see github.com/michaelrhodes/scroll
 *
 * Options are:
 * 
 * - `duration` {integer}  In ms
 * - `px`       {boolean}  Append 'px' to value
 * - `round`    {boolean}  Round value
 * - `ease`     {string}   Easing function, e.g. 
 *                         outSine or inOutQuart
 *
 * @see github.com/component/ease
 * 
 * @param  {object}   obj   Container object
 * @param  {string}   prop  Property to animate
 * @param  {mixed}    to    Target value
 * @param  {object}   opts  Optional options
 * @param  {Function} cb    Optional callback
 */
function anim(obj, prop, to, opts, cb) {
  if (typeof opts == 'function') cb = opts, opts = {}
  else if (!opts) opts = {}

  if (!obj) return cb && cb()

  var ease     = easers[opts.ease || 'linear']
    , duration = opts.duration || 600
    , px       = opts.px
    , round    = px || opts.round
    , raw      = obj[prop]
    , from     = px ? parseInt(raw) || 0 : (round ? Math.round(raw) : raw)
    , start    = +new Date
    , last     = from
  
  if (from === to) return cb && cb()

  raf(function step(timestamp) {
    var now = +new Date
      , time = Math.min(1, ((now - start) / duration))
      , val = (ease(time) * (to - from)) + from

    if (round) val = Math.round(val)

    if (val!==last) {
      obj[prop] = px ? val + 'px' : val
      last = val
    }

    if (time < 1) raf(step)
    else cb && cb()
  })
}
