<template>
  <h2>Ansökningsformulär</h2>
  <div class="container mt-3">
    <form class="row g-3">
      <div class="col-md-6 mt-3">
        <label for="firstName" class="form-label">Förnamn</label>
        <input type="text" class="form-control" id="firstName" required />
      </div>
      <div class="col-md-6 mt-3">
        <label for="lastName" class="form-label">Efternamn</label>
        <input type="text" class="form-control" id="lastName" required />
      </div>
      <div class="col-md-8">
        <label for="adressInfo" class="form-label">Adress</label>
        <input type="email" class="form-control" id="adressInfo" required />
      </div>
      <div class="class col-md-4">
        <label for="postCode" class="form-label">Postnummer</label>
        <input type="text" class="form-control" id="postCode" required />
      </div>
      <div class="col-md-8">
        <label for="emailInfo" class="form-label">E-Mail</label>
        <input type="email" class="form-control" id="emailInfo" required />
      </div>
      <div class="col-md-4">
        <label for="phoneNumber" class="form-label">Telefonnummer</label>
        <input
          type="text"
          class="form-control"
          id="phoneNumber"
          placeholder="+46"
          required
        />
      </div>

      <div class="col-md-12">
        <label for="comments" class="form-label"
          >Berätta lite om varför just du skall få bli ägare</label
        >
        <textarea class="form-control" id="comments" rows="3" />
      </div>
      <div class="col-md-12">
        <button type="submit" class="btn btn-primary btn-lg mb-2">
          Skicka din ansökan
        </button>
      </div>
    </form>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
  h2 {
    font-family: Encode Sans;
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    margin-top: 10px;
  }
  .btn-primary {
    background-color: #babfda;
    color: black;
    border-color: black;
    font-family: Encode Sans;
    border-radius: 7px;
  }
  .form-label {
    font-family: Encode Sans;
    font-size: 20px;
    font-weight: 400;
  }
  .container {
    background-color: #babfda;
  }
  .form-check {
    flex-direction: row;
  }
</style>
