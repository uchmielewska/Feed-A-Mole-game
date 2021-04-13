//status lasts for 1s
function getSadInterval() {
    return Date.now() + 1000
}
//status lasts for numebr from interval (2s to 20s)
function getGoneInterval() {
    return Date.now() + Math.floor(Math.random() * 18000) + 2000;
}
//status lasts for numebr from interval (2s to 5s)
function getHungryInterval() {
    return Date.now() + Math.floor(Math.random() * 3000) + 2000;
}

const mole = [
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.querySelector('#hole-0')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.querySelector('#hole-1')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.querySelector('#hole-2')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.querySelector('#hole-3')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.querySelector('#hole-4')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.querySelector('#hole-5')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.querySelector('#hole-6')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.querySelector('#hole-7')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.querySelector('#hole-8')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.querySelector('#hole-9')
    }
];

function getNextStatus(mole) {
    switch (mole.status) {
        case "sad":
            mole.next = getSadInterval();
            mole.status = "leaving";
            mole.node.children[0].src = './mole-game/mole-leaving.png';
            break;
        case "leaving":
            mole.next = getGoneInterval();
            mole.status = "gone";
            mole.node.children[0].classList.add("gone");
            break;
        case "gone":
            mole.status = "hungry";
            mole.next = getHungryInterval();
            mole.node.children[0].classList.add("hungry");
            mole.node.children[0].classList.remove("gone");
            mole.node.children[0].src = './mole-game/mole-hungry.png';
            break;
        case "hungry":
            mole.status = "sad";
            mole.next = getSadInterval();
            mole.node.children[0].classList.remove("hungry");
            mole.node.children[0].src = './mole-game/mole-sad.png';
            break;
    }
}

function feed(event) {
    if (event.target.tagName !== 'IMG' || !event.target.classList.contains("hungry")) {
        return;
    }
    const mole = mole[parseInt(event.target.dataset.index)]

    mole.status = "fed";
    mole.next = getSadInerval();
    mole.node.children[0].src = './mole-game/mole-fed.png';
    mole.node.children[0].classList.remove("hungry");
}

let runAgainAt = Date.now() + 100;
function nextFrame() {
    const now = Date.now();
    if (runAgainAt <= now) {
        for (let i = 0; i < mole.length; i++) {
            if (mole[i].next <= now) {
                getNextStatus(mole[i]);
            }
        }
        runAgainAt = now + 100;
    }
    requestAnimationFrame(nextFrame);
}

document.querySelector('.bg').addEventListener('click', feed);

nextFrame();
