document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menuBar = document.getElementById('menu-bar');

    document.getElementById('image1').style.transform = 'rotateX(-20deg) rotateY(20deg)'

    menuIcon.addEventListener('click', function() {
        if (menuBar.style.display === 'none' || menuBar.style.display === '') {
            menuBar.style.display = 'flex';
        } else {
            menuBar.style.display = 'none';
        }
    });

    document.querySelectorAll('.faq-question').forEach(item => {
        item.addEventListener('click', () => {
            const answer = item.nextElementSibling;
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        document.querySelector('.main-image').style.display = 'none';
    };
});

function scrollToPanels(n) {
    if (n == 1) {
        document.querySelector('.container').scrollIntoView({ behavior: 'smooth' });
    }
    if (n == 2) {
        document.querySelector('.faq-section').scrollIntoView({ behavior: 'smooth' });
    }
}