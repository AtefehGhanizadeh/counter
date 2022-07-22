

const buttons=document.querySelectorAll(".btn")

//buttons is a dom token list


const counterValue=document.querySelector("span")


let count=0


buttons.forEach((item)=>{

    item.addEventListener("click",()=>{

        //we can get classes of an item with classList method

        if(item.classList.contains("increment")) count++
        else if(item.classList.contains("decrement")) count--
        else count=0
        counterValue.textContent=count
    })

})