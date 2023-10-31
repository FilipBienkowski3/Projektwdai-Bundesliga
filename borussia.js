//link
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
            this.style.backgroundColor = 'rgba(216, 202, 65, 0.5)';
        } else {
            this.style.backgroundColor = '#D8ca41';
        }
    });

    header.addEventListener('mouseleave', function() {
        var distanceFromTop = window.scrollY;
        if (distanceFromTop > 0) {
            this.style.backgroundColor = 'rgba(216, 202, 65, 0.5)';
        } else {
            this.style.backgroundColor = '#D8ca41';
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
            header.style.backgroundColor = 'rgba(216, 202, 65, 0.5)';
            pageA.style.backgroundColor = 'rgba(216, 202, 65, 0.5)';
            pageB.style.backgroundColor = 'rgba(216, 202, 65, 0.5))';
            home.style.backgroundColor = 'rgba(216, 202, 65, 0.5)';
        } else {
            header.style.backgroundColor = '#D8ca41';
            pageA.style.backgroundColor = '#D8ca41';
            pageB.style.backgroundColor = '#D8ca41';
            home.style.backgroundColor = '#D8ca41';
        }
    });
// scrollowanie a najechanie na na kafelki(kolory)
    function handleMouseInteraction(element) {
        element.addEventListener('mouseenter', function() {
            var distanceFromTop = window.scrollY;
                if (this.id === "home") {
                    this.style.backgroundColor = 'gray';
                } else if (this.id === "pageA") {
                    this.style.backgroundColor = '#Be2528';
                }
            
        });

        element.addEventListener('mouseleave', function() {
            var distanceFromTop = window.scrollY;
            if (distanceFromTop > 0) {
                this.style.backgroundColor = 'rgba(216, 202, 65, 0.5)';
            } else {
                this.style.backgroundColor = '#D8ca41';
            }
        });
    }


    
    handleMouseInteraction(home);
    handleMouseInteraction(pageA);
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
    


//pojawianie sie i znikanie tekstu gdy klikam kafelki

var divKlikalnyklub1 = document.getElementById('klub1');
var divDoPokazaniaklub2 = document.getElementById('klub2');
var divDoPokazaniaklub3 = document.getElementById('klub3');

var divKlikalnymiasto1 = document.getElementById('miasto1');
var divDoPokazaniamiasto2 = document.getElementById('miasto2');
var divDoPokazaniamiasto3 = document.getElementById('miasto3');

var divKlikalnystadion1 = document.getElementById('stadion1');
var divDoPokazaniastadion2 = document.getElementById('stadion2');
var divDoPokazaniastadion3 = document.getElementById('stadion3');

var divKlikalnymaskotka1 = document.getElementById('maskotka1');
var divDoPokazaniamaskotka2 = document.getElementById('maskotka2');
var divDoPokazaniamaskotka3 = document.getElementById('maskotka3');

divKlikalnyklub1.addEventListener('click', function() {
    if (divDoPokazaniaklub2.style.display == 'none') {
        
        divDoPokazaniaklub2.style.display = 'block';
        divDoPokazaniaklub3.style.display = 'block';
        divKlikalnyklub1.style.color = 'black';
        divKlikalnyklub1.style.backgroundColor = '#D8ca41';

        divDoPokazaniamiasto2.style.display = 'none';
        divDoPokazaniamiasto3.style.display = 'none';
        divKlikalnymiasto1.style.color = '#D8ca41';
        divKlikalnymiasto1.style.backgroundColor = 'black';

        divDoPokazaniastadion2.style.display = 'none';
        divDoPokazaniastadion3.style.display = 'none';
        divKlikalnystadion1.style.color = '#D8ca41';
        divKlikalnystadion1.style.backgroundColor = 'black';

        divDoPokazaniamaskotka2.style.display = 'none';
        divDoPokazaniamaskotka3.style.display = 'none';
        divKlikalnymaskotka1.style.color = '#D8ca41';
        divKlikalnymaskotka1.style.backgroundColor = 'black';
    } else {
        divDoPokazaniaklub2.style.display = 'none';
        divDoPokazaniaklub3.style.display = 'none';
        divKlikalnyklub1.style.color = '#D8ca41';
        divKlikalnyklub1.style.backgroundColor = 'black';
    }
});

divKlikalnymiasto1.addEventListener('click', function() {
    if (divDoPokazaniamiasto2.style.display == 'none') {
        divDoPokazaniamiasto2.style.display = 'block';
        divDoPokazaniamiasto3.style.display = 'block';
        divKlikalnymiasto1.style.color = 'black';
        divKlikalnymiasto1.style.backgroundColor = '#D8ca41';

        divDoPokazaniaklub2.style.display = 'none';
        divDoPokazaniaklub3.style.display = 'none';
        divKlikalnyklub1.style.color = '#D8ca41';
        divKlikalnyklub1.style.backgroundColor = 'black';

        divDoPokazaniastadion2.style.display = 'none';
        divDoPokazaniastadion3.style.display = 'none';
        divKlikalnystadion1.style.color = '#D8ca41';
        divKlikalnystadion1.style.backgroundColor = 'black';

        divDoPokazaniamaskotka2.style.display = 'none';
        divDoPokazaniamaskotka3.style.display = 'none';
        divKlikalnymaskotka1.style.color = '#D8ca41';
        divKlikalnymaskotka1.style.backgroundColor = 'black';
    } else {
        divDoPokazaniamiasto2.style.display = 'none';
        divDoPokazaniamiasto3.style.display = 'none';
        divKlikalnymiasto1.style.color = '#D8ca41';
        divKlikalnymiasto1.style.backgroundColor = 'black';
    }
});

divKlikalnystadion1.addEventListener('click', function() {
    if (divDoPokazaniastadion2.style.display == 'none') {
        divDoPokazaniastadion2.style.display = 'block'; 
        divDoPokazaniastadion3.style.display = 'block';
        divKlikalnystadion1.style.color = 'black';
        divKlikalnystadion1.style.backgroundColor = '#D8ca41';

        divDoPokazaniaklub2.style.display = 'none';
        divDoPokazaniaklub3.style.display = 'none';
        divKlikalnyklub1.style.color = '#D8ca41';
        divKlikalnyklub1.style.backgroundColor = 'black';

        divDoPokazaniamiasto2.style.display = 'none';
        divDoPokazaniamiasto3.style.display = 'none';
        divKlikalnymiasto1.style.color = '#D8ca41';
        divKlikalnymiasto1.style.backgroundColor = 'black';

        divDoPokazaniamaskotka2.style.display = 'none';
        divDoPokazaniamaskotka3.style.display = 'none';
        divKlikalnymaskotka1.style.color = '#D8ca41';
        divKlikalnymaskotka1.style.backgroundColor = 'black';
    } else {
        divDoPokazaniastadion2.style.display = 'none';
        divDoPokazaniastadion3.style.display = 'none';
        divKlikalnystadion1.style.color = '#D8ca41';
        divKlikalnystadion1.style.backgroundColor = 'black';
    }
});


divKlikalnymaskotka1.addEventListener('click', function() {
    if (divDoPokazaniamaskotka2.style.display == 'none') {
        divDoPokazaniamaskotka2.style.display = 'block';
        divDoPokazaniamaskotka3.style.display = 'block';
        divKlikalnymaskotka1.style.color = 'black';
        divKlikalnymaskotka1.style.backgroundColor = '#D8ca41';

        divDoPokazaniaklub2.style.display = 'none';
        divDoPokazaniaklub3.style.display = 'none';
        divKlikalnyklub1.style.color = '#D8ca41';
        divKlikalnyklub1.style.backgroundColor = 'black';

        divDoPokazaniamiasto2.style.display = 'none';
        divDoPokazaniamiasto3.style.display = 'none';
        divKlikalnymiasto1.style.color = '#D8ca41';
        divKlikalnymiasto1.style.backgroundColor = 'black';

        divDoPokazaniastadion2.style.display = 'none';
        divDoPokazaniastadion3.style.display = 'none';
        divKlikalnystadion1.style.color = '#D8ca41';
        divKlikalnystadion1.style.backgroundColor = 'black';
    } else {
        divDoPokazaniamaskotka2.style.display = 'none';
        divDoPokazaniamaskotka3.style.display = 'none';
        divKlikalnymaskotka1.style.color = '#D8ca41';
        divKlikalnymaskotka1.style.backgroundColor = 'black';
    }
});

