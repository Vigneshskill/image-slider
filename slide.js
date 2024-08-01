const container = document.querySelector('.container');
const Btn = document.querySelectorAll('.btn')
const imgList = ["1","2","3","4"]

let index=0
Btn.forEach((button)=>{
    button.addEventListener('click',()=>{
        
        if(button.classList.contains('bt-left')){
            index--;
            if(index<0){
                index = imgList.length-1;
            }
            container.style.background = `url("Assets/${imgList[index]}.jpg") center/cover fixed no-repeat`
        }
        else{
            index++;
            if(index===imgList.length){
                index = 0;
            }
            container.style.background = `url("Assets/${imgList[index]}.jpg") center/cover fixed no-repeat`
        }
    })
})