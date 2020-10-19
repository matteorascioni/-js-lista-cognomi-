
var list = [ 'Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Giorgini', 'Rossi', 'Da Vinci', 'Rascioni']

    function myFunction() {
        list.sort(function(a, b){return b - a});
        document.getElementById("surnames-list").innerHTML = list;
      }