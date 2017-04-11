/**
 * @author Ahmet Ozan Tekin
 */

(function () { 
 var gemoji = require('gemoji'),
     // window.console or the normal console.
     con = console;

  if (typeof (window) !== 'undefined') con = window.console;

  con.icon = function () {
    var args = Array.prototype.slice.call(arguments),
        argStart = 0,
        printOutAsIcon = '';

    //do in case of one argument
    if (!!args[argStart] && args.length === 1) {
      printOutAsIcon = gemoji.name[args[0]].emoji;
    } else {
      if (args.length >= (argStart + 1)) {
        //in case of multiple arguments
        for (var iconIndex = 0, len = args.length; iconIndex < len; iconIndex++) {
          //if gemoji has the emoji char, add it into our output string
          if (!!gemoji.name[args[iconIndex]]) {
            printOutAsIcon += '' + gemoji.name[args[iconIndex]].emoji + ' ';
          }
        }
      }
   }

   console.log(printOutAsIcon);
  }
})();
