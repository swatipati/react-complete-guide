import React, { Component } from 'react';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
     { id:'ghy', name:'tuski' , age:90},
     { id:'bhj', name:'swati' , age:9},
    ],
    otherPerson: 'some junk',
    showPersons:false
  }
 deletePersonHandler = (personIndex) => {
  // const persons = this.state.persons.slice();
  const persons = [...this.state.persons];
   persons.splice(personIndex,1);
   this.setState({persons:persons});

 }
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})  
  }

  nameChangeHandler=(event,id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id ===id;
    })
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] =person;
    this.setState({persons:persons});
  }
  render() {
    const style = {
      backgroundColor:'green',
      color:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    };

    let persons = null;
    if (this.state.showPersons){
      persons =(
      <div>
        {this.state.persons.map((person,index) => {
        return <Person 
        click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                change={(event) => this.nameChangeHandler(event,person.id)}/>
        })}
      </div>
      )
      style.backgroundColor = 'red';
      }
      const classses = [];
      if(this.state.persons.length > 0 ){
        classses.push('bold');
      }
      if(this.state.persons.length < 2){
        classses.push('red');
      }
      
     return (
       
       <div className="App">
       <h1>Hi react app</h1>
       <p className={classses.join(' ')}>test page</p>
       <button
       style={style}
       onClick={this.togglePersonHandler}>Switch Name
       </button>
        {persons}       
       </div>
     );
   // return React.createElement('div',{className:'App'},React.createElement('h1',{className:'App'},'Hi its\' react app'));
  }
}

export default App;
