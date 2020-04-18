import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component{
    
    constructor(){
        super()
        
        this.state = { // state describes our app
            robots : [],
            searchField : ""
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users") // API
        .then(response =>
            response.json()
        )
        .then(users => 
            this.setState({robots : users})
        )
        
    }
    onSearchChange = (event) => { // bir component'ta metod yazarken bu syntax'ı kullanmak zorunlu.
        
        this.setState({searchField: event.target.value});
    }
    render(){
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()); // eşleşen robot(lar) dönecek.
        });
        if(this.state.robots.length === 0){
            return <h1 className ="tc">LOADING</h1>
        }
        else{
            return(
                <div className = "tc">
                    <h1 className = "f2">RoboFriends</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <CardList  robots = {filteredRobots}/>
                    </Scroll>
                    
                </div>
                
            );
        }
        
    }
    
}

export default App;