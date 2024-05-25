$(document).ready(function () {})
var data=[]
$("#submit").click(function(){
    const description=$("#description").val()
    const image=$("#image").val()
    const newObject={"description":description,
       "image":image
    }
    data.push(newObject)
   
    draw(data)


})
function clearData() {
    $("#sortable").empty()

}
function draw(data) {
    clearData();
    if (!Array.isArray(data)) return
    const moviesContainer =$("#sortable")
    
    const moviesCards = data.map(data => getSingleMovie(data))
    moviesContainer.append(...moviesCards)
}
function getSingleMovie(data) {
    if (typeof data !== 'object') return;
    const poster = document.createElement("img")
    poster.src = data.image
    poster.style.width="100px"
    const desc = document.createElement("h1")
    desc.innerText = data.description
    const list = document.createElement("li")
    list.className="ui-state-default"
    const span = document.createElement("span")
    span.className="ui-icon ui-icon-arrowthick-2-n-s"
    

  
    list.append(span,poster,desc)
    return list
}



  
