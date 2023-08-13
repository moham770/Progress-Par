let prev = document.getElementById("prev");
let Next = document.getElementById("Next")
let circles = document.querySelectorAll(".circle")
let progress =document.querySelector('.progress')

let currentStep =1

function UpdateSteps(){
    for(let i =0;i< circles.length ;i++){
        circles[i].classList[`${ i < currentStep ? 'add' :'remove'}`]('active')
    }
    currentStep >1 ? prev.classList.remove('disabled') :prev.classList.add('disabled')
    currentStep  > circles.length -1 ? Next.classList.add('disabled') :Next.classList.remove('disabled')
    progress.style.width =`${((currentStep -1 )/(circles.length- 1)*100)}%`
}


function nextStep (){
    currentStep ++
    UpdateSteps()
}
function prevStep (){
    currentStep --
    UpdateSteps()
}

Next.addEventListener("click",nextStep);
prev.addEventListener("click",prevStep);


