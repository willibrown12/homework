async function postNewCar() {
    const result = await fetch(`http://localhost:4500/car`, {
        method: "post",
        body: JSON.stringify({ lp: Math.ceil(Math.random() * 999999), type: "toyota", color: "red" }),
        headers: { "content-type": "application/json" }
    })
    const r = await result.text()
    console.log(r)
    return r;

}
postNewCar()
