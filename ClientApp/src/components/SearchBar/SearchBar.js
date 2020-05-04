import React, { Component } from 'react';
import { Form, Input, FormGroup, Button} from 'reactstrap';
import './SearchBar.css'
import '../NavMenu/NavMenu.css'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {CHANGE_CITY} from '../../Store/City.action'

const changeCity = (newCity) => ({type: CHANGE_CITY, state: newCity})


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ changeCity }, dispatch)
  }
class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            SearchText : "", 
    }

    this.handleSearchTextChange = this.handleSearchTextChange.bind(this)
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
}
    render() {
        return (
                <Form inline>
                    <FormGroup>
                        <Input type="Input" name="city" id="citySearch" placeholder="Enter a City" value={this.state.SearchText} onChange={this.handleSearchTextChange}></Input>
                        <Button onClick={this.handleSearchSubmit}>Search</Button>
                    </FormGroup>
                </Form>
        )
    }

    handleSearchTextChange(event) {
        this.setState({SearchText : event.target.value})
    }

    handleSearchSubmit(event){
        event.preventDefault()
        this.props.changeCity(this.state.SearchText)
        this.setState({SearchText: ""})       
    }
}

export default connect(null,mapDispatchToProps)(SearchBar)
