import React, { Component } from 'react';
import {CurrentWeather} from '../components/CurrentWeather/CurrentWeather'
import { FavoritesList } from '../components/FavoritesList/FavoritesList';
import { WeeklyForecast } from '../components/WeeklyForecast/WeeklyForecast';

export class Home extends Component {
  static displayName = Home.name;
  render () {
    return (
      <div>
        <div className="row">
        <div className="col-md-3">
          <div className="row">
            <div className="col-md-12">
              <FavoritesList></FavoritesList>
            </div>
          </div>
        </div>
        <div className="col-md-9">
        <div className="row">
            <div className="col-md-12">
              <CurrentWeather></CurrentWeather>
            </div>
        </div>
      </div>
      </div>
      <br></br>
      <div className = "row">
        <div className="col-md-12">
          <WeeklyForecast></WeeklyForecast>
        </div>
      </div>
      </div>
    );
  }
}
