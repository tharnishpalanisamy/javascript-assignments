
let stars = document.querySelectorAll('.ratingStar') 

let starContainer = document.querySelector('.stars') 

starContainer.addEventListener('click' , function(e){
    if (e.target.classList.contains('ratingStar')) {
        let value = Number(e.target.dataset.id ) 

        stars.forEach(star => {
            if (Number(star.dataset.id) <= value) {
                star.classList.remove('bi-star') 
                star.classList.add('bi-star-fill')
            }
            else{
                star.classList.add('bi-star') 
                star.classList.remove('bi-star-fill')
            }
        })
    }
})