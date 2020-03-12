import React, { Component } from 'react';
import { Card, CardHeader, CardBody } from "reactstrap";

export class WeeklyForecast extends Component {
    render() {
        return (
            <Card>
                <CardHeader>
                    <h3>City's Weekly Forecast</h3>
                </CardHeader>
                <CardBody>
                    Carousel displaying weekly forecast
                </CardBody>
            </Card>
        )
    }
}