const burgerButton = document.getElementById('mobile-burger-button');
const navbar = document.getElementById('navbarMenuHeroC');

burgerButton.onclick = function () {
    const burgerClass = burgerButton
    .className
    .split(' ');
    if (burgerClass.includes('is-active')) {
    burgerButton.className = burgerClass.filter(val => val !== 'is-active').join(' ')
    navbar.className = navbar.className.split(' ').filter(val => val !== 'is-active').join(' ')
    }
    else {
    burgerButton.className = `${burgerClass.join(' ')} is-active`
    navbar.className = `${navbar.className} is-active`
    }
}


const slide = document.getElementById('slideshow')

const images = ['https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg','http://blog.mercycrowd.com/wp-content/uploads/2017/12/maxresdefault.jpg', 'https://eyesofodysseus.files.wordpress.com/2013/03/356793.jpg']


setTimer(0)

function setTimer(ind){
    setTimeout(() => {
        slide.src = images[ind%images.length]
        setTimer(ind + 1)
    }, 5000)
}