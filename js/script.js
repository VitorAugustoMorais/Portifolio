closeMenu.addEventListener('click', function () {
    closeMenu.style.display = 'none'
    nav.style.display = 'none'
})

nav.addEventListener('click', function () {
    closeMenu.style.display = 'none'
    nav.style.display = 'none'
})

openMenu.addEventListener('click', function () {
    closeMenu.style.display = 'inline'
    nav.style.display = 'inline'
})

window.addEventListener('scroll', function () {
    const header = document.querySelector('header')
    const scrollPosition = window.pageYOffset - header.offsetHeight

    if (scrollPosition <= 0) {
        header.style.borderBottom = '.1rem solid transparent'
    } else {
        header.style.borderBottom = '.1rem solid var(--color-border)'
    }




    const sections = document.querySelectorAll('section');
    let activeSectionIndex = ''

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            currentSectionId = section.id; // Obtém o ID da seção visível
        }
    });

    // Adiciona a classe 'active' ao link de navegação correspondente à seção visível
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href').substring(1) === currentSectionId) {
            link.classList.add('active'); // Adiciona a classe 'active' ao link correspondente
        } else {
            link.classList.remove('active'); // Remove a classe 'active' dos outros links
        }


        // console.log(scrollPosition)
    })
})