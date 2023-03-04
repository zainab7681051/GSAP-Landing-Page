window.addEventListener('load', loader);

function loader() {

    const TLLOAD = gsap.timeline({
        default: {
            ease: "power2"
        }
    })

    TLLOAD
        .from('.home-container .aside', {
            width: 0,
            duration: .5,
            delay: .5
        })
        .from('.home-container .hero .place-img', {
            "clip-path": "polygon(0 0, 0% 100%, 0% 100%, 0% 0%)",
            duration: .8,
            deplay: 1
        }, "-=.5")
        .from('.home-container .hero nav ul li', {
            y: "100%",
            opacity: 0,
            stagger: '.1s',
            duration: 0.3
        }, "+=.3")
        .from('.home-container .content', {
            height: 0,
            duration: .5
        })
        .from('.home-container .content h6 span', {
            top: '100%',
            duration: .3,
        })
        .from('.home-container .content h5 span', {
            top: '100%',
            duration: .3,
        }, "-=.1")
        .from('.home-container .content p span', {
            top: '100%',
            stagger: '.1s',
            duration: .3,
        })
        .from('.home-container .content button', {
            height: '0',
            duration: .3,
        })
}