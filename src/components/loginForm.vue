<script></script>

<template>
  <main>
    <form id="loginForm">
      <h1>Logga in <span>på ditt konto</span></h1>

      <div class="form-group">
        <label for="Email">Epost</label>
        <input type="text" class="form-control" />
      </div>

      <div class="form-group">
        <label for="Password">Lösenord</label>
        <input type="text" class="form-control" />
      </div>

      <button type="submit" class="btn btn-primary">Logga in</button>
      <br />
      <RouterLink to="/registering">Skapa ett konto hos oss</RouterLink>
    </form>
  </main>
</template>

<style lang="scss" scoped>
  main {
    background-color: #babfda;
    padding-top: 5em;
    padding-bottom: 5em;
    height: auto;
    position: relative;

    h1 {
      color: #003fb9;
      font-family: Encode Sans;

      font-weight: bold;

      span {
        color: black;
        font-weight: 400px;
        font-weight: normal;
      }
    }
  }

  #loginForm {
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;

    .form-control {
      background-color: white;
    }
  }

  .btn-primary {
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 32px;

    width: 205px;
    height: 46px;
    left: 85px;
    top: 502px;

    margin-top: 2em;
    color: black;
    background-color: #babfda;
    border-color: black;
  }

  @media (max-width: 700px) {
  }
</style>
