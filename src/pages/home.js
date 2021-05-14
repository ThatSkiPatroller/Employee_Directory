import React from "react";
import API from "../utils/API";
import Table from "../components/Table";

class Home extends React.Component {
    state = {
        response: [],
        name: "Trace"
    }
    async componentDidMount() {
        console.log("Component did mount");
        const employees = await API.getRandomUser()
        console.log(employees.data.results)
        this.setState({response:employees.data.results})
    }
    render() {
    return ( 
        <div>
       {/* {this.state.response.map((person)=> (
           <p>{person.name.first + " " + person.name.last}</p>
       ))} */}
       <Table employees={this.state.response}/>
        </div>
    )}
}


export default Home;