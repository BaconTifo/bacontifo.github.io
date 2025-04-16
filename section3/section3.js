const AI_module = document.getElementById('AI_module');
const Energy_module = document.getElementById('Energy_module');

const modules = [AI_module, Energy_module];

let activated = 1;

const EM_framework = document.getElementById('Energy_module_framework');
const AM_framework = document.getElementById('AI_module_framework');

AI_module._number = 1;
Energy_module._number = 2;

AM_framework._number = 1;
EM_framework._number = 2;

const Framework = [EM_framework, AM_framework];



modules.forEach((module) =>{
    module.addEventListener('click', ()=>{
        activated = module._number;
        if(activated === 1){
            AI_module.classList.add('module_active');
            AM_framework.style.display = 'block';

            Energy_module.classList.remove('module_active');
            EM_framework.style.display = 'none';
        }
        else if(activated === 2){
            Energy_module.classList.add('module_active');
            EM_framework.style.display = 'block';

            AI_module.classList.remove('module_active');
            AM_framework.style.display = 'none';
        }
    })
})

const Information_AI = document.getElementById('Information_AI');
const Processing_AI = document.getElementById('Processing_AI');
const Memory_AI = document.getElementById('Memory_AI');
const Output_AI = document.getElementById('Output_AI');

const S4AI_AIs = [Information_AI, Processing_AI, Memory_AI, Output_AI];

const input_process = document.getElementById('input_process');
const input_storage = document.getElementById('input_storage');
const process_storage = document.getElementById('process_storage');
const storage_process = document.getElementById('storage_process');
const process_output = document.getElementById('process_output');
const output_storage = document.getElementById('output_storage');

const S4AI_arrows = [input_process, input_storage, process_storage, storage_process, process_output, output_storage];

const S4AIs = [Information_AI, input_process, Processing_AI, input_storage, Memory_AI, process_storage, storage_process, process_output, Output_AI, output_storage];


const S4AI_button = document.getElementById('AMF_forward');
const S4AI_close = document.getElementById('AMF_stop');
const S4_heading = document.getElementById('AMF_Heading');

const S4_next = document.getElementById('AMF_next');
const S4_back = document.getElementById('AMF_back');

const S4A_rot = [];
 

S4AI_close.addEventListener('click', async()=>{
    setTimeout(()=>{
        S4AI_close.style.display = 'none';
    }, 50)
    for(let i = S4AIs.length -1; i>=0; i--){
        const ai = S4AIs[i];
        setTimeout(()=>{
            ai.style.display = 'none';
        },50)
        await new Promise(resolve => setTimeout(resolve, 250));
    }
    setTimeout(()=>{
        S4AI_button.style.display = 'block';
    }, 50); 
    setTimeout(()=>{
        S4_next.style.display = 'none'; 
    }, 50)
    S4_heading.style.display ='block';
})


S4AI_button.addEventListener('click', async()=>{
    S4_heading.style.display = 'none';
    setTimeout(()=>{
        S4AI_button.style.display = 'none';
    }, 50)
    for (let i = 0; i<S4AIs.length; i ++){
        const ai = S4AIs[i];
        if(ai){
            ai.style.display = 'block';
            setTimeout(()=>{
                ai.style.transform = ' scale(1.15) translate(-50%, -50%)';
                setTimeout(()=>{
                    ai.style.transform = ' scale(1) translate(-50%, -50%)';
                }, 500)
            }, 50)
        }
        await new Promise(resolve => setTimeout(resolve, 250));
    }
    S4AI_close.style.display = 'block';
    S4_next.style.display = 'block';
})

const AMFD_info = document.querySelectorAll('.AMFD_info');
const AMFD_heading = document.getElementById('AMFD_heading');

S4_next.addEventListener('click', ()=>{
    S4AIs.forEach((ai) =>{
        ai.style.display = 'none';
    })
    S4AI_close.style.display = 'none';
    S4_next.style.display = 'none';
    S4_back.style.display = 'block';
    AMFD_heading.style.display = 'block';
    AMFD_info.forEach((info) =>{
        info.style.display = 'block';
    })
})
S4_back.addEventListener('click', ()=>{
    S4_back.style.display = 'none';
    S4_next.style.display = 'block';
    S4AI_close.style.display = 'block';
    AMFD_heading.style.display = 'none';
    AMFD_info.forEach((info)=>{
        info.style.display = 'none';
    })
    S4AIs.forEach((ai) =>{
        ai.style.display = 'block';
    })
})

const S4E_next = document.getElementById('EMF_forward');
const EM_first = document.getElementById('EMF_Solutions');
const EM_sec = document.getElementById('EMF_problems');
const EM_thrd = document.getElementById('EMF_sols');

const S4EMs = [EM_first, EM_sec, EM_thrd];

const EM_stop = document.getElementById('EMF_stop');

S4E_next.addEventListener('click', async()=>{
    S4E_next.style.display = 'none';
    for(let i = 0; i<S4EMs.length; i++){
        const EM = S4EMs[i];
        EM.style.opacity = 1;
        setTimeout(()=>{
            EM.style.display = 'block';
        },50)
        
        await new Promise(resolve => setTimeout(resolve, 250));
    }
    EM_stop.style.display = 'block';
})
EM_stop.addEventListener('click', async()=>{
    EM_stop.style.display = 'none';
    for(let i = S4EMs.length - 1; i>=0; i--){
        const EM = S4EMs[i];
        EM.style.opacity = '0';
        setTimeout(()=>{
            EM.style.display = 'none';
        }, 50)

        await new Promise (resolve => setTimeout(resolve, 250));
    }
    S4E_next.style.display = 'block';
})