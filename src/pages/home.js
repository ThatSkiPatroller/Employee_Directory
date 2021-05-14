import React from "react";
import API from "../utils/API";
import Table from "../components/Table";
import SearchForm from "../components/SearchForm";
import Header from "../components/Header";

class Home extends React.Component {
    state = {
        response: [],
        name: "Trace",
        search: "",
        searchRes: []
    }
    async componentDidMount() {
        console.log("Component did mount");
        const employees = await API.getRandomUser()
        console.log(employees.data.results)
        this.setState({response:employees.data.results})
    } 

    handleInputChange = event => {
        this.setState({ search: event.target.value })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.response.filter(this.search)
    }
    render() {
    return ( 
        <div>
       {/* {this.state.response.map((person)=> (
           <p>{person.name.first + " " + person.name.last}</p>
       ))} */}
       <Header />
       <SearchForm 
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            employees={this.state.response}
       />
       <Table employees={this.state.response}/>
        </div>
    )}
}


export default Home;