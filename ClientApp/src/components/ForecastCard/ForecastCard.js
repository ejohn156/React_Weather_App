import React, { Component } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';

export class ForecastCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: String,
            time: String
        }
    }

    async getDayOfWeek() {
        var forecastDate = new Date(this.props.forecastInfo.dt_txt)
        const hours = forecastDate.getHours()
        let formattedHour
        if (hours > 12) {
            formattedHour = hours - 12 + ":00 PM"
        }
        else {
            formattedHour = hours + ":00 AM"
        }



        this.setState({
            date: forecastDate.getMonth() + "/" + forecastDate.getDate(""),
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
                        <h5>{this.state.date}</h5>
                        <h5>{this.state.time}</h5>
                    </CardHeader>
                    <CardBody>
                        <p>{this.props.forecastInfo.main.temp}&deg;F</p>
                        <p>{this.props.forecastInfo.main.humidity}%</p>
                    </CardBody>
                </Card>
            </div>
        )
    }

}