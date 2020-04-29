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
            prevRangeLast: 5,
            ForecastCount: 0
        }
    }


    getNextForecasts() {
        let newFirstIndex
        let newLastIndex
        if (this.state.ForecastRangeLast + 5 <= this.state.Forecast.length) {
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
        if (this.state.ForecastRangeFirst - 5 >= 0) {
            newFirstIndex = this.state.ForecastRangeFirst - 5
            newLastIndex = this.state.ForecastRangeLast - 5
        }
        this.setState({
            ForecastRangeFirst: newFirstIndex,
            ForecastRangeLast: newLastIndex
        })
    }

    getWeeklyForecasts() {
        WeatherAPI.getForecast(this.props.city, process.env.REACT_APP_WeatherAPIKey).then(res => {
            this.setState({
                Forecast: res.list,
                prevRangeFirst: this.state.ForecastRangeFirst,
                prevRangeLast: this.state.ForecastRangeLast,
            })
        })

    }

    componentDidUpdate() {
        if (this.state.prevRangeFirst !== this.state.ForecastRangeFirst || this.state.prevRangeLast !== this.state.ForecastRangeLast) {
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
                    {this.state.ForecastRangeFirst !== 0 ?
                        <img alt='Previous' src={Next_Icon} onClick={() => this.getPreviousForecasts()} /> : null}
                </div>
                {this.state.Forecast.slice(this.state.ForecastRangeFirst, this.state.ForecastRangeLast).map(forecast => {
                    return (<ForecastCard key={forecast.dt_txt} forecastInfo={forecast} />)
                })}
                <div className="col-md-1">
                    {this.state.ForecastRangeLast !== this.state.Forecast.length ?
                        <img alt='Next' src={Previous_Icon} onClick={() => this.getNextForecasts()} /> : null}
                    </div>
            </div>

        )
    }
}