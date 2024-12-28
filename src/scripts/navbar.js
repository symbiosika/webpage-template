function navToggle() {
    const btn = document.getElementById('menuBtn');
    const menu = document.getElementById('menu');

    btn.classList.toggle("open");
    menu.classList.toggle("hidden");
    btn.classList.toggle('active');
}
