const main = ()=>{
    const btnOpen = document.querySelector('#open');
    const coverEl = document.querySelector('#cover');

    btnOpen.addEventListener('click',()=>{
        coverEl.classList.add('h-0');
    })

}

document.addEventListener('DOMContentLoaded',main);