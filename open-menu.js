window.onload = () => {
    
    const menuAdapt = document.querySelector('.menu-adaptive');
    const menuDesc = document.querySelector('.menu');
    
    
    function showMenu() {
        if(menuAdapt.classList.contains('hide')) {
            menuAdapt.classList.remove('hide');
            menuAdapt.classList.add('show');
            menuDesc.style.display = 'block';
        } else {
            menuAdapt.classList.add('hide');
            menuAdapt.classList.remove('show');
            menuDesc.style.display = 'none';
        }
    }
    
    function openLink(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    menuAdapt.addEventListener('click', showMenu);
    menuDesc.addEventListener('click', openLink); 
    
}