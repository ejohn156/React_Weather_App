import React, { Component } from 'react';
import './WeatherIcon.css'
export class WeatherIcon extends Component {
    constructor(props){
        super(props)
        this.state= {
            imgUrl: "",
            prevIcon: ""
        }
    }
    componentDidUpdate(){
        if(this.state.prevIcon !== this.props.icon)
        this.setState({
            imgUrl: "https://openweathermap.org/img/w/"+this.props.icon+".png",
            prevIcon: this.props.icon
        })
    }

        
    

    render() {
        return (
            <div className="iconDiv">
            <img src={this.state.imgUrl} alt="weather icon" className="weatherIcon"/>
            </div>
        )
    }
}