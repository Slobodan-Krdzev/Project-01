// Pagination for Mobile and Tablet


const cards = document.querySelectorAll(".single-item")
let showMoreBtn = document.querySelector("#loadMore")
let showMoreSection = document.querySelector('.load-more-section');
let visibleCards = 6;
showMoreBtn.addEventListener("click", function(){
    console.log(showMoreSection);
    for (let i = visibleCards; i < visibleCards + 6; i++){
        if(cards[i]){
            cards[i].style.display = "flex";
        }
    }
    visibleCards += 6;
    if(visibleCards >= cards.length){
        showMoreSection.classList.add('d-none')
        showMoreSection.classList.remove('d-lg-none')

    }
})
