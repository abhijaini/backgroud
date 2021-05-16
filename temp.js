var button = document.getElementById("enter")
var text = document.getElementById("userinput")
var ul = document.querySelector("ul")
var deleteButtons = document.getElementsByClassName("delete")


for (var i = 0 ; i < deleteButtons.length; i++){
    deleteButtons[i].addEventListener("click",removeParent)
}

function removeParent(event){
    event.target.removeEventListener("click",removeParent)
    event.target.parentNode.remove()

}


function createListElement(){
    var li = document.createElement("li")
    li.appendChild(document.createTextNode(text.value))
    ul.appendChild(li)    
    text.value = ""
}

function addClick(){
    if (text.value.length > 0) {
        createListElement()
    }
}

function addkeyPress(event){
    if (text.value.length > 0 && event.keyCode === 13) {
        createListElement()
    }
}

button.addEventListener("click", addClick)
    
text.addEventListener("keypress", addkeyPress)