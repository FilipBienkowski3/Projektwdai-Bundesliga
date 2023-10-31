function przekierujhome() {
    window.location.href = 'index.html';
}

function przekierujbay() {
    window.location.href = 'bayern.html';
}
function przekierujbor() {
    window.location.href = 'borussia.html';
}




document.addEventListener("DOMContentLoaded", function() {
    var pageA = document.getElementById("pageA");
    var pageB = document.getElementById("pageB");

// kolor tła headera zalezny czy scroluje czy nie i czy daje mysze wtedy na niego czy nie
    var header = document.getElementById('header');
    header.addEventListener('mouseenter', function() {
        var distanceFromTop = window.scrollY;
        if (distanceFromTop > 0) {
            this.style.backgroundColor = 'rgba(128, 128, 128, 0.5)';
        } else {
            this.style.backgroundColor = 'gray';
        }
    });

    header.addEventListener('mouseleave', function() {
        var distanceFromTop = window.scrollY;
        if (distanceFromTop > 0) {
            this.style.backgroundColor = 'rgba(128, 128, 128, 0.5)';
        } else {
            this.style.backgroundColor = 'gray';
        }
    });

//kolory/przezroczystosc kafelkow podczas scrolowania

    window.addEventListener('scroll', function() {
        var distanceFromTop = window.scrollY;
        var header = document.getElementById('header');
        var pageA = document.getElementById('pageA');
        var pageB = document.getElementById('pageB');
        var home = document.getElementById('home');

        if (distanceFromTop > 0) {
            header.style.backgroundColor = 'rgba(128, 128, 128, 0.5)';
            pageA.style.backgroundColor = 'rgba(128, 128, 128, 0.03)';
            pageB.style.backgroundColor = 'rgba(128, 128, 128, 0.03)';
            home.style.backgroundColor = 'rgba(128, 128, 128, 0.03)';
        } else {
            header.style.backgroundColor = 'gray';
            pageA.style.backgroundColor = 'gray';
            pageB.style.backgroundColor = 'gray';
            home.style.backgroundColor = 'gray';
        }
    });

// scrollowanie a najechanie na na kafelki(kolory)
    function handleMouseInteraction(element) {
        element.addEventListener('mouseenter', function() {
            var distanceFromTop = window.scrollY;
                if (this.id === "pageA") {
                    this.style.backgroundColor = '#Be2528';
                } else if (this.id === "pageB") {
                    this.style.backgroundColor = '#D8ca41';
                }
        });

        element.addEventListener('mouseleave', function() {
            var distanceFromTop = window.scrollY;
            if (distanceFromTop > 0) {
                this.style.backgroundColor = 'rgba(128, 128, 128, 0.05)';
            } else {
                this.style.backgroundColor = 'gray';
            }
        });
    }

    handleMouseInteraction(pageA);
    handleMouseInteraction(pageB);
});
//scrolowanie a przezroczystosc headera
document.addEventListener("DOMContentLoaded", function() {
    var imageContainer = document.getElementById("left-section");
    window.addEventListener('scroll', function() {
        var distanceFromTop = window.scrollY;
        var header = document.getElementById('header');

        if (distanceFromTop > 0 && !header.classList.contains('mouse-on-header')) {
            imageContainer.style.opacity = '0.5';
        } else {
            imageContainer.style.opacity = '1'; 
        }
    });

//gdy najade na header a scrollowalem pokaz pelny kolor/jestem podczas scrollowania a sciagam myszke-powrot do przezroczystosci
    var header = document.getElementById('header');
    header.addEventListener('mouseenter', function() {
        header.classList.add('mouse-on-header');
        if (window.scrollY > 0) {
            imageContainer.style.opacity = '1';
        }
    });

    header.addEventListener('mouseleave', function() {
        header.classList.remove('mouse-on-header');
        if (window.scrollY > 0) {
            imageContainer.style.opacity = '0.5';
        }
    });
});


//zdjecie na divie zamiast tekstu
var divNajechany = document.getElementById('tekst2');
var zdjecie = document.getElementById('tarcza');
var tekst = document.getElementById('tekst2.2');

divNajechany.addEventListener('mouseover', function() {
    zdjecie.style.display = 'block';
    tekst.style.display = 'none';
});

divNajechany.addEventListener('mouseout', function() {
    zdjecie.style.display = 'none';
    tekst.style.display = 'block';
});

//funkcje formularza
function sprawdzFormularz() {
    var prośba = document.getElementById('prośba').value;
    var email = document.getElementById('email').value;

    if (prośba === '') {
        alert('Pole "Prośba" nie może być puste!');
    }

    if (email === '') {
        alert('Pole "Email" nie może być puste!');
    }

    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        alert('Wprowadź poprawny adres email!');
    }
}