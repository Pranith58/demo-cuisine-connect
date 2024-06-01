//selecting popup, pop-overlay, button
var popup=document.querySelector(".popup")
var popupoverlay=document.querySelector(".popup-overlay")
var addpopupbutton=document.getElementById("popup-button")
var cancelfood=document.getElementById("cancel-food")

//var button=document.getElementById("one")

function clearfood(event){
    cancelfood=event.preventDefault()    //type1-function
    popupoverlay.style.display="none"
    popup.style.display="none"
}

 addpopupbutton.addEventListener("click",function(){
    container.style.display="none"
    popupoverlay.style.display="block"
    popup.style.display="block"                 //type2-function
 })   

//select container, add button in popup,food-name,food-description
var container=document.querySelector(".container")

var foodname=document.getElementById("food-name")
var foodauthor=document.getElementById("food-author")
var fooddescription=document.getElementById("food-description")
var addbutton=document.getElementById("add-food")

addbutton.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","item-container") //set attribute used to add class="item-container" in div tag 
    div.innerHTML=`<h2>${foodname.value}</h2> <h3>${foodauthor.value}</h3> <h4>${fooddescription.value}</h4> <button onclick="clearing(event)"><b><i>Close</i></b></button>`
    container.append(div)
    popupoverlay.style.display="none"
    popup.style.display="none"
    container.style.display="block"
})

function clearing(event){
    var div=event.target.closest("div")
    console.log(div.remove())

}



