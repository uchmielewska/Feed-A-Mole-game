//time = Math.floor(Math.random() * 18) + 2

function getSadInterval() {
    return Date.now() + 1000 //each status lasts for 1s
}

const mole = [
    {
        status: "sad",
        next: getSadInterval,
        king: false,
        node: document.querySelector('#hole-0')
    },
    {
        status: "sad",
        next: getSadInterval,
        king: false,
        node: document.querySelector('#hole-1')
    },
    {
        status: "sad",
        next: getSadInterval,
        king: false,
        node: document.querySelector('#hole-2')
    },
    {
        status: "sad",
        next: getSadInterval,
        king: false,
        node: document.querySelector('#hole-3')
    },
    {
        status: "sad",
        next: getSadInterval,
        king: false,
        node: document.querySelector('#hole-4')
    },
    {
        status: "sad",
        next: getSadInterval,
        king: false,
        node: document.querySelector('#hole-5')
    },
    {
        status: "sad",
        next: getSadInterval,
        king: false,
        node: document.querySelector('#hole-6')
    },
    {
        status: "sad",
        next: getSadInterval,
        king: false,
        node: document.querySelector('#hole-7')
    },
    {
        status: "sad",
        next: getSadInterval,
        king: false,
        node: document.querySelector('#hole-8')
    },
    {
        status: "sad",
        next: getSadInterval,
        king: false,
        node: document.querySelector('#hole-9')
    }
]