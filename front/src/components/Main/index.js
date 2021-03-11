import React from 'react';
import axios from 'axios';




export default class Main extends React.Component {
  state = {
    members: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/argos`)
      .then(res => {
        const members = res.data;
        console.log(members)
        this.setState({
          members
        });
      })

  }
  render() {
    return (

      <main>
      <h2> Ajouter un(e) Argonaute </h2> 
        <form className = "new-member-form">
          <label className = "name" > Nom de l' Argonaute </label> 
          <input id = "name" name = "name" type = "text" placeholder = "Charalampos"/>
          <button onClick > Envoyer </button> 
        </form>
      <h2> Membres de l 'équipage </h2> 
        <section className = "member-list">
          <div className = "member-item">{ this.state.members.map(member => <li key={member._id}>{member.name}</li>) } </div> 
        </section>       
      </main>

    )
  }
}

