import React from "react";
// import "./style.css";

function Table (props) {
    const tableRows = props.employees.map((person) => {
        return (
            <tr>
                <th><img src={person.picture.medium}/></th>
                <th onClick={() => props.sorter ('name', 'first')}>{person.name.first + " " + person.name.last}</th>
                <th>{person.gender}</th>
                <th>{person.dob.age}</th>
                <th onClick={() => props.sorter ('location', 'city')}>{person.location.city + ", " + person.location.state}</th>
                <th onClick={() => props.sorter ('email')}>{person.email}</th>
            </tr>
            
        )
    })
    return (
        <table>
            <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Location</th>
                <th>E-mail</th>
            </tr>
            {tableRows}
        </table>
    )
};

export default Table;