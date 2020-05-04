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
            WeatherDescription: String,
            Icon: String,
            Temperature: Number,
            Humidity: Number,
            Wind: Number,
            city: this.props.city
        }
    }
    async getWeather(){
        await this.setState({city: this.props.city})
        WeatherAPI.getWeather(this.state.city, process.env.REACT_APP_WeatherAPIKey).then(res => {

            this.setState({
                WeatherDescription: res.weather[0].description,
                Temperature: res.main.temp,
                Humidity: res.main.humidity,
                Wind: res.wind.speed,
                Icon: res.weather[0].icon
            })
        })
    }
    componentDidMount() {
        this.getWeather()
    }
    componentDidUpdate(){
        if(this.state.city !== this.props.city)
        this.getWeather()
    }
    render() {
        return (
            <Card>
                <CardHeader>
                    <div className="row">
                        <div className="col-md-9">
                            <CurrentWeatherHeader city={this.props.city} description={this.state.WeatherDescription} />
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