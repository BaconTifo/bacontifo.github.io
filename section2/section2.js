const simple_product = document.getElementById('simple_product');
const more_integrated = document.getElementById('more_integrated');
const release = document.getElementById('release');

const simple_product_ui = document.getElementById('simple_product_UI');
const more_integrated_ui = document.getElementById('more_integrated_UI');
const release_ui = document.getElementById('release_UI');

const main_text = document.querySelector('.section2title');

const products = [simple_product, more_integrated, release];
const products_ui = [simple_product_ui, more_integrated_ui, release_ui];

simple_product._value = 1;
more_integrated._value = 2;
release._value = 3;

simple_product_ui._value = 1;
more_integrated_ui._value = 2;
release_ui._value  = 3;

const product_top = '10%';
const product_left = '5%';

const button_width = '200px';
const button_height = '200px';

const initial_state = products.map(p =>({
    element: p,
    top: p.style.top,
    left: p.style.left,
    width: p.style.width,
    height: p.style.height,
    display: p.style.display
}));

let clicked = false;

products.forEach((c) => {
    c.addEventListener('click', ()=>{

        const ui_select = products_ui.find((product) => product._value === c._value);

        if(clicked === false){
            c.style.top = product_top;
        c.style.left = product_left;
        c.style.width = button_width;
        c.style.height = button_height;

        main_text.style.display =  'none';
        ui_select.style.display =  'flex';

        setTimeout(()=>{
            ui_select.style.left = '15%';
        }, 50)

        products
            .filter(product => product._value !== c._value)
            .forEach(product => {
                product.style.display = 'none';
            })
        clicked = true;
        }
        else if(clicked === true){
            main_text.style.display = 'block';

            initial_state.forEach(({element, top, left, width, height, display})=>{
                element.style.top = top;
                element.style.left = left;
                element.style.width = width;
                element.style.height = height;
                element.style.display = display;
            })

            ui_select.style.left = '1800px';
            setTimeout(()=>{
                ui_select.style.display = 'none';
            }, 100)
            

            clicked = false;
        }
    })
})

const sp_first_step = document.getElementById('sp_first_step');
const sp_second_step = document.getElementById('sp_second_step');
const sp_third_step = document.getElementById('sp_third_step');

sp_first_step._number = 1;
sp_second_step._number = 2;
sp_third_step._number = 3;

const sp_fs_UI = document.getElementById('sp_fs_UI');
const sp_ss_UI = document.getElementById('sp_ss_UI');
const sp_ts_UI = document.getElementById('sp_ts_UI');

sp_fs_UI._number = 1;
sp_ss_UI._number = 2;
sp_ts_UI._number = 3;

const sp_steps = [sp_first_step, sp_second_step, sp_third_step];
const sp_steps_UI = [sp_fs_UI, sp_ss_UI, sp_ts_UI];

sp_steps.forEach((step) =>{
    step.addEventListener('click', ()=>{
        const step_UI = sp_steps_UI.find((UI) => UI._number === step._number);
        step_UI.style.display = 'block';
        setTimeout(()=>{
            step_UI.style.height = '600px';
        }, 50)
    })
})

sp_steps_UI.forEach((UI)=>{
    UI.addEventListener('click', ()=>{
        UI.style.height = '150px';
        setTimeout(()=>{
            UI.style.display = 'none';
        }, 100)
    })
})

const more_integrated_first = document.getElementById('more_integrated_first');
const more_integrated_second = document.getElementById('more_integrated_second');
const more_integrated_third = document.getElementById('more_integrated_third');

const mi_first_UI = document.getElementById('mi_first_UI');
const mi_second_UI = document.getElementById('mi_second_UI');
const mi_third_UI = document.getElementById('mi_third_UI');

more_integrated_first._number = 1;
more_integrated_second._number = 2;
more_integrated_third._number = 3;

mi_first_UI._number = 1;
mi_second_UI._number = 2;
mi_third_UI._number = 3;

const mi_idea = [more_integrated_first, more_integrated_second, more_integrated_third];
const mi_idea_UI = [mi_first_UI, mi_second_UI, mi_third_UI];

mi_idea.forEach((idea) =>{
    idea.addEventListener('click', ()=>{
        const mi_UI = mi_idea_UI.find((UI) => UI._number === idea._number)
        mi_UI.style.display = 'flex';
        setTimeout(()=>{
            mi_UI.style.height = '600px';
        }, 50)
    })
})
mi_idea_UI.forEach((UI)=>{
    UI.addEventListener('click', ()=>{
        UI.style.height = '150px';
        setTimeout(()=>{
            UI.style.display = 'none';
        }, 100)
    })
})

const release_first = document.getElementById('release_first');
const release_second = document.getElementById('release_second');
const release_third = document.getElementById('release_third');

const release_open = document.getElementById('rl_open');
const release_close = document.getElementById('rl_close');

const rl_uis = [release_first, release_second, release_third];

const rl_ui_initial = rl_uis.map(p =>({
    element: p,
    top: p.style.top,
    left: p.style.left,
    width: p.style.width,
    height: p.style.height,
    display: p.style.display
}));

const rl_ui_final = [
    {top: '40%', left: '0%', width: '250px', height: '250px', display: 'flex'},
    {top: '55%', left: '60%', width: '240px', height: '240px', display: 'flex'},
    {top: '15%', left: '33%', width: '245px', height: '245px', display: 'flex'}
];

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

const f_pos = []

release_open.addEventListener('click', async ()=>{
    release_open.style.display = 'none';
    
    for (let i = 0; i<rl_uis.length; i++){
        const ui = rl_uis[i];
        const final = rl_ui_final[i];

        ui.style.display = final.display;

        await sleep(50);

        ui.style.top = final.top;
        ui.style.left = final.left;
        ui.style.width = final.width;
        ui.style.height = final.height;

        ui.style.transform = `scale(${1.2}, ${1.2})`;
        await sleep(500);
        ui.style.transform = `scale(${1}, ${1})`;
        await sleep(1000);
        
    }
    release_close.style.display = 'flex'; 
})
release_close.addEventListener('click', async () =>{
    release_close.style.display = 'none';
    rl_uis.forEach((ui) =>{
        rl_ui_initial.forEach(({element, top, left, width, height, display})=>{
            
            element.style.top = top;
            element.style.left = left;
            element.style.width = width;
            element.style.height = height;
            

            setTimeout(()=>{
                element.style.display = display;
            }, 50)
        })
    })
    release_open.style.display = 'flex';
})