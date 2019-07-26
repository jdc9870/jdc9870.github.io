$(document).on('click','.navbar-toggle-xs.in',function(e) {
    if($(e.target).is('a')) {
        $(this).collapse('hide');
    }
});

document.querySelector('.navbar-togger.in').addEventListener('click', 
    (e) => { if((e.target).is('a')) (this).collapse('hide')});
