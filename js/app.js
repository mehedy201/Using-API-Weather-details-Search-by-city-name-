// API KEYS.....................................
const apiKey = '2b9033c0123f32cea3a9f8d6ffed8617'
// Load wether Data.........
const searchButton = () => {
    const cityName = document.getElementById('search-field').value;
    cityName.value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayWetherData(data));
};
// Show Whether Data in DOM.................
const displayWetherData = data =>{
    console.log(data);
    const displayDiv = document.getElementById('display-wether-details');
    const iconLink = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    displayDiv.innerHTML =`
        <img src="${iconLink}" alt="">
        <h1>${data.name}</h1>
        <h2>${data.main.temp}&deg</h2>
        <h3>${data.weather[0].description}</h3>
    `;
}


