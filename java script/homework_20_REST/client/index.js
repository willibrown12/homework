function init() {
    
    document.querySelector("#create").addEventListener("click", async () => {
        try {
            const num1 = document.querySelector("#title").value
            const num2 = document.querySelector("#price").value
            const mathwilli = document.querySelector("#math").value
            const result = await  mathProductApi(mathwilli,num1,num2)
            alert(result)
        } catch (error) {
            alert("ERROR")
        }
    })
}

async function mathProductApi(mathwilli, num1,num2) {
    const result = await fetch(`http://localhost:4500/${mathwilli}/${num1}/${num2}`, {
        method: "get"
    })
    return await result.json()
}





init()