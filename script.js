function addToList(){
    var task=document.querySelector("#task")
    var listitems=document.querySelector("#listitems")
    if(task.value==""){
        alert("Add some task !!")
    }else{
        var item=document.createElement("li")
        item.innerHTML="<i class='fa-regular first fa-circle'></i> "+task.value+" <span><i class='fa-solid last fa-trash'></i></span>"

        listitems.appendChild(item)
        task.value=" "
    }
    saveToLocalStorage()
    getFromLocalStorage()
}
function saveToLocalStorage(){
    var listitems=document.querySelector("#listitems")
    localStorage.setItem("items",listitems.innerHTML)
    task()
}

function getFromLocalStorage(){
    var listitems=document.querySelector("#listitems")
    listitems.innerHTML=localStorage.getItem("items")
    task()
}
getFromLocalStorage()
function task(){
    var items=document.querySelectorAll("#listitems li")
    var listitems=document.querySelector("#listitems")
    console.log(items)
    items.forEach(function(item){
        item.addEventListener("click",function(details){
        
        if(details.target.tagName=="I"){
            listitems.removeChild(item)
        }
        else if(details.target.tagName=="LI"){
            console.log("gfhhfhh")
            item.style.textDecoration="line-through"
            var checkIcon=item.childNodes[0];
            if(checkIcon.classList.contains("fa-circle")){
                checkIcon.classList.remove("fa-circle")
                checkIcon.classList.add("fa-circle-check")
            }
        }
        saveToLocalStorage()
    })
})
}


