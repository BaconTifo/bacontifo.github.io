const button1 = document.querySelector('#subsection1');
const button1target = document.querySelector('#subshow1');

button1.addEventListener('click', function(){
    button1target.style.opacity = 1;
    button1target.style.zIndex = 1000000;
})

const button1button = document.querySelector('#subshow1button');
button1button.addEventListener('click', function(){
    button1target.style.opacity = 0;
    button1target.style.zIndex = 0;

    button1button2.style.opacity = 0;
    button1button2.style.zIndex = 0;
    AIbutton.style.zIndex = 100000;
    AIbutton.style.opacity = 1;

    AIanim.style.opacity = 1;
    AIs.style.opacity = 0;

    
})

const AIanim = document.querySelector('#subshow1anim');
const AIbutton = document.querySelector('#subshow1button2');
const AIs = document.querySelector('#AIs');
const button1button2 = document.querySelector('#subshow1button3');


const merative = document.querySelector('#Merative');
const pathai = document.querySelector('#PathAI');
const deepmind = document.querySelector('#Deepmind');

button1button2.addEventListener('click', function(){
    button1button2.style.opacity = 0;
    button1button2.style.zIndex = 0;
    AIbutton.style.zIndex = 100000;
    AIbutton.style.opacity = 1;

    AIanim.style.opacity = 1;
    
    AIs.style.pointerEvents = 'none';
    AIs.style.opacity = 0;
})


AIbutton.addEventListener('click', function(){
    button1button2.style.opacity = 1;
    button1button2.style.zIndex = 100000;
    AIbutton.style.zIndex = 0;
    AIbutton.style.opacity = 0;

    AIanim.style.opacity = 0;
    AIs.style.pointerEvents =  'auto';
    AIs.style.opacity = 1;

    merative.classList.add("Mer-aniIn");
    merative.addEventListener('animationend',  ()=>{
        merative.classList.remove("Mer-aniIn");
        merative.classList.add("Mer-scaleIn");
    })
    deepmind.classList.add("Deep-aniIn");
    deepmind.addEventListener('animationend', ()=>{
        deepmind.classList.remove("Deep-aniIn");
        deepmind.classList.add("Deep-scaleIn");
    })
    pathai.classList.add("Path-aniIn");
    pathai.addEventListener('animationend', ()=>{
        pathai.classList.remove("Path-aniIn");
        pathai.classList.add("Path-scaleIn");
    })

})

const gameplaybutton = document.querySelector('#subsection2');

const gameplayui = document.querySelector('#subshow2');

const levelnotext = document.getElementById('warning');

const levelno = document.querySelectorAll('.levels');

gameplaybutton.addEventListener('click', ()=>{
    gameplayui.style.opacity = 1;
    gameplayui.style.zIndex = 10000;
    gameplayui.style.pointerEvents = 'auto';

    game.style.opacity = 0;
    game.style.pointerEvents = 'none';


    levellist.style.opacity =0;
    levellist.style.pointerEvents = 'none';

    opentext.style.pointerEvents = 'auto';
    opentext.style.opacity = 1;

    openbutton.style.pointerEvents = 'auto';
    openbutton.style.opacity = 1;

    levelno.style.opacity = 0;

})

const game = document.querySelector('#level1game');

const closebutton = document.querySelector('#closebutton');
closebutton.addEventListener('click', ()=>{

    gameplayui.style.opacity = 0;
    gameplayui.style.zIndex = 0;
    gameplayui.style.pointerEvents = 'none';

    levellist.style.opacity =0;
    levellist.style.pointerEvents = 'none';

    opentext.style.pointerEvents = 'auto';
    opentext.style.opacity = 1;

    openbutton.style.pointerEvents = 'auto';
    openbutton.style.opacity = 1;

    levelno.style.opacity = 0;

    levels.style.opacity = 0;
    levels.style.pointerEvents = 'none';

    game.style.opacity = 0;
    game.style.pointerEvents = 'none';
    
})

const cardlist = document.querySelector('.cards');

const levellist = document.querySelector('#levelselection');
const openbutton = document.querySelector('#playbutton');
const opentext = document.querySelector('#play');

const validlvl = document.querySelector('.level');

openbutton.addEventListener('click', ()=>{
    levellist.style.opacity =1;
    levellist.style.pointerEvents = 'auto';

    opentext.style.pointerEvents = 'none';
    opentext.style.opacity = 0;

    openbutton.style.pointerEvents = 'none';
    openbutton.style.opacity = 0;

    levelno.style.opacity = 0;

    levels.style.opacity = 0;
    levels.style.pointerEvents = 'none';

    game.style.opacity = 0;
    game.style.pointerEvents = 'none';

    cardlist.style.pointerEvents = 'auto';
    cardlist.style.opacity = 1;

})



levelnotext.style.transition = 'all 0.6s cubic-bezier(0.32, 1, 0.23, 1)';

levelno.forEach(level =>{
    level.addEventListener('click', ()=>{

        levelnotext.style.opacity = 1;
        levelnotext.style.zIndex = 1;

        setTimeout(() => {
            levelnotext.style.opacity = 0;
            levelnotext.style.zIndex = -1;
        }, 2000);
    })
})


validlvl.addEventListener('click', ()=>{
    game.style.opacity = 1;
    game.style.pointerEvents = 'auto';

    levellist.style.opacity = 0;
    levellist.style.pointerEvents = 'none';

})

const kidneydes = document.querySelector('.kidneydes');
const trialpart = document.querySelector('.trialpart');

trialpart.addEventListener('mouseenter', ()=>{
    kidneydes.style.opacity = 1;
})
trialpart.addEventListener('mouseleave', ()=>{
    kidneydes.style.opacity = 0;
})

const des1 = document.getElementById('bloodc');
const des2 = document.getElementById('waterc');
const des3 = document.getElementById('filterc');

const card1des = document.getElementById('card1des');
const card2des = document.getElementById('card2des');
const card3des = document.getElementById('card3des');

const cardElements = [
    {card: 'card1', desc: 'card1des'},
    {card: 'card2', desc: 'card2des'},
    {card: 'card3', desc: 'card3des'}
].map(pair=>({
    card:document.getElementById(pair.card),
    desc:document.getElementById(pair.desc)
}));
cardElements.forEach(({card, desc})=>{
    card.addEventListener('mouseenter', ()=>{
        desc.style.opacity = '1';
    })
    card.addEventListener('mouseleave', ()=>{
        desc.style.opacity = '0';
    })
})



const item1 = document.getElementById('blood');
const item2 = document.getElementById('water')
const item3 = document.getElementById('filtered');

const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');

card1._number = 1;
card2._number = 2;
card3._number = 3;

card1._selected = false;
card2._selected = false;
card3._selected = false;

item1._number =  1;
item2._number = 3;
item3._number = 2;

const cards = document.querySelectorAll('.card');
const queues = document.querySelectorAll('.queue');

let counter = 0;
let selected = false;
let canselect = true

cards.forEach((card)=>{
    card.addEventListener('click', ()=>{
        if(!card._selected && canselect){
            cards.forEach((c)=>{
                c.classList.remove('chosen');
                c._selected = false;
            })
            
            card.classList.add('chosen');
            card._selected = true;
            counter = card._number;
            selected = true;
            canselect = false;
        } else if (card._selected){
            card.classList.remove('chosen');
            card._selected = false;
            selected = false;
            canselect = true;
            counter = 0;
        }
    })
})

const announce = document.querySelector('.correct');
const falshe = document.querySelector('.wrong');
const truth = document.querySelector('.right');
const again = document.querySelector('.again');

function checkfiall(){
    const allcards = Array.from(cards).every(card => getComputedStyle(card).display === 'none');
    const allqueues = Array.from(queues).every(queue => getComputedStyle(queue).display === 'none');

    if(allcards && allqueues){
        truth.style.display = 'block';
        again.style.display = 'block';
        trialpart.style.display = 'none';

        trialpart.style.display = 'none';
        again.style.display = 'block';
        falshe.style.display = 'none';
        counter = 0;
        cards.forEach((c) => c._selected = false);
        cards.forEach((c) => c.classList.remove('chosen'));
        selected = false;
        canselect = true;

        cards.forEach((c) => c.style.display = 'none');
        queues.forEach((q) => q.style.display = 'none');
        announce.style.display = 'none';

    }
}

again.addEventListener('click', ()=>{
    cards.forEach((c) => c._selected = false);
    cards.forEach((c) => c.classList.remove('chosen'));
    selected = false;
    canselect = true;

    cards.forEach((c) => c.style.display = 'block');
    queues.forEach((q) => q.style.display = 'block');
    trialpart.style.display = 'block';

    announce.style.display = 'block';

    again.style.display = 'none';

    announce.style.display = 'none';
    truth.style.display = 'none';
    falshe.style.display = 'none';
})

queues.forEach((queue) =>{
    queue.addEventListener('click', ()=>{
        if(counter > 0){
            if(counter === queue._number){
                Array.from(cards).find(card => card._number === counter)._selected = false;
                Array.from(cards).find(card => card._number === counter).classList.remove('chosen');
                selected = false;
                canselect = true;
                

                announce.style.display = 'block';
                setTimeout(()=>{
                    announce.style.display = 'none';
                }, 2000);


                Array.from(cards).find(card => card._number === counter).style.display = 'none';
                queue.style.display = 'none';
                

                checkfiall();  
                
                counter = 0;

            }
            else{
                falshe.style.display = 'block';
                trialpart.style.display = 'none';
                again.style.display = 'block';
                truth.style.display = 'none';
                counter = 0;
                cards.forEach((c) => c._selected = false);
                cards.forEach((c) => c.classList.remove('chosen'));
                selected = false;
                canselect = true;

                cards.forEach((c) => c.style.display = 'none');
                queues.forEach((q) => q.style.display = 'none');
                announce.style.display = 'none';
            }
               
        }
    })
})


item1.addEventListener('mouseenter', ()=>{
    des1.style.opacity = '1';
})
item2.addEventListener('mouseenter', ()=>{
    des2.style.opacity = '1';
})
item3.addEventListener('mouseenter', ()=>{
    des3.style.opacity = '1';
})
item1.addEventListener('mouseleave', ()=>{
    des1.style.opacity = '0';
})
item2.addEventListener('mouseleave', ()=>{
    des2.style.opacity = '0';
})
item3.addEventListener('mouseleave', ()=>{
    des3.style.opacity = '0';
})




