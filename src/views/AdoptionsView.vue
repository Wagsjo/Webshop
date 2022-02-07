<template>
  <h1>Adoptioner</h1>
  <nav>
    <ul>
      <li>
        <RouterLink to="/dogs">Hundar</RouterLink>
      </li>
      <li>
        <RouterLink to="/cats">Katter</RouterLink>
      </li>
      <li>
        <RouterLink to="/bird">Fågel</RouterLink>
      </li>
    </ul>
  </nav>

  <main>
    <RouterView />
  </main>
</template>
