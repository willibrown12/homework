const users = [
    { userName: 'Jerad.Witting', password: 'yuWsz7nsNFOyTyF' },
    { userName: 'Zack6', password: 'mI7sefIyI9iSjLu' },
    { userName: 'Amya_Jast', password: 'oAP78AZDqUGYhRW' },
    { userName: 'Jodie_Wisoky', password: 'VKxVNcm83G7kmdx' },
    { userName: 'Kelsie59', password: '7WYYa_vQD4qcGlA' },
    { userName: 'Enola29', password: 'uXMSLtnizuCp3rD' },
    { userName: 'Aliyah_Kuphal77', password: 'pgeXiTSAwu2RmZB' }
]

const usersObj = users.reduce((obj, currentUser) => {
    obj[`${currentUser.userName}:${currentUser.password}`] = currentUser
    return obj
}, {})

console.log(users)
console.log(usersObj)


function loginUserOn(username, password) {
    const userToFind = users.find(u => u.password === password && u.userName === username)
    if (userToFind) {
        console.log("user authenticated")
    } else {
        console.log("***user unauthorized***")
    }
    return userToFind
}

let sessionsObj = {}


function loginUserO1(username, password) {
    const user = usersObj[`${username}:${password}`] // O(1)
    if (user) { // O(1)
        console.log("user authenticated") // O(1) 
        const session = new Date().getTime() + "_" + Math.ceil(Math.random() * 9999)
        sessionsObj[session] = { userName: user.userName, loggedInAt: new Date().toString() ,time:new Date().getTime()}
        return session;
    } else { // O(1)
        console.log("***user unauthorized***") // O(1)
    }
    return user // O(1)
}
const bro=loginUserO1('Aliyah_Kuphal77', 'pgeXiTSAwu2RmZB' )
console.log(bro);
console.log(sessionsObj);
const dateNow=new Date().getTime()
console.log(dateNow);

function doSomething(session) {
    if (sessionsObj[session]) {
        const dateNow=new Date().getTime()
        const oneMinute = 60000;
        console.log(dateNow);
        console.log(sessionsObj[session].time);
    if (
            sessionsObj[session].time >= dateNow - oneMinute &&
            sessionsObj[session].time <= dateNow + oneMinute
        
        ) {return "Session Active" + sessionsObj[session].userName + " " + sessionsObj[session].loggedInAt
  } else {
    delete sessionsObj[session]}
    return "Session expired!";
    
    } else {
        return "Session not valid! User not authorized!"
    }
}
console.log(doSomething(bro));


setTimeout(() => {
    console.log(doSomething(bro));;
    console.log(sessionsObj);
  }, "68000");

 