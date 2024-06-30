document.addEventListener('DOMContentLoaded', function() {
    const panel1 = document.getElementById('img1planel');
    const panel2 = document.getElementById('img2planel');
    const menuIcon = document.querySelector('.menu-icon');
    const menuBar = document.getElementById('menu-bar');

    menuIcon.addEventListener('click', function() {
        if (menuBar.style.display === 'none' || menuBar.style.display === '') {
            menuBar.style.display = 'flex';
        } else {
            menuBar.style.display = 'none';
        }
    });

    function rotatePanel(panel, angleX, angleY) {
        panel.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    }

    document.addEventListener('mousemove', function(event) {
        const centerX = window.innerWidth / 20;
        const centerY = window.innerHeight / 20;
        const centerX2 = window.innerWidth - 20;
        const centerY2 = window.innerHeight - 550;

        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const rotateX1 = (mouseY - centerY) / 10;
        const rotateY1 = (centerX - mouseX) / 15;

        const rotateX2 = (mouseY - centerY2) / 15;
        const rotateY2 = (centerX2 - mouseX) / 15;

        rotatePanel(panel1, rotateX1, rotateY1);
        rotatePanel(panel2, rotateX2, rotateY2);
    });
});
