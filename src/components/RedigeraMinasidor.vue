<template>
  <main>
    <h1>Mina Sidor</h1>
    <form id="RedigeraForm">
      <h1>Redigera ditt profil</h1>
      <div>
        <label for="FirstName">förnamn</label>
        <input
          type="text"
          class="form-control"
          placeholder="Ditt nuvarande förnamn"
        />
      </div>

      <div class="form-group">
        <label for="LastName">Efternamn</label>
        <input
          type="text"
          class="form-control"
          placeholder="Ditt nuvarande Efternamn"
        />
      </div>

      <div class="form-group">
        <label for="Email">Epost</label>
        <input
          type="text"
          class="form-control"
          placeholder="Ditt nuvarande E-post"
        />
      </div>

      <div class="form-group">
        <label for="Password">Lösenord</label>
        <input
          type="text"
          class="form-control"
          placeholder="Ditt nuvarande Lösenord"
        />
      </div>

      <button type="submit" class="btn btn-primary">Ändra</button>
    </form>
  </main>
</template>
<style>
  #RedigeraForm {
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
  .btn-primary {
    margin-top: 1em;
    color: black;
    background-color: #babfda;
  }
  @media (max-width: 700px) {
  }
</style>
