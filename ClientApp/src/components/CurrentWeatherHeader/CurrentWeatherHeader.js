import React, { Component } from 'react';

export class CurrentWeatherHeader extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <h3>{`${this.props.city}`}</h3>
                    <h4>{`${this.props.currentDate}`} {`${this.props.currentTime}`}</h4>
                    <h5>{`${this.props.description}`}</h5>
                </div>
            </div>
        )
    }
}