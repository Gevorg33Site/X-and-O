const game = document.getElementById('game');
const resetBtn = document.getElementById('resetBtn');
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const player1Name = prompt('Write the name of the first player');
const player2Name = prompt('Write the name of the second player');
let hod = 0;



player1.innerText += ' ' + player1Name;
player2.innerText += ' ' + player2Name;

for (let i = 0; i < 9; i++) {
    game.innerHTML += '<div class="box"></div>';
}

game.addEventListener('click', function (event) {
    if (event.target.className == 'box') {
        if(player1.classList.contains('active')) {
            player1.classList.remove('active');
            player2.classList.add('active');
        } else {
            player2.classList.remove('active');
            player1.classList.add('active');    
        }

        if (!event.target.innerHTML) {
            if (hod % 2 == 0) {
                event.target.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            } else {
                event.target.innerHTML = '<i class="fa-solid fa-o"></i>';
            }

            hod++;
            setTimeout(checkWinner, 500);
        }
    }
})

resetBtn.addEventListener('click', function() {
    let question = confirm('Do you want to start a new game?');

    if (question) {
        window.location.reload();
    }
})

function checkWinner() {
    const allBoxes = document.querySelectorAll('.box');

    // --------------------- win x
    if (allBoxes[0].innerHTML == '<i class="fa-solid fa-xmark"></i>' &&
        allBoxes[3].innerHTML == '<i class="fa-solid fa-xmark"></i>' &&
        allBoxes[6].innerHTML == '<i class="fa-solid fa-xmark"></i>') {
        return alert('Winn X');
    }

    if (allBoxes[1].innerHTML == '<i class="fa-solid fa-xmark"></i>' &&
        allBoxes[4].innerHTML == '<i class="fa-solid fa-xmark"></i>' &&
        allBoxes[7].innerHTML == '<i class="fa-solid fa-xmark"></i>') {
        return alert('Winn X');
    }

    if (allBoxes[2].innerHTML == '<i class="fa-solid fa-xmark"></i>' &&
        allBoxes[5].innerHTML == '<i class="fa-solid fa-xmark"></i>' &&
        allBoxes[8].innerHTML == '<i class="fa-solid fa-xmark"></i>') {
        return alert('Winn X');
    }

    if (allBoxes[0].innerHTML == '<i class="fa-solid fa-xmark"></i>' &&
        allBoxes[1].innerHTML == '<i class="fa-solid fa-xmark"></i>' &&
        allBoxes[2].innerHTML == '<i class="fa-solid fa-xmark"></i>') {
        return alert('Winn X');
    }

    if (allBoxes[3].innerHTML == '<i class="fa-solid fa-xmark"></i>' &&
        allBoxes[4].innerHTML == '<i class="fa-solid fa-xmark"></i>' &&
        allBoxes[5].innerHTML == '<i class="fa-solid fa-xmark"></i>') {
        return alert('Winn X');
    }

    if (allBoxes[6].innerHTML == '<i class="fa-solid fa-xmark"></i>' &&
        allBoxes[7].innerHTML == '<i class="fa-solid fa-xmark"></i>' &&
        allBoxes[8].innerHTML == '<i class="fa-solid fa-xmark"></i>') {
        return alert('Winn X');
    }

    if (allBoxes[0].innerHTML == '<i class="fa-solid fa-xmark"></i>' &&
        allBoxes[4].innerHTML == '<i class="fa-solid fa-xmark"></i>' &&
        allBoxes[8].innerHTML == '<i class="fa-solid fa-xmark"></i>') {
        return alert('Winn X');
    }

    if (allBoxes[2].innerHTML == '<i class="fa-solid fa-xmark"></i>' &&
        allBoxes[4].innerHTML == '<i class="fa-solid fa-xmark"></i>' &&
        allBoxes[6].innerHTML == '<i class="fa-solid fa-xmark"></i>') {
        return alert('Winn X');
    }

    // --------------------- win 0
    if (allBoxes[0].innerHTML == '<i class="fa-solid fa-o"></i>' &&
        allBoxes[3].innerHTML == '<i class="fa-solid fa-o"></i>' &&
        allBoxes[6].innerHTML == '<i class="fa-solid fa-o"></i>') {
        return alert('Winn 0');
    }

    if (allBoxes[1].innerHTML == '<i class="fa-solid fa-o"></i>' &&
        allBoxes[4].innerHTML == '<i class="fa-solid fa-o"></i>' &&
        allBoxes[7].innerHTML == '<i class="fa-solid fa-o"></i>') {
        return alert('Winn 0');
    }

    if (allBoxes[2].innerHTML == '<i class="fa-solid fa-o"></i>' &&
        allBoxes[5].innerHTML == '<i class="fa-solid fa-o"></i>' &&
        allBoxes[8].innerHTML == '<i class="fa-solid fa-o"></i>') {
        return alert('Winn 0');
    }

    if (allBoxes[0].innerHTML == '<i class="fa-solid fa-o"></i>' &&
        allBoxes[1].innerHTML == '<i class="fa-solid fa-o"></i>' &&
        allBoxes[2].innerHTML == '<i class="fa-solid fa-o"></i>') {
        return alert('Winn 0');
    }

    if (allBoxes[3].innerHTML == '<i class="fa-solid fa-o"></i>' &&
        allBoxes[4].innerHTML == '<i class="fa-solid fa-o"></i>' &&
        allBoxes[5].innerHTML == '<i class="fa-solid fa-o"></i>') {
        return alert('Winn 0');
    }

    if (allBoxes[6].innerHTML == '<i class="fa-solid fa-o"></i>' &&
        allBoxes[7].innerHTML == '<i class="fa-solid fa-o"></i>' &&
        allBoxes[8].innerHTML == '<i class="fa-solid fa-o"></i>') {
        return alert('Winn 0');
    }

    if (allBoxes[0].innerHTML == '<i class="fa-solid fa-o"></i>' &&
        allBoxes[4].innerHTML == '<i class="fa-solid fa-o"></i>' &&
        allBoxes[8].innerHTML == '<i class="fa-solid fa-o"></i>') {
        return alert('Winn 0');
    }

    if (allBoxes[2].innerHTML == '<i class="fa-solid fa-o"></i>' &&
        allBoxes[4].innerHTML == '<i class="fa-solid fa-o"></i>' &&
        allBoxes[6].innerHTML == '<i class="fa-solid fa-o"></i>') {
        return alert('Winn 0');
    }
}