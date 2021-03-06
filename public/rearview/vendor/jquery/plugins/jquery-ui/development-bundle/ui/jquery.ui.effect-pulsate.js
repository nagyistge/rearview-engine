/*!
 * jQuery UI Effects Pulsate 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/pulsate-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */

!function(e){e.effects.effect.pulsate=function(i,t){var s,a=e(this),c=e.effects.setMode(a,i.mode||"show"),o="show"===c,n="hide"===c,u=o||"hide"===c,f=2*(i.times||5)+(u?1:0),h=i.duration/f,p=0,d=a.queue(),l=d.length;for((o||!a.is(":visible"))&&(a.css("opacity",0).show(),p=1),s=1;f>s;s++)a.animate({opacity:p},h,i.easing),p=1-p;a.animate({opacity:p},h,i.easing),a.queue(function(){n&&a.hide(),t()}),l>1&&d.splice.apply(d,[1,0].concat(d.splice(l,f+1))),a.dequeue()}}(jQuery);