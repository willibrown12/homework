"use strict";
async function init() {
    try {
        const v = await getCarsApi();
        console.log(v[0].name);
    }
    catch (error) {
    }
}
async function getCarsApi() {
    const result = await fetch("http://129.159.129.38:8080/hostages");
    const data = await result.json();
    return data;
}
init();
