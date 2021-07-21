// resources
const container = document.querySelector('.container'); 
const app = document.querySelector('.app'); 

// toggle-details
function toggleDetails() {    
    container.classList.toggle('active');

    if(window.innerWidth < 993) {
            const scrollToEl = document.getElementById("content"); 

            window.scrollTo({
            top: window.pageYOffset + scrollToEl.getBoundingClientRect().top,
            behavior: "smooth"
        });
    }
}

//loader
setTimeout( function() { app.classList.remove('loading') }, 1400 );