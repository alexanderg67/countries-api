# Countries API

API to get countries with filter population /gdp

## Description
Methods: getCountriesByGdpGrowth(filter,APIKey) - get countries array and  filter by GdpGrowth value \
 getCountriesByPopulation(filter,APIKey) - get countries array and  filter by population value \
Filter supports operators: >, >=, <,<=, = \
Exmaple: getCountriesByGdpGrowth('>=4.5','mykey-33f-ddd') \
APIKey should be provided from api-ninjas profile https://api-ninjas.com/profile
## Usage
Require this module and run method, pass filter string and API key
```
const getc= require('./index')
getc.getCountriesByGdpGrowth('>4.5',process.env.APIKEY).then( data => {
  console.log(data.length) //количество стран по данному фильтру
  data.forEach( item => console.log(`Страна: ${item.name} Рост ВВП ${item.gdp_growth} `))
})
 .catch( (err)=> console.log( err))
 
 async function main (){
  
 try {
  
let r= await getc.getCountriesByPopulation('>4.5', process.env.APIKEY) //allowed <= , < , > ,>= , = and number
console.log( `Получено стран: ${r.length}`)
 }catch(err){
  console.log(err)
 }
}
main()
```