import { bparticles } from "./bparticles.js";
import { animations } from "./bpAnimations.js"

// Função para trocar o tema
function changeTheme() {
    const rootStyles = getComputedStyle(document.documentElement);
    const colorPrimary = rootStyles.getPropertyValue('--color-primary');
    const colorSecondary = rootStyles.getPropertyValue('--color-secondary');
    const colorAlphaPrimary = rootStyles.getPropertyValue('--color-alpha-primary');
    const colorAlphaSecondary = rootStyles.getPropertyValue('--color-alpha-secondary');

    document.documentElement.style.setProperty('--color-primary', colorSecondary);
    document.documentElement.style.setProperty('--color-secondary', colorPrimary);
    document.documentElement.style.setProperty('--color-alpha-primary', colorAlphaSecondary);
    document.documentElement.style.setProperty('--color-alpha-secondary', colorAlphaPrimary);
}

// Configuração inicial das partículas
const particleConfig = {
    animation: animations.random,
    autoAmount: true,
    disappear: false,
    amount: 186,
    duration: 10000,
    floatX: 60,
    floatY: 60,
    size: [6, 12],
    timeFunction: "linear"
};

const duration = particleConfig.duration

// Inicialização das partículas
const bg = document.querySelector('#particles');
const particles = bparticles(bg, particleConfig);

// Atualizações ao alterar a temperatura
function updateTemperature() {
    const temperatureSlider = document.getElementById('config__input__temperature');
    const percent = 255 - parseInt((temperatureSlider.value / 9500) * 255);

    document.documentElement.style.setProperty('--particle-color', `rgb(255, ${percent}, ${percent})`);
    particleConfig.duration = duration - parseInt(temperatureSlider.value);
    particles.reload();
}

// Event listeners
document.getElementById('change-theme').addEventListener('click', changeTheme);
document.getElementById('config__input__temperature').addEventListener('change', updateTemperature);