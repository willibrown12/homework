
class Queue {
constructor(){
    this.item=[]

}

addToQueue(item){
    return this.item.push(item)
}

getsize(){

  return this.item.length
}

isEmpty(){

 return this.getsize()===0
}
removeFromQueue(){
    if (this.isEmpty()===true) {
        return "nothing in queue"
    }
    if (this.getsize() === 1)
        { return this.item.pop();}
this.item.shift()
}

}


const cars=new Queue();
cars.addToQueue("mazda")
cars.addToQueue("toyota")
cars.addToQueue("subaro")
console.log(cars);
console.log(cars.isEmpty());
console.log(cars);
console.log(cars.getsize());
cars.removeFromQueue()
cars.removeFromQueue()
