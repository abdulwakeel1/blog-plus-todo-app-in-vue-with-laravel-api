<script>
export default {
  data() {
    return {
      count: 10
    }
  }
}
</script>

<template>

    <div class="counter">
      <h1>This is a counter page</h1>
      <p>cool counter</p>
      <p>It is only showing in counter class</p>
      <br>
      <h2>{{ count }}</h2>
      <button @click="count++">Incremnet</button>
      <button @click="count--">Decrement</button>
    </div>
    <div>
        <h4>hello width is here </h4>
    </div>


  </template>
  
  <style scoped>

button {
    font-weight: bold;
}

  /* @media (min-width: 1024px) {
    .counter {
      min-height: 100vh;
      display: flex;
      align-items: center;
      color: green;
    }
  } */
  </style>
  