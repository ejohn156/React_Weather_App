import React, { Component } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { WeatherIcon } from '../WeatherIcon/WeatherIcon';
import './ForecastCard.css'
export class ForecastCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: String,
            time: String,
        }
    }

    async getDayOfWeek() {
        var forecastDate = new Date(this.props.forecastInfo.dt_txt)
        const hours = forecastDate.getHours()
        let formattedHour
        if (hours > 12) {
            formattedHour = hours - 12 + ":00 PM"
        }
        else if(hours === 0){
            formattedHour = 12+ ":00 AM"
        }
        else {
            formattedHour = hours + ":00 AM"
        }



        this.setState({
            date: (forecastDate.getMonth() + 1) + "/" + forecastDate.getDate(""),
            time: formattedHour
        })
    }

    componentDidMount() {
        this.getDayOfWeek().then()
    }

    render() {
        return (
            <div className="col-md-2">
                <Card>
                    <CardHeader>
                        <h5>{`${this.state.date}`}</h5>
                        <h5>{`${this.state.time}`}</h5>
                    </CardHeader>
                    <CardBody>
                        <div className="row">
                        <div className="col-md-12">
                        <WeatherIcon icon={this.props.forecastInfo.weather[0].icon}/>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 high">
                                {`${this.props.forecastInfo.main.temp_max}`}
                            </div>
                            <div className="col-md-6 low">
                            {`${this.props.forecastInfo.main.temp_min}`}
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }

}