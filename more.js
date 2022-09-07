function more_clicked(){
    document.querySelector('.back').classList.add('active')
}
(document).ready('click',() => {
    ('.more').click(function(){
        ('.back').addClass('active')
        ('.front').removeClass('active')
    })
    ('.anib').click(function(){
        ('.back').removeClass('active')
        ('.front').addClass('active')})
});