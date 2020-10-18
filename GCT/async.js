async function getCoviddata() {
    try {
        const jsondata = await fetch('https://api.covid19api.com/summary');

        const importData = await jsondata.json();

        const showData = importData.Global
            // console.log(showData);

        document.getElementById('cc').innerHTML = `${showData.NewConfirmed}`;
        document.getElementById('cd').innerHTML = `${showData.NewDeaths}`;
        document.getElementById('cf').innerHTML = `${showData.NewRecovered}`;
        document.getElementById('yc').innerHTML = `${showData.TotalConfirmed}`;
        document.getElementById('yd').innerHTML = `${showData.TotalDeaths}`;
        document.getElementById('yf').innerHTML = `${showData.TotalRecovered}`;



    } catch (error) {
        console.log(`You have error on ${error}`);
    }
}

getCoviddata();