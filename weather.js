async function getWeather(city) {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'YOUR_API_KEY_HERE', // 🔐 Replace this with your real API key
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const result = await response.json();
        console.log(`Weather in ${city}:`, result);
    } catch (error) {
        console.error('Failed to fetch weather:', error.message);
    }
}
