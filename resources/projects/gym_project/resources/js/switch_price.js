var switch_button = document.getElementById('switch');
var dark_theme = false;

switch_button.addEventListener("mouseenter",()=>{
    switch_button.style.color = '#e6e6e6';
});

switch_button.addEventListener('mouseleave',()=>{
    switch_button.style.color = '';
});

change = () =>{
    document.body.classList.toggle('dark-mode');
    document.getElementsByTagName('nav')[0].classList.toggle('dark-mode');

    document.getElementsByTagName('main')[0].classList.toggle('dark-mode');
    document.getElementById('goal').classList.toggle('dark-mode');
    document.getElementsByTagName('h1')[7].classList.toggle('dark-mode');
    
    var items1  = document.getElementsByTagName('th');
    var items2  = document.getElementsByTagName('td');

    Object.values(items1).forEach(ele =>{
        ele.classList.toggle('dark-mode');
    })

    Object.values(items2).forEach(ele => {
        ele.classList.toggle('dark-mode');
    })

    document.getElementsByTagName('footer')[0].classList.toggle('dark-mode');
}

switch_button.addEventListener('click',()=>{
    change();

    var mode = sessionStorage.getItem('theme');
    if(mode == 'dark'){
        dark_theme = true;
    } else{
        dark_theme = false;
    }

    if(dark_theme == false){
        dark_theme = true;
        // console.log(dark_theme);
    } else{
        dark_theme = false;
        // console.log(dark_theme);
    }
    sessionStorage.removeItem('theme');
    if(dark_theme){
        sessionStorage.setItem('theme','dark');
    } else{
        sessionStorage.setItem('theme','light');
    }
})

var mode = sessionStorage.getItem('theme');
if(mode == 'dark'){
    change();
}