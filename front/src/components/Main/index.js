import React from 'react';
import axios from 'axios';




export default class Main extends React.Component {
  // INITIAL STATE  
  state = {
        members: [],
        inputValue: ""
    };
  // GET CREW MEMBERS  
  componentDidMount() {
     axios.get(`http://localhost:4001/members`)
       .then(response => {
         const members = response.data;
         this.setState({ members });
       })
    }
  // HANDLE CHANGE ON INPUT
  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  // SUBMIT NEW MEMBER VIA AXIOS
  handleSubmit = event => {
    event.preventDefault();

    const newMember = {
      members: this.state.inputValue
    };

    let headers = {
               'Acces-Control-Allow-Origin': "*",
               'Content-Type':'application/JSON',};

    axios.post(`https://localhost:3001/argos`, { newMember }, headers)
      .then(response => {
        console.log(response);
        console.log(response.data);
      })
  }

  render() {
    return (

      <main>
      <h2> Ajouter un(e) Argonaute </h2> 
        <form className = "new-member-form" onSubmit={this.handleSubmit}>
          <label className = "name" > Nom de l' Argonaute </label> 
          <input type="text" onChange={this.handleChange} placeholder = "Charalampos" id = "name" name = "name"/>
          <button type="submit" onSubmit={this.handleChange}> Envoyer </button>
        </form>
      <h2> Membres de l 'équipage </h2> 
        <section className = "member-list">
          <div className = "member-item">{ this.state.members.map(member => <li key={member._id}>{member.membername}</li>) } </div> 
        </section>       
      </main>

    )
  }
}

