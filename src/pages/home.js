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
        this.setState({response:employees.data.results, searchRes: employees.data.results})
    } 

    handleInputChange = event => {
        this.setState({ search: event.target.value })
        
    }

    handleFormSubmit = event => {
        console.log("handleformsubmit working")
        event.preventDefault();
        this.findIt()
    }

    findIt = () => {
        console.log("Findit function is working");
        const finder = this.state.response.filter((boot) => {
            return (boot.name.first === this.state.search) 
        })
        this.setState({
            searchRes: finder
        })
        console.log(finder);
    }

    sorter = (property, property2) => {
        const employees = this.state.response.sort(function (a, b) {
        if (property2) {
            if (a[property][property2].toLowerCase() < b[property][property2].toLowerCase()) { return -1; }
       
            if (a[property][property2].toLowerCase() > b[property][property2].toLowerCase()) { return 1; }
          return 0; 
            
        } else {
            if (a[property].toLowerCase() < b[property].toLowerCase()) { return -1; }
       
            if (a[property].toLowerCase() > b[property].toLowerCase()) { return 1; }
          return 0; 
           
        }
        })
        this.setState({searchRes: employees})
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
            employees={this.state.searchRes}
       />
       <Table employees={this.state.searchRes} sorter={this.sorter}/>
        </div>
    )}
}

export default Home;