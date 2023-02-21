const containerEl=document.querySelector('.container');

const buttonEl=document.querySelector('.btn');

const iconEl=document.querySelector('.close-icon');

const popupContainerEl=document.querySelector('.popup-container');

buttonEl.addEventListener('click',()=>{

    containerEl.classList.add('active');
    popupContainerEl.classList.remove('active');
})

iconEl.addEventListener('click',()=>{

    popupContainerEl.classList.add('active');
    containerEl.classList.remove('active');
})

