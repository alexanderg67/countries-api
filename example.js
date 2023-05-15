const getc= require('./index')
async function main (){
  
 
let r= await getc.getCountriesByGdpGrowth('>4.5') //allowed <= , < , > ,>= , = and number
 
if(   typeof r=='object')
r.forEach( item => console.log(`Страна: ${item.name} Население: ${item.population}`))
}
main()

  getc.getCountriesByGdpGrowth('>4.5').then( data => {
   console.log(data.length) //количество стран по данному фильтру
   data.forEach( item => console.log(`Страна: ${item.name} Рост ВВП ${item.gdp_growth} `))
})
  .catch( (err)=> console.log(err))
 