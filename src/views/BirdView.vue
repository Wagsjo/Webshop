<script>
  import { getAnimals } from "../firebase"

  export default {
    created() {
      this.discoPlayer.src = this.stayingAlive
      this.svenPlayer.src = this.svenSpeaking
      this.allsangPlayer.src = this.allsang
      getAnimals("bird")
        .then((birdList) => {
          this.bird = birdList
        })
        .finally(() => (this.loading = false))
    },
    data() {
      return {
        bird: null,
        loading: true,
        discoPlayer: new Audio(),
        stayingAlive: "../../assets/disco.mp3",
        svenPlayer: new Audio(),
        svenSpeaking: "../../assets/SvenIsKing.mp3",
        allsangPlayer: new Audio(),
        allsang: "../../assets/SvenArMinVan.mp3",
        isPlaying: false,
        isPrating: false,
        isVan: false
      }
    },
    methods: {
      viewBird(birdId) {
        this.$router.push(`/animals/${birdId}`)
      },
      play() {
        if (this.isPlaying === false) {
          this.discoPlayer.play()
          this.isPlaying = true
        } else {
          this.discoPlayer.pause()
          this.isPlaying = false
        }
      },
      svenPratar() {
        if (this.isPrating === false) {
          this.svenPlayer.play()
          this.isPrating = true
        } else {
          this.svenPlayer.pause()
          this.isPrating = false
        }
      },
      minVan() {
        if (this.isVan === false) {
          this.allsangPlayer.play()
          this.isVan = true
        } else {
          this.allsangPlayer.pause()
          this.isVan = false
        }
      }
    }
  }
</script>

<template>
  <div class="blink-bg">
    <div class="container">
      <input type="button" value="Play" @click="play" />
      <input type="button" value="Stop" @click="svenPratar" />
      <input type="button" value="Asd" @click="minVan" />
    </div>
    <!--     <audio controls src="../../assets/disco.mp3" />
    <audio controls src="../../assets/SvenIsKing.mp3" /> -->
    <div class="hanger" />
    <div class="discoball">
      <img
        src="https://drive.google.com/uc?id=0B7QrEBMF4GTGQ3lfRzV0cU5rNHM"
        alt=""
      />
    </div>
    <main>
      <h1 class="text-center mb-5 mt-5">Fågel</h1>
      <ul style="list-style: none" class="card-columns">
        <li class="fs-2 mb-5 text-center" v-for="bird in bird" :key="bird.id">
          <img
            class="bild mb-3"
            @click="viewBird(bird.id)"
            :src="bird.profileImage ?? '/assets/fox.jpeg'"
            alt="Sven"
          />
          <p @click="viewBird(bird.id)" class="name text-uppercase display-4">
            {{ bird.name ?? "Okänd" }}
          </p>
        </li>
      </ul>

      <RouterView />
    </main>
  </div>
</template>

<style lang="scss" scoped>
  .blink-bg {
    background: #bf3978;
    padding: 10px;
    display: inline-block;
    border-radius: 5px;
    /* animation: blinkingBackground 2s infinite; */
    width: 100%;
  }
  .blink-bg::after {
    content: "";
    display: block;
    width: 100%;
    height: 200px;
    background-color: #bf3978;
    padding: 10px;
    display: inline-block;
    border-radius: 5px;
    /* animation: blinkingBackground 2s infinite; */
  }
  @keyframes blinkingBackground {
    0% {
      background-color: #10c018;
    }
    25% {
      background-color: #1056c0;
    }
    50% {
      background-color: #ef0a1a;
    }
    75% {
      background-color: #254878;
    }
    100% {
      background-color: #04a1d5;
    }
  }
  @keyframes hue {
    from {
      filter: hue-rotate(0deg);
    }

    to {
      filter: hue-rotate(360deg);
    }
  }
  .discoball {
    animation-timing-function: linear;
    animation-duration: 1s;
    animation-name: hue;
    animation-iteration-count: infinite;
    animation-direction: alternate;

    background: lightgrey;
    border-radius: 200px;
    /*border: 0px solid #fff;*/
    height: 200px;
    width: 200px;
    box-shadow: 0 3px 200px -3px #fff;
    margin-left: auto;
    margin-right: auto;
  }
  .discoball img {
    height: 200px;
    width: 200px;
  }
  .hanger {
    background: #eee;
    width: 1px;
    border-left: 2px solid #fff;
    border-right: 2px solid #fff;
    height: 60px;
    position: absolute;
    top: 0;
    left: 50%;
  }

  /*   .blink-bg::after {
      content: "";
    } */

  .name:hover {
    color: blue;
    cursor: pointer;
  }

  .bild {
    border-radius: 100%;
    width: 5em;
    height: 5em;
    box-shadow: 0.2em 0.2em 0.4em rgba(0, 0, 0, 0.52);
  }

  .card-columns {
    column-count: 1;
  }
</style>
