// lISTA DEI COGNOMI 
var list = [ 
    'Bianchi',
    'Rossi',
    'Duzioni',
    'Balsano',
    'Giorgini',
    'Da Vinci',
    'Rascioni'];

// ORDINE ALFABETICO
list.sort();

var items = '';

// LOOP FOR
for (var i = 0; i < list.length; i++) {
    var item = list[i];

    // ORDINE NUMERICO
    var index = list.indexOf(item);
    console.log(index);

    // OUTPUT
    items += '<li>' + item + '<li>';
    document.getElementById('surnames-list').innerHTML = '<li>' + items + '<li>';
}
 

