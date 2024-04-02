let navExpand = document.getElementById('header__expand-nav')
let headerNav = document.getElementById('header__nav')
let expandClose = document.getElementById('header__expand-close')

navExpand.addEventListener('click', () => {
    headerNav.style.display = 'flex'
    expandClose.style.display = 'flex'
    navExpand.style.display = 'none'
})

expandClose.addEventListener('click', () => {
    headerNav.style.display = 'none'
    expandClose.style.display = 'none'
    navExpand.style.display = 'flex'
})