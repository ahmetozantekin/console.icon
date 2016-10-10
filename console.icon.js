/**
 * @author Ahmet Ozan Tekin
 */

(function thing() {
  var gemoji = require('gemoji');
  // window.console or the normal console.
  var con = console;
  if (typeof (window) !== 'undefined') {
    con = window.console;
  }
  con.icon = function () {
    var args = Array.prototype.slice.call(arguments);
    if (!!args[1]) {
      console.log(gemoji.name[args[0]].emoji + ' ' + args[1]);
    } else {
      console.log(gemoji.name[args[0]].emoji);
    }
  }
})();
