const express = require("express")

const data={
    "cars": [
      {
        "brand": "Mercedes-Benz",
        "model": "Citan",
        "car body": "van",
        "color": "red",
        "price": "10000$",
        "year": 2010
      },
      {
        "brand": "Lexus",
        "model": "GX",
        "car body": "4WD",
        "color": "black",
        "price": "50000$",
        "year": 2020
      },
      {
        "brand": "Toyota",
        "model": "RAV4",
        "car body": "crossover",
        "color": "gray",
        "price": "15000$",
        "year": 2015
      },
      {
        "brand": "Hyundai",
        "model": "Grand i10 Nios",
        "car body": "hatchback",
        "color": "yellow",
        "price": "30000$",
        "year": 2018
      },
      {
        "brand": "Honda",
        "model": "Civic",
        "car body": "sedan",
        "color": "blue",
        "price": "25000$",
        "year": 2010
      }
    ]
  }
const app =express()


app.get( "/cars",(req,res,next)=>{
    return res.send(data.cars)
})

app.get( "/cars/:color",(req,res,next)=>{
    const color=req.params.color
    const result=data.cars.filter(c=>c.color.toLowerCase()===color.toLowerCase())
    return res.send(result)
})

app.get( "/car-by-model",(req,res,next)=>{
    const brand=req?.query?.brand
    const result=data.cars.filter(c=>c.brand.toLowerCase()===brand.toLowerCase())
    console.log(result);
    const send=result.length===0? "no data":result
    return res.send(send)
})
app.get( "/car-by-price",(req,res,next)=>{
    const price=req?.query?.price
    const result=data.cars.filter(c=>parseInt(c.price)>price)
    console.log(result);
    
  
    
    const send=result.length===0? "no data":result
    return res.send(send)
})




app.listen(3500, () => {
    console.log("Listening to PORT, API Is working 3500")
})
