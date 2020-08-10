/**
 * Minified by jsDelivr using Terser v3.14.1.
 * Original file: /npm/jzz-synth-osc@1.1.2/javascript/JZZ.synth.OSC.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i:"function"==typeof define&&define.amd?define("JZZ.synth.OSC",["JZZ"],i):i(JZZ)}(0,function(t){if(t&&(t.synth||(t.synth={}),!t.synth.OSC)){var i=t.lib.getAudioContext(),s={},n=[],e={_info:function(t){return t||(t="JZZ.synth.OSC"),{type:"Web Audo",name:t,manufacturer:"virtual",version:"1.1.2"}},_openOut:function(t,o){var a;i?(void 0!==o?(s[o=""+o]||(s[o]=new h),a=s[o]):(a=new h,n.push(a)),t.plug=function(t){a.plug(t)},t._info=e._info(o),t._receive=function(t){a.play(t)},t._resume()):t._crash("AudioContext not supported")}};t.synth.OSC=function(i){return t.lib.openMidiOut(i,e)},t.synth.OSC.register=function(s){return!!i&&t.lib.registerMidiOut(s,e)},t.synth.OSC.version=function(){return"1.1.2"}}function h(){this.ac=i,this.dest=this.ac.destination,this.channels=[],this.channel=function(t){return this.channels[t]||(this.channels[t]=new o(this),9==t&&(this.channels[t].note=function(t){return this.notes[t]||(this.notes[t]=new c(t,this)),this.notes[t]})),this.channels[t]},this.play=function(t){var i=t[0],s=t[1],n=t[2];if(!(i<0||i>255)){var e=15&i,h=i>>4;9==h?this.channel(e).play(s,n):8==h?this.channel(e).play(s,0):11==h&&(120==s||123==s?this.channel(e).allSoundOff():64==s&&this.channel(e).damper(!!n))}},this.plug=function(t){try{this.ac=void 0,(t.context instanceof AudioContext||t.context instanceof webkitAudioContext)&&(this.ac=t.context,this.dest=t)}catch(t){this.ac=void 0}this.ac||(this.ac=i,this.dest=this.ac.destination)}}function o(t){this.synth=t,this.notes=[],this.sustain=!1,this.note=function(t){return this.notes[t]||(this.notes[t]=new a(t,this)),this.notes[t]},this.play=function(t,i){this.note(t).play(i)},this.allSoundOff=function(){for(var t=0;t<this.notes.length;t++)this.notes[t]&&this.notes[t].stop()},this.damper=function(t){if(!t&&this.sustain!=t)for(var i=0;i<this.notes.length;i++)this.notes[i]&&this.notes[i].sustain&&this.notes[i].stop();this.sustain=t}}function a(t,i){this.note=t,this.channel=i,this.freq=440*Math.pow(2,(t-69)/12),this.stop=function(){try{this.oscillator&&this.oscillator.stop(0),this.oscillator=void 0,this.sustain=!1}catch(t){}},this.play=function(t){if(!t&&this.channel.sustain||this.stop(),t){var i=t/127;this.oscillator=this.channel.synth.ac.createOscillator(),this.oscillator.type="sawtooth",this.oscillator.frequency.setTargetAtTime(this.freq,this.channel.synth.ac.currentTime,.005),this.oscillator.start||(this.oscillator.start=this.oscillator.noteOn),this.oscillator.stop||(this.oscillator.stop=this.oscillator.noteOff),this.gain=this.channel.synth.ac.createGain();var s=this.channel.synth.ac.currentTime;this.gain.gain.setValueAtTime(i,s),this.gain.gain.exponentialRampToValueAtTime(.01*i,s+2),this.oscillator.connect(this.gain),this.gain.connect(this.channel.synth.dest),this.oscillator.start(0)}else this.sustain=this.channel.sustain}}function c(t,i){this.note=t,this.channel=i,this.freq=200,this.stop=function(){},this.play=function(t){if(t){var i=t/127;this.oscillator=this.channel.synth.ac.createOscillator(),this.oscillator.type="sine",this.oscillator.frequency.setTargetAtTime(this.freq,this.channel.synth.ac.currentTime,.005),this.oscillator.start||(this.oscillator.start=this.oscillator.noteOn),this.oscillator.stop||(this.oscillator.stop=this.oscillator.noteOff),this.gain=this.channel.synth.ac.createGain();var s=this.channel.synth.ac.currentTime;this.gain.gain.setValueAtTime(i,s),this.oscillator.connect(this.gain),this.gain.connect(this.channel.synth.dest),this.oscillator.start(0),this.oscillator.stop(this.channel.synth.ac.currentTime+.04)}}}});
//# sourceMappingURL=/sm/73887465aae4d457d07c44c67b471db49b3b4e72a151fdabb7a9e5961cc747c4.map