const request = require('request');
function sleep(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));
}
function getCountriesByPopulation(filter) {

    return new Promise( async ( resolve,reject) => {
         
        let countriesArr=[] // array with all countries
         
            request.get({
                url: 'https://api.api-ninjas.com/v1/country?min_gdp=270000&limit=30' ,
                headers: {
                  'X-Api-Key': 'tPjz6O6XaCdqtP3PWGb+iA==miF3JcOd38'
                },
              }, function(error, response, body) {
                if(error)  { reject ('Request failed') 
            }else {  
              
                countriesArr=JSON.parse(body)
        
            }
              });
        
        await sleep(3000)
        
           
           
          let compareValue,result
          if(filter.startsWith('>=')) {
            compareValue=filter.slice(2)
             
             result= countriesArr.filter( country => country.population >=compareValue)
          } else if(filter.startsWith('>')) {
            compareValue=filter.slice(1)
             
             result= countriesArr.filter( country => country.population >compareValue)  
          }else if (filter.startsWith('=') ) {
            compareValue=filter.slice(1)
            
             result= countriesArr.filter( country => country.population ==compareValue)  
          } else if (filter.startsWith('<=')) {
          compareValue=filter.slice(2)
           
          result= countriesArr.filter( country => country.population <=compareValue)  
          } else if(filter.startsWith('<')) {
          compareValue=filter.slice(1)
           
          result= countriesArr.filter( country => country.population <compareValue)  
          }else {
           reject('passed invalid parameter')
          }
          
          resolve(result)
    
    })
    }
    /////
    function getCountriesByGdpGrowth(filter) {
      return new Promise( async ( resolve,reject) => {
         
        let countriesArr=[] // array with all countries
         
            request.get({
                url: 'https://api.api-ninjas.com/v1/country?min_gdp=270000&limit=30' ,
                headers: {
                  'X-Api-Key': 'tPjz6O6XaCdqtP3PWGb+iA==miF3JcOd38'
                },
              }, function(error, response, body) {
                if(error)  { reject ('Request failed') 
            }else {  
              
                countriesArr=JSON.parse(body)
        
            }
              });
        
        await sleep(3000)
        
           
           
          let compareValue,result
          if(filter.startsWith('>=')) {
            compareValue=filter.slice(2)
            
             result= countriesArr.filter( country => country.gdp_growth >=compareValue)
          } else if(filter.startsWith('>')) {
            compareValue=filter.slice(1)
             
             result= countriesArr.filter( country => country.gdp_growth >compareValue)  
          }else if (filter.startsWith('=') ) {
            compareValue=filter.slice(1)
             
             result= countriesArr.filter( country => country.gdp_growth ==compareValue)  
          } else if (filter.startsWith('<=')) {
          compareValue=filter.slice(2)
           
          result= countriesArr.filter( country => country.gdp_growth <=compareValue)  
          } else if(filter.startsWith('<')) {
          compareValue=filter.slice(1)
           
          result= countriesArr.filter( country => country.gdp_growth <compareValue)  
          }else {
           reject('passed invalid parameter')
          }
          
          resolve(result)
    
    })
      
      }
    
    
    module.exports = {
        getCountriesByPopulation: getCountriesByPopulation,
        getCountriesByGdpGrowth: getCountriesByGdpGrowth
        }