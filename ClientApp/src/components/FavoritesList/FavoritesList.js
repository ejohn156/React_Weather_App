import React, { Component } from 'react';
import { Card, CardHeader, CardBody } from "reactstrap";

export class FavoritesList extends Component {
    render() {
        return (
            <Card>
                <CardHeader>
                    <h3>Favorited Cities</h3>
                </CardHeader>
                <CardBody>
                    <ul>
                        <li>List of all locations the user has decided to track the weather of</li>
                    </ul>
                </CardBody>
            </Card>
        )
    }
}