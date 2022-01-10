const gameflowObject = (() => {

    let hasWinner = false;
    let counter = 0;
    let playerSign = "";
    const input = boardForm.querySelectorAll("input[type='button']");

    const gameLoop = () => {
        input.forEach(button => {
            button.addEventListener('click', () => {
                if (counter % 2 === 0) playerSign = "X";
                else playerSign = "O";
                if (button.value === "")
                    button.value = playerSign;
                counter++;
                checkForWinner();


            });
        })
    }
    const winner = document.querySelector(".textWinner");
    const checkForWinner = () => {
        let gameboard = [];
        const winCondition =
            // Row Win
            [[0, 1, 2], [3, 4, 5], [6, 7, 8],
            // Col Win
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            // Diagonal Win
            [0, 4, 8], [2, 4, 6]]

        let arr = []
        input.forEach((item, i) => {
            gameboard[i] = item.value;
        })

        if ((gameboard[0] === "X" && gameboard[1] === "X" && gameboard[2] === "X")
            || (gameboard[3] === "X" && gameboard[4] === "X" && gameboard[5] === "X")
            || (gameboard[6] === "X" && gameboard[7] === "X" && gameboard[8] === "X")

            || (gameboard[0] === "X" && gameboard[3] === "X" && gameboard[6] === "X")
            || (gameboard[1] === "X" && gameboard[4] === "X" && gameboard[7] === "X")
            || (gameboard[2] === "X" && gameboard[5] === "X" && gameboard[8] === "X")

            || (gameboard[0] === "X" && gameboard[4] === "X" && gameboard[8] === "X")
            || (gameboard[2] === "X" && gameboard[4] === "X" && gameboard[6] === "X")
        ) {
            winner.textContent = "Player 1 WIN!!!"
            hasWinner = true;
        }
        else if ((gameboard[0] === "O" && gameboard[1] === "O" && gameboard[2] === "O")
            || (gameboard[3] === "O" && gameboard[4] === "O" && gameboard[5] === "O")
            || (gameboard[6] === "O" && gameboard[7] === "O" && gameboard[8] === "O")

            || (gameboard[0] === "O" && gameboard[3] === "O" && gameboard[6] === "O")
            || (gameboard[1] === "O" && gameboard[4] === "O" && gameboard[7] === "O")
            || (gameboard[2] === "O" && gameboard[5] === "O" && gameboard[8] === "O")

            || (gameboard[0] === "O" && gameboard[4] === "O" && gameboard[8] === "O")
            || (gameboard[2] === "O" && gameboard[4] === "O" && gameboard[6] === "O")
        ) {
            winner.textContent = "Player 2 WIN!!!"
            hasWinner = true;
        }

    }

    return { gameLoop }

})();

const playerFactory = (name) => {
    const sayHello = () => console.log('hello!');
    return { name, sayHello };
};

const player1 = playerFactory('jeff', 27);
const player2 = playerFactory('jeff', 27);
gameflowObject.gameLoop();
// gameboardObject.render();
