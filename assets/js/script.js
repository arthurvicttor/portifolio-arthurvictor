function menuShow() {
    const menuMobile = document.querySelector('.mobile__menu');
    if (menuMobile.style.display === 'none' || menuMobile.style.display === '') {
        menuMobile.style.display = 'flex';
        
    } else {
        menuMobile.style.display = 'none';
    }
}