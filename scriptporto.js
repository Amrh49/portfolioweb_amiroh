function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show'); // Menambah/menghapus class "show"
}

// Ambil semua tautan navbar
const links = document.querySelectorAll('.navbar a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Mencegah perilaku klik default
        const targetId = link.getAttribute('href'); // Ambil ID target
        const targetElement = document.querySelector(targetId); // Temukan elemen target

        if (targetElement) {
            // Gulir ke elemen target
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Sesuaikan dengan tinggi navbar
                behavior: 'smooth' // Efek gulir halus
            });
        }
    });
});


