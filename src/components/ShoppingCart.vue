<template>
  <h3>Varukorg</h3>
  <b-container class="step1">
    <b-row class="step2">
      <b-col class="step3">Djur</b-col>
      <b-col>Pris</b-col>
    </b-row>
  </b-container>
  <h4>Summa</h4>
  <button class="btn btn-primary" type="submit">Betala</button>
</template>

<script></script>

<style lang="scss" scoped>
  h3 {
    font-family: Exo;
    font-size: 36px;
    left: 109px;
    position: absolute;
    top: 100px;
    font-style: normal;
    font-weight: bold;
    color: black;
  }

  .step1 {
    background-color: #babfda;
    border: 1px black solid;
  }
  .step3 {
    position: absolute;
    width: 59px;
    height: 24px;
    left: 22px;
    top: 203px;
    font-family: Exo;
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 32px;
  }

  .btn-primary {
    position: absolute;
    width: 205px;
    height: 46px;
    left: 79px;
    top: 592px;
    background: #babfda;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 10px;
  }
</style>
