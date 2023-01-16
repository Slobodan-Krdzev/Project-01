document.querySelector('#select').addEventListener('click', hideLabel);

function hideLabel(){
    if(document.querySelector('#labelOption').classList.contains('d-block')){
        document.querySelector('#labelOption').classList.remove('d-block');
        document.querySelector('#labelOption').classList.add('d-none');
    }
}

let formBtn = document.querySelector('#formBtn').addEventListener('click', alignBtn)
let btnRow = document.querySelector('#buttonRow');

function alignBtn(){
    if(btnRow.classList.contains('align-items-end')){
        btnRow.classList.remove('align-items-end');
        btnRow.classList.add('align-items-center')
    }
}

$(function(){
    let $form = $("#form");
    if($form.length){
        $form.validate({
            rules:{
                fullname:{
                    required: true
                },
                companyname:{
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                tel :{
                    required: true,
                    minlength: 9,
                    maxlength: 12
                },
                typeofstudent: {
                    required: true
                }
            },
            messages:{
                fullname:{
                    required: 'Ве молиме внесете го вашето име и презиме.'
                },
                companyname: {
                    required: 'Ве молиме внесете го името на вашата компанија.'
                },
                email: {
                    required: 'Ве молиме внесете ja емаил адресата на вашата компанија.',
                    email: 'Ве молиме внесете емаил адреса во точен формат.'
                },
                tel :{
                    required: "Ве молиме внесете го вашиот телефонски број за контакт.",
                    minlength: 'Ве молиме внесете телефонски број во точен формат.',
                    maxlength: 'Ве молиме внесете телефонски број во точен формат.'
                },
                typeofstudent: {
                    required: "Ве молиме одберете студенти."
                }
            }
        })
    }
})





