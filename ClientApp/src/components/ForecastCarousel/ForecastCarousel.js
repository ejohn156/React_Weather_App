import React, { Component } from 'react';
import WeatherAPI from '../../util/WeatherAPI'
import { ForecastCard } from '../ForecastCard/ForecastCard'
import "./ForecastCarousel.css"
import Next_Icon from "../../images/Next_Icon.png"
import Previous_Icon from "../../images/Previous_Icon.png"

export class ForecastCarousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Forecast: [],
            ForecastRangeFirst: 0,
            ForecastRangeLast: 5,
            prevRangeFirst: 0,
            prevRangeLast: 5
        }
    }


    getNextForecasts() {
        let newFirstIndex
        let newLastIndex
        if(this.state.ForecastRangeLast + 5 > 40){
        newFirstIndex = 0
        newLastIndex = 5
        }
        else {
            newFirstIndex = this.state.ForecastRangeFirst + 5
            newLastIndex = this.state.ForecastRangeLast + 5
        }
        this.setState({
            ForecastRangeFirst: newFirstIndex,
            ForecastRangeLast: newLastIndex
        })
    }
    getPreviousForecasts() {
        let newFirstIndex
        let newLastIndex
        if(this.state.ForecastRangeFirst - 5 < 0){
            console.log("test1")
        newFirstIndex = 35
        newLastIndex = 40
        }
        else {
            console.log("test2")
            newFirstIndex = this.state.ForecastRangeFirst - 5
            newLastIndex = this.state.ForecastRangeLast - 5
        }
        this.setState({
            ForecastRangeFirst: newFirstIndex,
            ForecastRangeLast: newLastIndex
        })
    }

    getWeeklyForecasts() {
        WeatherAPI.getForecast().then(res => {
            this.setState({
                Forecast: res.list.slice(this.state.ForecastRangeFirst, this.state.ForecastRangeLast),
                prevRangeFirst: this.state.ForecastRangeFirst,
                prevRangeLast: this.state.ForecastRangeLast,
            })
        })

    }

    componentDidUpdate() {
        console.log("update is occuring")
        if (this.state.prevRangeFirst !== this.state.ForecastRangeFirst || this.state.prevRangeLast !== this.state.ForecastRangeLast) {
            console.log(this.state.ForecastRangeFirst)
            console.log(this.state.ForecastRangeLast)
            this.getWeeklyForecasts()
        }
    }
    componentDidMount() {
        this.getWeeklyForecasts()
    }

    render() {

        return (

            <div className="row">
                <div className="col-md-1">
                    <img alt='Previous' src={Next_Icon} onClick={() => this.getPreviousForecasts()}></img>
                </div>
                {this.state.Forecast.map(forecast => {
                    return (<ForecastCard key={forecast.dt_txt} forecastInfo={forecast} />)
                })}
                <div className="col-md-1">
                    <img alt='Next' src={Previous_Icon} onClick={() => this.getNextForecasts()}></img>
                </div>
            </div>

        )
    }
}