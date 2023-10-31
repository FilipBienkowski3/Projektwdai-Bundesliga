//linki
function przekierujhome() {
    window.location.href = 'bundesliga.html'; 
}

function przekierujbay() {
    window.location.href = 'bayern.html'; 
}
function przekierujbor() {
    window.location.href = 'borussia.html'; 
}





document.addEventListener("DOMContentLoaded", function() {
    var header = document.getElementById('header');
    var logo = document.getElementById('logo');
    var pageA = document.getElementById('pageA');
    var pageB = document.getElementById('pageB');




// kolor tła headera zalezny czy scroluje czy nie i czy daje mysze wtedy na niego czy nie
    header.addEventListener('mouseenter', function() {
        var distanceFromTop = window.scrollY;
        if (distanceFromTop > 0) {
            this.style.backgroundColor = 'rgba(190, 37, 40, 0.5)'; 
        } else {
            this.style.backgroundColor = '#Be2528';
        }
    });

    header.addEventListener('mouseleave', function() {
        var distanceFromTop = window.scrollY;
        if (distanceFromTop > 0) {
            this.style.backgroundColor = 'rgba(190, 37, 40, 0.5)'; 
        } else {
            this.style.backgroundColor = '#Be2528';
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
            header.style.backgroundColor = 'rgba(190, 37, 40, 0.5)';
            pageA.style.backgroundColor = 'rgba(190, 37, 40, 0.5)';
            pageB.style.backgroundColor = 'rgba(190, 37, 40, 0.5)';
            home.style.backgroundColor = 'rgba(190, 37, 40, 0.5)';
        } else {
            header.style.backgroundColor = '#Be2528';
            pageA.style.backgroundColor = '#Be2528';
            pageB.style.backgroundColor = '#Be2528';
            home.style.backgroundColor = '#Be2528';
        }
    });
// scrollowanie a najechanie na na kafelki(kolory)

    function handleMouseInteraction(element) {
        element.addEventListener('mouseenter', function() {
            var distanceFromTop = window.scrollY;
                if (this.id === "home") {
                    this.style.backgroundColor = 'gray';
                } else if (this.id === "pageB") {
                    this.style.backgroundColor = '#D8ca41';
                }
            
        });

        element.addEventListener('mouseleave', function() {
            var distanceFromTop = window.scrollY;
            if (distanceFromTop > 0) {
                this.style.backgroundColor = 'rgba(128, 128, 128, 0.05)';
            } else {
                this.style.backgroundColor = '#Be2528';
            }
        });
    }


    
    handleMouseInteraction(home);
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
var divNajechany1 = document.getElementById('tekst2');
var zdjecie1 = document.getElementById('stadion');
var tekst1 = document.getElementById('tekst2.2');

divNajechany1.addEventListener('mouseover', function() {
    tekst1.style.display = 'block';
    zdjecie1.style.display = 'none';
});

divNajechany1.addEventListener('mouseout', function() {
    tekst1.style.display = 'none';
    zdjecie1.style.display = 'block';
});



