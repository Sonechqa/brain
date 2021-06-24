document.querySelectorAll('.popular__course').forEach(i => {
    i.addEventListener('click', (e) => i.classList.toggle('popular__course--active'))
})