import React, { Component } from 'react';
import { Card, CardHeader, CardBody } from "reactstrap";
import {ForecastCarousel} from '../ForecastCarousel/ForecastCarousel'

export class WeeklyForecast extends Component {
    render() {
        return (
            <Card>
                <CardHeader>
                    <h3>Weather Forecast</h3>
                </CardHeader>
                <CardBody>
                    <ForecastCarousel></ForecastCarousel>
                </CardBody>
            </Card>
        )
    }
}