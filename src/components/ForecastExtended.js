import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecasrItem from './Forecastitem';
import getUrlForecastrByCity from './../services/getUrlForecastByCity';
import transformForecast from './../services/transformForecast';

import './styles.css';

// const days = [
//       'Lunes',
//       'Martes',
//       'Miercoles',
//       'Jueves',
//       'Viernes',
// ];

// const data = {
//     temperature: 10,
//     humidity: 10,
//     weatherStarte: 'normal',
//     wind: 'normal'
// };

class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = { forecastData: null}
    }

    componentDidMount() {
        this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.city !== this.props.city) {
            this.setState({forecastData: null});
            this.updateCity(nextProps.city);
        }
    }

    updateCity = city => {
        const api_weather = getUrlForecastrByCity(city);
        fetch(api_weather).then(response => response.json()
        ).then(weatherData => { 
            const forecastData = transformForecast(weatherData);
            this.setState({ forecastData });
        });
    }

    renderForecastItemDays(forecastData){
        return forecastData.map(forecast => (
                        <ForecasrItem weekDay={forecast.weekDay} 
                                      hour={forecast.hour} 
                                      data={forecast.data}
                                      key={`${forecast.weekDay}${forecast.hour}`}>
                        </ForecasrItem>) ); 
    }

    renderProgress = () => { 
        return "Cargando Pronóntico";
    }

    render() {
        const {city} = this.props;
        const { forecastData } = this.state;
        return (
            <div>
                <h2 className="forecast-title">
                    Pronostico extendido de {city}
                </h2>
                { forecastData ?
                    this.renderForecastItemDays(forecastData):
                    this.renderProgress()
                }
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city : PropTypes.string.isRequired,
}

export default ForecastExtended;