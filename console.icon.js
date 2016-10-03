/*
*
*   Ahmet Ozan Tekin | 03.10.2016
*   ahmetozantekin@gmail.com
*   tw.co/ahmetozantekin
*
*/

(function thing() {
  // window.console or the normal console.
  var con = console;
  if (typeof(window) !== 'undefined') {
    con = window.console;
  }

  con.icon = function() {

    var iconNames = [
        ":D", 
        ":)", 
        ":*", 
        "B)", 
        ":|", 
        ":o", 
        ":p",
        ":/",
        ":(",
        ":@",
        "poop",
        "<3",
        "zzz",
        "no-entry",
        "check",
        "crossmark",
        "questionmark",
        "copyright",
        "registered",
        "trademark",
        "blacksquare",
        "whitesquare",
        "blackcircle",
        "whitecircle",
        "bomb",
        "bulb",
        "envelope",
        "pushpin",
        "key",
        "lock",
        "cloud",
        "droplet",
        "snowflake",
        "highvoltage",
        "construction",
        "videogame",
        "beer",
        "shrug",
        "birthday"];
        
    var iconTable = ["😀","😊","😘","😎","😐","😯","😜","😕","😞","😡","💩","❤️","💤","⛔","✔","❌","❔","©","®","™","⬛","⬜","⚫","⚪","💣","💡","✉","📌","🔑","🔒","☁","💧","❄","⚡","🚧","🎮","🍺","🤷","🎂"];
    var args = Array.prototype.slice.call(arguments);
    var index = iconNames.indexOf(args[0]);
    if(index != -1){
        if(args[1] != undefined){
            console.log(iconTable[index]+" "+ args[1]);
        } else {
            console.log(iconTable[index]);
        }
    } else {
        console.error("❕ undefined icon");
    }

  }
})();