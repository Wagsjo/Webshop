<script></script>

<template>
  <form id="RegForm">
    <h1>Skapa ett konto</h1>
    <div class="form-group">
      <label for="FirstName">förnamn</label>
      <input type="text" class="form-control" />
    </div>

    <div class="form-group">
      <label for="LastName">Efternamn</label>
      <input type="text" class="form-control" />
    </div>

    <div class="form-group">
      <label for="Email">Epost</label>
      <input type="text" class="form-control" />
    </div>

    <div class="form-group">
      <label for="Password">Lösenord</label>
      <input type="text" class="form-control" />
    </div>

    <button type="submit" class="btn btn-primary">Skapa profil</button>
    <br />
    <p>
      Har du redan ett konto
      <RouterLink to="/login">logga in</RouterLink>
    </p>
  </form>
</template>

<style>
  #RegForm {
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  .btn-primary {
    margin-top: 1em;
    color: black;
    background-color: #babfda;
  }

  .form-group input {
    background-color: #c4c4c4;
  }

  @media (max-width: 700px) {
  }
</style>
