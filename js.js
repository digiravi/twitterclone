document.querySelector('#profile-Button').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'none';
});

document.querySelector('#profile-Button').addEventListener('click', function(){
    document.querySelector('.feed__header').style.position = 'static';
});
document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.feed__header').style.position = 'sticky';
});