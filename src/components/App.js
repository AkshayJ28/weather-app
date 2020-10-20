import React from 'react';
import Position from './Position';
import WeatherDisplay from './WeatherDisplay';

const API_KEY = '857ecc62387c728af5f94ec52df87852';

class App extends React.Component {
    state = { temprature: '', city: '', country: '', humidity: '', description: '', error: '' };

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        const data = await api_call.json();
        console.log(data);
        this.setState({
            temprature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: '',
        });
    };

    render() {
        // if (this.state.ErrorMessage && !this.state.lat && !this.state.lon) {
        //     return <div>Error Message</div>;
        // }
        // if (!this.state.ErrorMessage && this.state.lat && this.state.lon) {
        return (
            <div className="ui container" style={{ marginTop: '20px' }}>
                <Position getWeather={this.getWeather} />
                <WeatherDisplay
                    temprature={this.state.temprature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                />
            </div>
        );
        // }
        // return <div>There is nothing </div>;
    }
}

export default App;
