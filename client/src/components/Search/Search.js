import React, { Component } from "react";
import "./Search.css";

class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            topic: "",
            startYear: "",
            endYear: ""
        };
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        if (!this.state.topic) {

            alert(`Please provide a topic`);
            // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        } else {
            let startDate;
            let endDate;
            if (this.state.startYear) {
                startDate = this.state.startYear + "0101";
            } else {
                startDate = undefined;
            }

            if (this.state.endYear) {
                endDate = this.state.endYear + "1231";
            } else {
                endDate = undefined;
            }

            this.props.onFormSubmit(this.state.topic, startDate, endDate);
        }

    };

    render() {
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
            <div className="col-sm-8 col-sm-offset-2">
                <div className="panel panel-default ">
                    <div className="panel-heading">
                        <h3 className="panel-title">Search</h3>
                    </div>
                    <div className="panel-body">
                        <form className="form">
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    value={this.state.topic}
                                    onChange={this.handleInputChange}
                                    name="topic"
                                    type="text"
                                    placeholder="Topic"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    value={this.state.startYear}
                                    onChange={this.handleInputChange}
                                    name="startYear"
                                    type="text"
                                    placeholder="Start Year"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    value={this.state.endYear}
                                    onChange={this.handleInputChange}
                                    name="endYear"
                                    type="text"
                                    placeholder="End Year"
                                />
                            </div>
                            <button className="btn btn-primary" onClick={this.handleFormSubmit}>Search</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;