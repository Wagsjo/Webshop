<script></script>

<template>
  <form id="loginForm">
    <h1>Logga in på ditt konto</h1>

    <div class="form-group">
      <label for="Email">Epost</label>
      <input type="text" class="form-control" />
    </div>

    <div class="form-group">
      <label for="Password">Lösenord</label>
      <input type="text" class="form-control" />
    </div>

    <button type="submit" class="btn btn-primary">Skapa profil</button>
  </form>
</template>

<style>
  #loginForm {
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
