import React, { Component } from 'react';
import { Form, Input, FormGroup, Button} from 'reactstrap';
import './SearchBar.css'
import '../NavMenu/NavMenu.css'

export class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            SearchText : ""
        
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
        console.log(event.target.value)
        this.setState({SearchText : event.target.value})
        console.log("state: " + this.state.SearchText)
    }

    handleSearchSubmit(event){
        event.preventDefault()
        console.log(this.state.SearchText)

    }
}
