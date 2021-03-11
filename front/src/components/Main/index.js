import React from 'react';
//import axios from 'axios';




export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        members: [],
        inputValue: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  
}

  handleChange(event) {
    this.setState(
      { inputValue: event.target.value }
      );

  };

  handleSubmit(event) {
    event.preventDefault();
    const newMember = this.state.inputValue;
    console.log('this member was added to database : ' + newMember);
    }

  render() {
    return (

      <main>
      <h2> Ajouter un(e) Argonaute </h2> 
        <form className = "new-member-form" onSubmit={this.handleSubmit}>
          <label className = "name" > Nom de l' Argonaute </label> 
          <input type="text" onChange={this.handleChange} placeholder = "Charalampos" id = "name" name = "name"/>
          <button type="submit"> Envoyer </button>
        </form>
      <h2> Membres de l 'équipage </h2> 
        <section className = "member-list">
          <div className = "member-item">{ this.state.members.map(member => <li key={member._id}>{member.name}</li>) } </div> 
        </section>       
      </main>

    )
  }
}

