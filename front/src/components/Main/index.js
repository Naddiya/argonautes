import React from 'react';
import axios from 'axios';




export default class Main extends React.Component {
  // INITIAL STATE  
  state = {
        members: [],
        newMember: "",
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
    this.setState({ newMember: event.target.value });
    console.log(this.state.newMember)
  };
//  SUBMIT NEW MEMBER VIA AXIOS
  handleSubmit = event => {
    event.preventDefault();

    const member = {
      membername: this.state.newMember
    };
    console.log(member);

    axios.post('http://localhost:4001/members/add', member)
    .then(res => console.log(res.data));

    this.setState({
      membername:""
    })
   }

  render() {
    return (

      <main>
      <h2> Ajouter un(e) Argonaute </h2> 
        <form className = "new-member-form" onSubmit={this.handleSubmit}>
          <label className = "name" > Nom de l' Argonaute </label> 
          <input type="text" onChange={this.handleChange} placeholder = "Charalampos" id = "name" name = "name"/>
          <button type="submit" onSubmit={this.handleSubmit}> Envoyer </button>
        </form>
      <h2> Membres de l 'équipage </h2> 
        <section className = "member-list">
          <div className = "member-item">{ this.state.members.map(member => <li key={member._id}>{member.membername}</li>) } </div> 
        </section>       
      </main>

    )
  }
}

