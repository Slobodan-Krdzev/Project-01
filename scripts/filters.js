function hideAllCards() {
    let allCards = document.querySelectorAll('.single-item')
    allCards.forEach(card => {
        card.style.display = 'none';
    })
}

function showAllCards() {
    let allCards = document.querySelectorAll('.single-item')
    allCards.forEach(card => {
        card.style.display = 'inline-block';
    })
}

// MARKETING
document.querySelector('#marketingBtn').addEventListener('change', filterMarketing);

function filterMarketing() {

    let icon = document.querySelector('#marketingCheckIcon');

    if (document.querySelector('#marketingBtn').checked){
        hideAllCards();

        let marketingCards = document.querySelectorAll('.marketing')
        marketingCards.forEach(card => {
            card.style.display = "inline-block";

            icon.classList.remove('d-none');
            icon.classList.add('d-block');

            document.querySelector('#developingCheckIcon').classList.remove('d-block');
            document.querySelector('#developingCheckIcon').classList.add('d-none');

            document.querySelector('#designCheckIcon').classList.remove('d-block');
            document.querySelector('#designCheckIcon').classList.add('d-none');

            // REMOVE COLOR OF DEVELOPING
            document.querySelector('.single-filter:nth-child(2)').classList.remove('bg-danger');    
            document.querySelector('.single-filter:nth-child(2)').classList.add('bg-dark');

            // REMOVE COLOR OF DESIGN
            document.querySelector('.single-filter:nth-child(3)').classList.remove('bg-danger');    
            document.querySelector('.single-filter:nth-child(3)').classList.add('bg-dark');

            // postavuvanje boja
            document.querySelector('.single-filter').classList.remove('bg-dark');
            document.querySelector('.single-filter').classList.add('bg-danger');

        document.querySelector('#designBtn').checked = false;
        document.querySelector('#developingBtn').checked = false;
        })
        
    } else {
        showAllCards();

        icon.classList.add('d-none');
        icon.classList.remove('d-block');

        document.querySelector('.single-filter').classList.add('bg-dark');
        document.querySelector('.single-filter').classList.remove('bg-danger');
    }
}

// PROGRAMIRANJE 

document.querySelector('#developingBtn').addEventListener('change', filterDeveloping);

function filterDeveloping(){

    let icon = document.querySelector('#developingCheckIcon');

    if(document.querySelector('#developingBtn').checked){
        hideAllCards();

        let developingCards = document.querySelectorAll(".coding");
        developingCards.forEach(card =>{
            card.style.display="inline-block";

            icon.classList.remove('d-none');
            icon.classList.add('d-block');

            document.querySelector('#marketingCheckIcon').classList.remove('d-block');
            document.querySelector('#marketingCheckIcon').classList.add('d-none');

            document.querySelector('#designCheckIcon').classList.remove('d-block');
            document.querySelector('#designCheckIcon').classList.add('d-none');


            // REMOVE COLOR OF MARKETING
            document.querySelector('.single-filter').classList.remove('bg-danger');    
            document.querySelector('.single-filter').classList.add('bg-dark');

            // REMOVE COLOR OF design
            document.querySelector('.single-filter:nth-child(3)').classList.remove('bg-danger');    
            document.querySelector('.single-filter:nth-child(3)').classList.add('bg-dark');


            // postavuvanje boja
            document.querySelector('.single-filter:nth-child(2)').classList.remove('bg-dark');
            document.querySelector('.single-filter:nth-child(2)').classList.add('bg-danger');

        document.querySelector('#marketingBtn').checked = false;
        document.querySelector('#designBtn').checked = false;     
        })
    } else {
        showAllCards();

        icon.classList.add('d-none');
        icon.classList.remove('d-block');

        document.querySelector('.single-filter:nth-child(2)').classList.add('bg-dark');
        document.querySelector('.single-filter:nth-child(2)').classList.remove('bg-danger');
    }
}


// DESIGN

document.querySelector('#designBtn').addEventListener('change', filterDesign)

function filterDesign(){

    let icon = document.querySelector('#designCheckIcon');


    if(document.querySelector('#designBtn').checked){
        hideAllCards();
        let designCards = document.querySelectorAll('.design');
        designCards.forEach(card => {
            card.style.display = "inline-block"

            icon.classList.remove('d-none');
            icon.classList.add('d-block');

            document.querySelector('#marketingCheckIcon').classList.remove('d-block');
            document.querySelector('#marketingCheckIcon').classList.add('d-none');

            document.querySelector('#developingCheckIcon').classList.remove('d-block');
            document.querySelector('#developingCheckIcon').classList.add('d-none');

            // REMOVE COLOR OF marketing
            document.querySelector('.single-filter:nth-child(1)').classList.remove('bg-danger');    
            document.querySelector('.single-filter:nth-child(1)').classList.add('bg-dark');

            // REMOVE COLOR OF DEVELOPING
            document.querySelector('.single-filter:nth-child(2)').classList.remove('bg-danger');    
            document.querySelector('.single-filter:nth-child(2)').classList.add('bg-dark');

            // postavuvanje boja
            document.querySelector('.single-filter:nth-child(3)').classList.remove('bg-dark');
            document.querySelector('.single-filter:nth-child(3)').classList.add('bg-danger');

        document.querySelector('#marketingBtn').checked = false;
        document.querySelector('#developingBtn').checked = false;     
        })
    } else {
        showAllCards();

        icon.classList.add('d-none');
        icon.classList.remove('d-block');

        document.querySelector('.single-filter:nth-child(3)').classList.add('bg-dark');
        document.querySelector('.single-filter:nth-child(3)').classList.remove('bg-danger');
    }  
}



