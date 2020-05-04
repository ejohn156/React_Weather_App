import React, { Component } from 'react';
import { CurrentWeather } from '../components/CurrentWeather/CurrentWeather'
import { FavoritesList } from '../components/FavoritesList/FavoritesList';
import { WeeklyForecast } from '../components/WeeklyForecast/WeeklyForecast';
import { connect } from 'react-redux'


function mapStateToProps(state) {
  return ({
    city: state.City
  })
}

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      city: this.props.city,
      user: 'test'
    }
  }

  componentDidUpdate() {
    if (this.props.city !== this.state.city) {
        this.setState({
          city: this.props.city
        })
    }
}

  static displayName = Home.name;
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-3">
            <div className="row">
              <div className="col-md-12">
                <FavoritesList user={this.state.user} />
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-12">
                <CurrentWeather city={this.state.city} />
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-md-12">
            <WeeklyForecast city={this.state.city} />
          </div>
        </div>
      </div>
    );
  }

}


export default connect(mapStateToProps)(Home)