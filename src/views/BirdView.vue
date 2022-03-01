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
          this.randNum()
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
      },
      randNum() {
        setInterval(function () {
          Math.floor(Math.random() * 10)
        }, 1000)
      }
    }
  }
</script>

<template>
  <div :class="{ blinkbg: isPlaying }">
    <div class="discoball" v-if="isPlaying">
      <img
        src="https://drive.google.com/uc?id=0B7QrEBMF4GTGQ3lfRzV0cU5rNHM"
        alt=""
      />
    </div>
    <main>
      <h1 class="text-center mb-5 mt-5" v-if="!isPlaying">Fågel</h1>
      <ul style="list-style: none" class="card-columns">
        <li
          class="fs-2 mb-5 text-center"
          v-for="birdie in bird"
          :key="birdie.id"
        >
          <img
            v-if="isPlaying"
            src="/assets/snoop-dogg-rap.gif"
            alt=""
            style="height: 300px"
          />

          <img
            class="bild mb-3"
            :class="{ transPic: isPlaying }"
            @click="viewBird(birdie.id)"
            :src="birdie.profileImage ?? '/assets/fox.jpeg'"
            alt="Sven"
          />
          <img
            v-if="isPlaying"
            src="/assets/snoop-dogg-rap.gif"
            alt=""
            style="height: 300px"
          />
          <p
            v-if="!isPlaying"
            @click="viewBird(birdie.id)"
            class="name text-uppercase display-4"
          >
            {{ birdie.name ?? "Okänd" }}
          </p>
        </li>
      </ul>
      <div
        class="btn-group dropup"
        style="position: absolute; bottom: 1em; left: 1em"
      >
        <button
          type="button"
          class="btn btn-secondary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Ljudklipp
        </button>
        <ul class="dropdown-menu">
          <div class="card" style="width: 12rem">
            <div class="card-body">
              <h4 class="card-title">Svens raketer</h4>
              <div class="card-text">
                Här kan man festa med Sven, få en varm hälsning direkt från Sven
                och sjunga med i allskön allsång med Svens vänner
              </div>
              <button
                type="button"
                class="btn btn-outline-info"
                @click="svenPratar"
                style="margin: 3px"
              >
                God dag
              </button>
              <button type="button" class="btn btn-outline-info" @click="play">
                Party
              </button>
              <button
                type="button"
                class="btn btn-outline-info"
                @click="minVan"
              >
                Allsång
              </button>
            </div>
            <img src="/assets/sven-music.jpg" alt="" />
          </div>
        </ul>
      </div>

      <RouterView />
    </main>
  </div>
</template>

<style lang="scss" scoped>
  .blinkbg {
    background: #bf3978;
    padding: 10px;
    display: inline-block;
    border-radius: 5px;
    animation: blinkingBackground 2s infinite;
    width: 100%;
  }
  .blinkbg::after {
    content: "";
    display: block;
    width: 100%;
    height: 500px;
    background-color: #bf3978;
    padding: 10px;
    display: inline-block;
    border-radius: 5px;
    animation: blinkingBackground 2s infinite;
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
      background-color: #c9c618;
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
  .name:hover {
    color: blue;
    cursor: pointer;
  }
  .transPic {
    transition: transform 1s;
    animation: dancing-sven 4s infinite alternate;
  }
  @keyframes dancing-sven {
    0% {
      transform: translate(0) rotate(0deg);
    }
    20% {
      transform: translate(-50%, 250%) rotate(90deg);
    }
    40% {
      transform: translate(140%, -90%) rotate(-90deg);
    }
    60% {
      transform: translate(-200%, 300%) rotate(90deg);
    }
    80% {
      transform: translate(30%, -250%) rotate(-90deg);
    }
    100% {
      transform: translate(250%, 40%) rotate(90deg);
    }
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
