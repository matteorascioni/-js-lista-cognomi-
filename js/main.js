// lISTA DEI COGNOMI 
var list = [ 
    'Bianchi',
    'Rossi',
    'Duzioni',
    'Balsano',
    'Giorgini',
    'Rossi',
    'Da Vinci',
    'Rascioni'];

// ORDINE ALFABETICO
list.sort();

// LOOP FOR
for (var i = 0; i < list.length; i++) {
    var item = list[i];

    // OUTPUT
    var items = document.getElementById('surnames-list').innerHTML;
    document.getElementById('surnames-list').innerHTML = items + '<li>' + item + '<li>';
}


