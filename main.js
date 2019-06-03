var wrap = document.getElementsByClassName('element')[0];
var line = document.getElementsByClassName('lines')[0];
var button = document.getElementsByClassName('button')[0];
var offStartButton = document.getElementById('startButton');
var count = document.getElementsByClassName('counter')[0];
var counter = 0;
count.innerHTML = "Your score : " +  counter;


function generate_random_letter(e){
    let random_el;
    for(let i = 0; i < e; i++) {
        random_el = Math.floor((Math.random() * 25) + 97);
    }
    return random_el;
}
function generate() {
    // setTimeout(function(){ time.innerHTML = "Your score : " + counter++; }, 50);
    // var random = Math.round(Math.random() * 100);
    // wrap.innerHTML = '';
    var x = generate_random_letter(1);
    let random_string = '';

    var newLine = document.createElement('div');
    newLine.className = 'lines';
    wrap.appendChild(newLine);

    var newButton = document.createElement('span');
    newButton.className = 'button';
    newButton.innerHTML = random_string += String.fromCharCode(x);
    newLine.appendChild(newButton);

    offStartButton.style.display = 'none';
    // console.log(x);
  
    document.onkeypress = function presset(event) {
        if(event.keyCode == x) {
            newLine.className += ' line_up';
            newButton.className += ' correct_button';
            count.innerHTML = "Your score : " + counter++;
            generate();
            // alert('ok')
        }else {
            newButton.className += ' wrong_button';
            count.innerHTML = "Your score : " + counter--;
            if(counter <= -1) {
                alert("You lose");
                setTimeout(function(){
                    window.location.reload(1);
                 }, 100);
            }
            // alert('no')
        }
    }
} 


