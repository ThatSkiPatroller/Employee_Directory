import React from "react";
import "./style.css";

function SearchForm (props) {
    return (
        <form classname="search">
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
        </form>
    )
}

export default SearchForm;