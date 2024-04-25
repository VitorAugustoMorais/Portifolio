closeMenu.addEventListener('click', function () {
    closeMenu.style.display = 'none'
    nav.style.display = 'none'
    openMenu.style.display = 'inline'
})

nav.addEventListener('click', function () {
    closeMenu.style.display = 'none'
    nav.style.display = 'none'
    openMenu.style.display = 'inline'
})

openMenu.addEventListener('click', function () {
    closeMenu.style.display = 'inline'
    nav.style.display = 'inline'
    openMenu.style.display = 'none'
})

window.addEventListener('scroll', function () {
    const header = document.querySelector('header')
    const scrollPosition = window.pageYOffset - header.offsetHeight

    if (scrollPosition <= 0) {
        header.style.borderBottom = '.1rem solid transparent'
    } else {
        header.style.borderBottom = '.1rem solid var(--color-border)'
    }




    // const sections = document.querySelectorAll('section');
    // const navLinks = document.querySelectorAll('nav a');
    
    // function highlightNavLink() {
    //     let currentSectionId = '';
    
    //     sections.forEach(section => {
    //         const rect = section.getBoundingClientRect();
    //         if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    //             currentSectionId = section.id; // Obtém o ID da seção visível
    //         }
    //     });
    
    //     // Adiciona a classe 'active' ao link de navegação correspondente à seção visível
    //     navLinks.forEach(link => {
    //         if (link.getAttribute('href').substring(1) === currentSectionId) {
    //             link.classList.add('active'); // Adiciona a classe 'active' ao link correspondente
    //         } else {
    //             link.classList.remove('active'); // Remove a classe 'active' dos outros links
    //         }
    //     });
    // }
    
    // window.addEventListener('scroll', function() {
    //     highlightNavLink();
    // });
    
    // // Chamada inicial para garantir que o link de navegação é destacado corretamente quando a página é carregada
    // highlightNavLink();
    

        // console.log(scrollPosition)
    })







function highlightNavLink() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.clientHeight;

        if (scrollPosition >= sectionTop - windowHeight / 2 && scrollPosition < sectionBottom - windowHeight / 2) {
            const sectionId = section.getAttribute('id');
            navLinks.forEach(link => {
                if (link.getAttribute('href').substring(1) === sectionId) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', function() {
    highlightNavLink();
});

// Chamada inicial para garantir que o link de navegação é destacado corretamente quando a página é carregada
highlightNavLink();
