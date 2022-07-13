let list = [
    "/asset/image/slide.jpg",
    "/asset/image/slide1.jpg",
    "/asset/image/slide2.jpg",
    "/asset/image/slide3.jpg"

]

let allSlide = 0;
let img = document.querySelector('.slider img');
img.src = list[allSlide]

let next = document.querySelector('.right');
let prev = document.querySelector('.left')

next.addEventListener('click', function () {

    allSlide++;

    if (allSlide > list.length - 1) {

        allSlide = 0;
    }

    img.src = list[allSlide]
})

prev.addEventListener('click', function () {

    allSlide--;

    if (allSlide === -1) {

        allSlide = list.length - 1;
    }

    img.src = list[allSlide]
})


function AutoPlay() {

    allSlide++;

    if (allSlide > list.length - 1) {
        allSlide = 0;
    }

    img.src = list[allSlide];

}

setInterval(() => {
        AutoPlay();
    }, 3000);

let dots = document.querySelectorAll('.dots i')

for (let dot of dots) {

    dot.addEventListener('click',function(){
        let active = document.querySelector('.active')
        active.classList.remove('active')
        dot.classList.add('active')

        let id_of_dot = dot.getAttribute('id')
        if (id_of_dot == 1) {
            img.src = list[0]
        }
        if (id_of_dot == 2) {
            img.src = list[1]
        }
        if (id_of_dot == 3) {
            img.src = list[2]
        }
        if (id_of_dot == 4) {
            img.src = list[3]
        }

    })
    
}