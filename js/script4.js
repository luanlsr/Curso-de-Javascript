document.getElementById("btn-set").addEventListener("click",function(){
    document.getElementById("titulo").setAttribute("class","red")
})

document.getElementById("btn-remove").addEventListener("click",function(){
    document.getElementById("titulo").removeAttribute("class","red")
})

document.getElementById("btn-get").addEventListener("click",function(){
    var value = document.getElementById("titulo").getAttribute("class")
    document.getElementById("class").innerHTML = value
})