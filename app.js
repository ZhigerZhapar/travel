document.querySelector('.header__burger').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.header__content').classList.toggle('open');
})