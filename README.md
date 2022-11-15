# WEATHER APP Project with REACT JS

This is a solution to  a Personal [Weather App Project]
## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- To check the weather conditions in any city with a population of over a 100,000 population
- To check weather Forecast for the next 7 days in this cities
- To check weather conditions on different devices 


### Screenshot


<img width="1121" alt="Screen Shot 2022-11-06 at 4 07 37 PM" src="https://user-images.githubusercontent.com/95531716/200195237-85a66c20-8241-440e-b928-1af777b7255b.png">



### Links

https://leoimewore.github.io/weatherApp/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Geolocation Api  https://rapidapi.com/wirefreethought/api/geodb-cities/
- Open Weather API https://openweathermap.org/api
- [React](https://reactjs.org/) - JS library

### What I learned

Major learnings 
1)applying fetch to collect latitude,longitude and city code data from the Rapid API Database 👍
2)Implementing ES6 syntax for example: spread and null operator👍
3)Implementing the useState and useEffect hooks👍

To see how you can add code snippets, see below:

```const loadOptions=(inputValue)=>{
        return fetch
        ( `${GEO_API_URL}/cities?minPopulation=1000&namePrefix=${inputValue}`,geoApiOptions)
        .then(response => response.json())
        .then((response )=> {
            return {
            options: response.data.map((city)=>{
                return{
                    value:`${city.latitude} ${city.longitude}` ,
                    label: `${city.name}, ${city.countryCode}`
                }
            })

        }
        })
        .catch(err => console.error(err));


    }
```


### Continued development

My major focus remains completing projects with react js and improve my skill set 



### Useful resources

https://reactjs.org/     


## Author


- Frontend Mentor - [@leoimewore](https://www.frontendmentor.io/profile/leoimewore)
- Twitter - [@capino48](https://www.twitter.com/capino48)



## Acknowledgments

Thank you Frontend Mentor
