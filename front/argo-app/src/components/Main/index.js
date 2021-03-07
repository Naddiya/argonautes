import React from 'react';

const Main = () => {
    return (
<main>
    <h2>Ajouter un(e) Argonaute</h2>
  <form class="new-member-form">
    <label for="name">Nom de l&apos;Argonaute</label>
    <input id="name" name="name" type="text" placeholder="Charalampos" />
    <button type="submit">Envoyer</button>
  </form>
    <h2>Membres de l'équipage</h2>
  <section class="member-list">
    <div class="member-item">Eleftheria</div>
    <div class="member-item">Gennadios</div>
    <div class="member-item">Lysimachos</div>
  </section>
</main>
    )
}

export default Main;