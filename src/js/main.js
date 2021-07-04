document.querySelectorAll('.popular__course').forEach(i => {
    i.addEventListener('click', (e) => i.classList.toggle('popular__course--active'))
})

const burger = document.querySelector('.burger')
const wrapper = document.querySelector('.header__wrapper')
burger.addEventListener('click', function() { 
    burger.classList.toggle('burger--active');
    wrapper.classList.toggle('header__wrapper--active')
})