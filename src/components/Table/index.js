import React from "react";
// import "./style.css";

function Table (props) {
    const tableRows = props.employees.map((person) => {
        return (
            <tr>
                <th><img src={person.picture.medium}/></th>
                <th>{person.name.first + " " + person.name.last}</th>
                <th>{person.gender}</th>
                <th>{person.dob.age}</th>
                <th>{person.location.city + ", " + person.location.state}</th>
                <th>{person.email}</th>
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