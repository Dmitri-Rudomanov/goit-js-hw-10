import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import countryMarkupHbs from './templates/country.hbs';
import countryListMarkupHbs from './templates/country-list.hbs';

var debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;
const refs = {
    searchBox: document.querySelector("#search-box"),
    countryList:document.querySelector(".country-list"),
}

refs.searchBox.addEventListener("input",debounce(onSearchInput,DEBOUNCE_DELAY))

function onSearchInput(e) { 
    if (e.target.value !== "") {
        const countryInput = e.target.value.trim()
        fetchCountries(countryInput)
            .then(r => lengthCheck(r))
        console.log(fetchCountries(countryInput))
        
    }

}
function lengthCheck(r) { 
    if (r.length > 10) {
        console.log("too much")
    }
    else { 
        console.log('ok')
        listMarkup(r)
    }
}

function listMarkup(r) { 
    if (r.length >= 2 && r.length <= 10) { 
       const markup= countryListMarkupHbs(r)
     refs.countryList.innerHTML=markup
    }
}