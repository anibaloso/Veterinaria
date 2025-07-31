
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.navbar-burger');
    const menu = document.getElementById(burger.dataset.target);

    burger.addEventListener('click', () => {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
});


//modal
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('mi-modal');
    const abrirBtn = document.getElementById('abrir-modal');
    const cerrarBtns = modal.querySelectorAll('.delete, .modal-background, .button:not(.is-success)');

    abrirBtn.addEventListener('click', () => {
        modal.classList.add('is-active');
    });

    cerrarBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.remove('is-active');
        });
    });
});
