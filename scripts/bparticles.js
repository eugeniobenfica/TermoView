function randint(min, max) {
    return Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1)) + parseInt(min);
}

export function bparticles(element, config) {
    let animationFrameId;
    let lastFrameTime = 0;

    setupParticles();
    animate();

    function animate(currentTime) {
        animationFrameId = requestAnimationFrame(animate);
        const elapsedTime = currentTime - lastFrameTime;
        if (elapsedTime > config.duration) {
            lastFrameTime = currentTime;
            animateParticles();
        }
    }

    function clear() {
        cancelAnimationFrame(animationFrameId);
        const particles = element.querySelectorAll('.bparticles__particle');
        particles.forEach(particle => {
            element.removeChild(particle);
        });
    }

    function reload() {
        clear()
        setupParticles();
        animate();
    }

    function createParticle() {
        const particle = document.createElement("div");
        const size = randint(config.size[0], config.size[1]);
        particle.classList.add('bparticles__particle');
        particle.style.transition = `left ${config.duration}ms ${config.timeFunction}, top ${config.duration}ms ${config.timeFunction}, opacity ${config.duration}ms ${config.timeFunction}`;
        particle.style.height = size + 'px';
        particle.style.width = size + 'px';
        return particle
    }

    function setupParticles() {
        if (config.autoAmount) {
            config.amount = Math.floor((window.innerHeight * window.innerWidth) / 100 * 0.01);
        }

        for (let x = 0; x < config.amount; x++) {
            const particle = createParticle()
            particle.style.left = `${randint(0, element.offsetWidth)}px`;
            particle.style.top = `${randint(0, element.offsetHeight)}px`;
            particle.dataset['x'] = parseInt(particle.style.left);
            particle.dataset['y'] = parseInt(particle.style.top);
            element.appendChild(particle);
        }

        animateParticles();
    }

    function animateParticles() {
        const particles = element.querySelectorAll('.bparticles__particle');
        particles.forEach(particle => {
            config.animation({particle, config, element})
            if (config.disappear) {
                const disappearChoice = randint(0, 1);
                particle.style.opacity = disappearChoice === 1 ? 0 : 1;
            }
        });
    }

    return {
        clear,
        reload
    }
}
