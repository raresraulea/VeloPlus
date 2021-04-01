const navigationSlideIn = () => {

    console.log("CALL")
    const navLinks = document.querySelector('.nav__wrapper');
    const burger = document.querySelector('.burger');
    const navItems = document.querySelectorAll('.nav__wrapper li');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');

        navItems.forEach((currentItem, index) => {
            if (currentItem.style.animation) {
                currentItem.style.animation = '';
            }
            else {
                currentItem.style.animation = `navLinkFadeIn 0.5 ease forwards ${index / 7 + 1}s`;
                console.log(index / 7);
            }
        });

        burger.classList.toggle('toggle');
    });
}

function modalClick() {
    //Selectors
    const modalContainer = document.querySelector('.modal');
    const modalImage = document.querySelector('.modal__content');
    const clickedImage = document.querySelector('.article__image');
    const closeButton = document.querySelector('.modal__close');

    //EventListeners
    clickedImage.addEventListener('click', () => {
        modalContainer.style.display = 'block';
        modalImage.src = clickedImage.src;
    })

    closeButton.addEventListener('click', ()=>{
        modalContainer.style.display = 'none';
    })
}

navigationSlideIn();
modalClick();