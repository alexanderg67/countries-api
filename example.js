const getc= require('./index')
require('dotenv').config()
async function main (){
  
 try {
  
let r= await getc.getCountriesByPopulation('>4.5', process.env.APIKEY) //allowed <= , < , > ,>= , = and number
console.log( `Получено стран: ${r.length}`)
 }catch(err){
  console.log(err)
 }
}
main()
 
getc.getCountriesByGdpGrowth('>4.5',process.env.APIKEY).then( data => {
  console.log(data.length) //количество стран по данному фильтру
  data.forEach( item => console.log(`Страна: ${item.name} Рост ВВП ${item.gdp_growth} `))
})
 .catch( (err)=> console.log( err))
