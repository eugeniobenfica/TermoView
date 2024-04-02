function randint(min, max) {
    return Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1)) + parseInt(min);
}

function random(resources) {
    resources.particle.style.left = `${randint(0, resources.element.offsetWidth)}px`;
    resources.particle.style.top = `${randint(0, resources.element.offsetHeight)}px`;
}

function range(resources) {
    resources.particle.style.left = `${randint(resources.particle.dataset['x'], parseInt(resources.particle.dataset['x']) + resources.config.floatX)}px`;
    resources.particle.style.top = `${randint(resources.particle.dataset['y'], parseInt(resources.particle.dataset['y']) + resources.config.floatY)}px`;
}

function pointerAtrack(resources) {
    document.addEventListener('mousemove', (event) => {
    if (Math.abs(parseInt(resources.particle.dataset['x']) - event.pageX) < 100) {
        let moveX = 0
        let moveY = 0
        if (event.pageX > parseInt(resources.particle.dataset['x'])) {
            moveX = parseInt(resources.particle.dataset['x']) + 20
        } else {
            moveX = parseInt(resources.particle.dataset['x']) - 20
        }
        if (event.pageY > parseInt(resources.particle.dataset['y'])) {
            moveY = parseInt(resources.particle.dataset['y']) + 20
        } else {
            moveY = parseInt(resources.particle.dataset['y']) - 20
        }
        resources.particle.style.left = `${moveX}px`;
        resources.particle.style.top = `${moveY}px`;
        }
    })
}

function pointerRepulse(resources) {
    document.addEventListener('mousemove', (event) => {
    if (Math.abs(parseInt(resources.particle.dataset['x']) - event.pageX) < 100) {
        let moveX = 0
        let moveY = 0
        if (event.pageX > parseInt(resources.particle.dataset['x'])) {
            moveX = parseInt(resources.particle.dataset['x']) - 20
        } else {
            moveX = parseInt(resources.particle.dataset['x']) + 20
        }
        if (event.pageY > parseInt(resources.particle.dataset['y'])) {
            moveY = parseInt(resources.particle.dataset['y']) - 20
        } else {
            moveY = parseInt(resources.particle.dataset['y']) + 20
        }
        resources.particle.style.left = `${moveX}px`;
        resources.particle.style.top = `${moveY}px`;
        }
    })
}

export const animations = {
    random,
    range,
    pointerAtrack,
    pointerRepulse
}