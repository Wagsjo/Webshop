<template>
  <nav>
    <h1>Adminpanel</h1>
    <ul>
      <li><RouterLink to="/messages">Meddelanden</RouterLink></li>
      <li><RouterLink to="/applications">Intresseanmälningar</RouterLink></li>
      <li><RouterLink to="/adding">Lägg till djur</RouterLink></li>
    </ul>
  </nav>

  <section>
    <RouterView />
  </section>
</template>
