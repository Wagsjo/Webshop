<style>
  #splashCarousel .carousel-item img {
    object-fit: cover;
    object-position: center;
    height: 40vh;
    overflow: hidden;
    filter: blur(1px);
  }
</style>

<template>
  <div id="splashCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#splashCarousel"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      />
      <button
        type="button"
        data-bs-target="#splashCarousel"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      />
      <button
        type="button"
        data-bs-target="#splashCarousel"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      />
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="/assets/animals.jpg" class="d-block w-100" alt="animal" />
      </div>
      <div class="carousel-item">
        <img src="/assets/fox.jpeg" class="d-block w-100" alt="animal" />
      </div>
      <div class="carousel-item">
        <img src="/assets/animals.jpg" class="d-block w-100" alt="animal" />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#splashCarousel"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true" />
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#splashCarousel"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true" />
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
