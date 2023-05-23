const refs = {
    controls: document.querySelector('[data-controls]'),
    panes: document.querySelector('[data-panes]')
}

refs.controls.addEventListener('click', onControlsClick)

function onControlsClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'A') {
        return;
    }
    
    const currentControlItem = refs.controls.querySelector('.controls__item--active')

    if (currentControlItem) {
        currentControlItem.classList.remove('controls__item--active')
    }

    event.target.classList.add('controls__item--active')
    
    const pane = document.querySelector(`${event.target.hash}`);

    pane.classList.add('pane--active');
}

