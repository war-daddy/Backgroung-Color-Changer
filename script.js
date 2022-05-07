let color = ["red","blue,","tan","green","pink","yellow","black","white","tomato","pale"];
const btn = document.querySelector("button");
let i = 0;
btn.addEventListener("click",()=>{
    
document.querySelector(".main").style.backgroundColor = color[i];
i++;
if(i>=10)i = 0;
})
