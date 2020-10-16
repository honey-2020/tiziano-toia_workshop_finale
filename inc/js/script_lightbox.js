// tutorial from https://www.youtube.com/watch?v=uKVVSwXdLr0

document.addEventListener('DOMContentLoaded', (event) => {
    const lightbox = document.createElement('div')
    lightbox.id = 'lightbox'
    document.body.appendChild(lightbox);
    const galleryContainer = document.querySelector('.gallery');
    
    // galleryContainer was added to avoid the lightbox effect on the .logo img!!! In the original tutorial there were no problem with because the trademark was an anchor text
    
    // console.log(galleryContainer)
    const images = galleryContainer.querySelectorAll('img');
    
    
    images.forEach(image => {
        image.addEventListener('click', e => {
            lightbox.classList.add('active')
            const img = document.createElement('img')
            img.src = image.src
            while(lightbox.firstChild){
                lightbox.removeChild(lightbox.firstChild)
            }
            lightbox.appendChild(img)
        })
    });
    
    
    lightbox.addEventListener('click', e => {
        if (e.target !== e.currentTarget) return 
        lightbox.classList.remove('active')
    })

});
