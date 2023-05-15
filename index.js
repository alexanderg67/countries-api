const request = require('request');
function sleep(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));
}

function getCountriesByPopulation(filter,ApiKey) {

    return new Promise( async ( resolve,reject) => {
         
        let countriesArr=[] // array with all countries
        let errFlag=0
        if(!ApiKey || !filter ){
          return reject('provide filter string and API Key params' )
       }
            request.get({
                url: 'https://api.api-ninjas.com/v1/country?min_gdp=270000&limit=30' ,
                headers: {
                  'X-Api-Key':  ApiKey
                },
              }, function(error, response, body) {
                if(error)  { //if API request failed
                  errFlag=1
            }else {  
              
                countriesArr=JSON.parse(body)
                if( countriesArr.error){ //if API sent an error
                   
                  errFlag=1
                 }
        
            }
              });
        
        await sleep(3000)
        if(errFlag) {
          return reject ('API Request failed.Check API Key') 
          }
           
           
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
           return reject('passed invalid parameter')
          }
          
          resolve(result)
    
    })
    }
    /////
    function getCountriesByGdpGrowth(filter,ApiKey) {
      return new Promise(  async ( resolve,reject) => {
      let countriesArr=[] // array with all countries
      let errFlag=0
      if(!ApiKey || !filter ){
         return reject('provide filter string and API Key params' )
      }
      
         
            request.get({
                url: 'https://api.api-ninjas.com/v1/country?min_gdp=270000&limit=30' ,
                headers: {
                  'X-Api-Key': ApiKey
                },
              }, function(error, response, body) {
                if(error)  { // if API request failed
                  errFlag=1
                    
            }else {  
               
                countriesArr=JSON.parse(body)
               if( countriesArr.error){ //if API sent an error
                errFlag=1
               }
            }
              });
        
        await sleep(3000)
        if(errFlag) {
        return reject ('API Request failed.Check API Key') 
        }
           
           
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
          return  reject('passed invalid parameter')
          }
          
          resolve(result)
    
    })
      
      }
    
    
    module.exports = {
        getCountriesByPopulation: getCountriesByPopulation,
        getCountriesByGdpGrowth: getCountriesByGdpGrowth
        }