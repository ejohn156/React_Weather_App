import React, { Component } from 'react';
import { Card, CardHeader, CardBody } from "reactstrap";

export class CurrentWeather extends Component {
    render() {
        return (
            <Card>
                <CardHeader>
                    <h3>City's Weather</h3>
                </CardHeader>
                <CardBody>
                    <p>Information regarding the current weather of the city</p>
                </CardBody>
            </Card>
        )
    }
}