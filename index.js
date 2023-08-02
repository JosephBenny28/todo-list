let inputs = document.getElementById("inp");
let text = document.querySelector(".text");
let errMsg = document.getElementById('err-msg');

function Add(){
    if(inputs.value == ""){
        errMsg.innerHTML = "Please enter the task";
    }
        else{
        errMsg.innerHTML = "";
        let list = document.createElement("ul");
        list.innerHTML=`${inputs.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(list);
        inputs.value="";
        list.addEventListener('click',()=>{
            list.style.textDecoration = 'line-through'
            
        })
        list.querySelector("i").addEventListener("click" , remove);

        function remove(){
            list.remove()
        }
    }
}




