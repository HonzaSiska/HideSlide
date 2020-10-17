

/*anime ({
    targets: '#bruntal_logo',
    translateX: [{
    value: 270, duration: 3000, delay: 1000, 
    }],

    
})
anime ({
    targets: '.main-nav',
    translateY: 10,
    duration: 100,

    
}) */

anime.timeline ({
    easing: 'easeOutExpo',
    
})
.add ({
    targets: '#bruntal_logo',
    translateX: [{
    value: 270, duration: 1000,
    
    }],
})
.add ({
    targets: '#zaba',
    rotateY: '360deg',
    
})
.add ({
    targets: '#homeTown',
    translateY: 10,
    duration :500,
    offset:'-=2000',
    
})



  

