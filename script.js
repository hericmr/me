// navbarLoader.js

// Carregar o navbar assim que o documento estiver pronto
document.addEventListener("DOMContentLoaded", function () {
    const navbarContainer = document.getElementById('navbar-container');

    if (navbarContainer) {
        fetch('navbar.html')
            .then(response => {
                if (response.ok) {
                    return response.text();
                } else {
                    console.error('Erro ao carregar o navbar: ', response.status);
                }
            })
            .then(data => {
                navbarContainer.innerHTML = data;

                // Adicionar a classe 'active' ao link da página atual
                let path = window.location.pathname;
                let navLinks = document.querySelectorAll(".nav-link");

                navLinks.forEach(function (link) {
                    if (link.getAttribute("href") === path) {
                        link.classList.add("active");
                    }
                });
            })
            .catch(error => {
                console.error('Erro ao carregar o arquivo navbar.html: ', error);
            });
    } else {
        console.error("Contêiner de navbar não encontrado na página.");
    }
});
