document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('.button-simbol');

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.classList.add('zoom');
        });

        button.addEventListener('mousedown', () => {
            button.classList.add('double-zoom');

        })

        button.addEventListener('mouseup', () => {
            button.classList.remove("double-zoom")
        })

        button.addEventListener('mouseout', () => {
            button.classList.remove('zoom');
        });
    });
});