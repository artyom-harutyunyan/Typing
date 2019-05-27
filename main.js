var arr = [];
var wrap = document.getElementsByClassName('element')[0];
var line = document.getElementsByClassName('lines')[0];
var button = document.getElementsByClassName('button')[0];
// function () {
//     arr.push({
//         line: line,
//         button: button,
//     });    
//     capture(e);
// }
var keys = Math.round(Math.random()* 100);
var keysArr = [];
console.log(keys);
function generate() {
    // console.log(arr);
    
        var NewLine = document.createElement('div');
        NewLine.className = 'lines';
        wrap.appendChild(NewLine);
        var newButton = document.createElement('span');
        newButton.className = 'button';
        newButton.innerHTML = keys;
        NewLine.appendChild(newButton);
        generate();
}