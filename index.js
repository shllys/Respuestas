

document.addEventListener('DOMContentLoaded', function() {
    const zone = document.querySelectorAll('.questions');

    zone.forEach(function(item) {
        const card = item.querySelector('.quest-content');
        const answer = item.querySelector('.respuesta');
        const open = item.querySelector('.open')
        const close = item.querySelector('.close')

        card.addEventListener('click', function() {
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
            open.style.display = open.style.display === 'none' ? 'block' : 'none';
            close.style.display = close.style.display === 'block' ? 'none' : 'block';
        });
        
    });
});