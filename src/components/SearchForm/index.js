import React from "react";
import "./style.css";

function SearchForm (props) {
    return (
        // passing down prop that's a function
        <form classname="search" onSubmit={props.handleFormSubmit} >
            <div classname="form-group">
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    name="employee"
                    list="employees"
                    type="text"
                    className="form-control"
                    placeholder="Search by employee's name"
                    id="employee"
                    />
                    <datalist id="employees">
                        {props.response}
                    </datalist>
            </div>
            <button type="submit" className="btn btn-primary">Search</button>
        </form>
    )
}

export default SearchForm;