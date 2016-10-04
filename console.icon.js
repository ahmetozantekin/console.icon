/*
*
*   Ahmet Ozan Tekin | 03.10.2016
*   ahmetozantekin@gmail.com
*
*/

(function thing() {

    var gemoji = require('./node_modules/gemoji');

    // window.console or the normal console.
    var con = console;
    if (typeof (window) !== 'undefined') {
        con = window.console;
    }
    con.icon = function () {

        var args = Array.prototype.slice.call(arguments);
        //var index = iconNames.indexOf(args[0]);
        /*if(index != -1){
    
        } else {
            console.error("❕ undefined icon");
        }*/
        if (args[1] != undefined) {
            console.log(gemoji.name[args[0]].emoji + " " + args[1]);
        } else {
            console.log(gemoji.name[args[0]].emoji);
        }


    }
})();
