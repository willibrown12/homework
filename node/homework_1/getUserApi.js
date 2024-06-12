async function getUserApi() {
    const result = await fetch(`https://randomuser.me/api/`)
    return result;
}

module.exports = { getUserApi }