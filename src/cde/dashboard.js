/*!
 * numbro.js
 * version : 1.9.3
 * author : Företagsplatsen AB
 * license : MIT
 * http://www.foretagsplatsen.se
 */

(function () {
  'use strict';

  /************************************
   Constants
   ************************************/

  var dashboard = {},
    hasModule = (typeof module !== 'undefined' && module.exports);


  dashboard.getChart = function(name) {
    console.log('Loading' + name);
    require([
      //'http://10.200.73.90:8080/pentaho/plugin/pentaho-cdf-dd/api/renderer/getDashboard?path=/public/plugin-samples/pentaho-cdf-dd/pentaho-cdf-dd-require/' + name
      'http://10.200.73.90:8080/pentaho/plugin/pentaho-cdf-dd/api/renderer/getDashboard?path=/public/admin/dev_cycles_last_5.wcdf'
    ], function(SampleDash) {

      var sampleDash = new SampleDash("content1");
      sampleDash.render();

    });
  };



  /************************************
   Exposing Dashboard
   ************************************/

  // CommonJS module is defined
  if (hasModule) {
    module.exports = dashboard;
  } else {
    /*global ender:false */
    if (typeof ender === 'undefined') {
      // here, `this` means `window` in the browser, or `global` on the server
      // add `numbro` as a global object via a string identifier,
      // for Closure Compiler 'advanced' mode
      this.dashboard = dashboard;
    }
  }

}.call(typeof window === 'undefined' ? this : window));
