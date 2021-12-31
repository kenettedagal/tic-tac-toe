const gameboardObject = {
    gameboard: [
        ["X", "O", "X"],
        ["X", "O", "X"],
        ["X", "O", "X"]
    ],

    render: () => {

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

