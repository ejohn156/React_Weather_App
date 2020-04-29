import React, { Component } from 'react';
import { Card, CardHeader, CardBody } from "reactstrap";
import { CurrentWeatherHeader } from '../CurrentWeatherHeader/CurrentWeatherHeader'
import { CurrentWeatherContent } from '../CurrentWeatherContent/CurrentWeatherContent'
import { WeatherIcon } from '../WeatherIcon/WeatherIcon'
import WeatherAPI from '../../util/WeatherAPI'
export class CurrentWeather extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Time: Number,
            Date: Date,
            WeatherDescription: String,
            Icon: String,
            Temperature: Number,
            Humidity: Number,
            Wind: Number
        }
    }

    componentDidMount() {
        WeatherAPI.getWeather(this.props.city, process.env.REACT_APP_WeatherAPIKey).then(res => {
            const currentTime = new Date()

            this.setState({
                Time: currentTime.getHours() >= 12 ?
                    currentTime.getHours() === 12 ? currentTime.getHours() + ":" + currentTime.getMinutes() + "PM" : currentTime.getHours() - 12 + ":" + currentTime.getMinutes() + "PM" :
                    currentTime.getHours() + ":" + currentTime.getMinutes() + "AM",
                Date: (currentTime.getMonth() + 1) + "/" + currentTime.getDate(),
                WeatherDescription: res.weather[0].description,
                Temperature: res.main.temp,
                Humidity: res.main.humidity,
                Wind: res.wind.speed,
                Icon: res.weather[0].icon
            })
        })
    }
    render() {
        return (
            <Card>
                <CardHeader>
                    <div className="row">
                        <div className="col-md-9">
                            <CurrentWeatherHeader city={this.props.city} currentTime={this.state.Time} currentDate={this.state.Date} description={this.state.WeatherDescription} />
                        </div>
                        <div className="col-md-3">
                            <WeatherIcon icon={this.state.Icon} />
                        </div>
                    </div>
                </CardHeader>
                <CardBody>
                    <CurrentWeatherContent temperature={this.state.Temperature} humidity={this.state.Humidity} wind={this.state.Wind} />
                </CardBody>
            </Card >
        )
    }
}