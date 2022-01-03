const gameboardObject = {
    gameboard:
        ["X", "O", "X",
            "X", "O", "X",
            "X", "O", "X"],

    render: () => {

        const input = boardForm.querySelectorAll("input[type='button']");
        gameboardObject.gameboard.forEach((item, i) => {
            console.log(item);
            console.log(i);
            input[i].value = item;
        });
    },

    initEventListenerInBoard: () => {
        const input = boardForm.querySelectorAll("input[type='button']");
        input.forEach(button => {
            button.addEventListener('click', () => {
                alert("test");
            });
        })

    }
}

const gameflowObject = {

}


gameboardObject.initEventListenerInBoard();
gameboardObject.render();
