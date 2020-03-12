import React, { Component } from 'react';
import { Form, Input, FormGroup, Button} from 'reactstrap';
import './SearchBar.css'
import '../NavMenu/NavMenu.css'

export class SearchBar extends Component {
    render() {
        return (
                <Form inline>
                    <FormGroup>
                        <Input type="Input" name="city" id="citySearch" placeholder="Enter a City"></Input>
                        <Button>Search</Button>
                    </FormGroup>
                </Form>
        )
    }
}
