const main = ()=>{
    const btnOpen = document.querySelector('#open');
    const coverEl = document.querySelector('#cover');

    btnOpen.addEventListener('click',()=>{
        coverEl.classList.replace('h-screen','h-0');
    })
    AOS.init();

    // const setHeight = ()=>{
    //     const currentHeight = window.innerHeight;
    //     document.body.style.height = `${currentHeight}px`;
    // };
    // window.addEventListener('resize',setHeight);
    // setHeight();
    // const setWidth = ()=>{
    //     const currentWidth = window.innerWidth;
    //     document.body.style.width = `${currentWidth}px`;
    // };
    // window.addEventListener('resize',setWidth);
    // setWidth();
}

document.addEventListener('DOMContentLoaded',main);