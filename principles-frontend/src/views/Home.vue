<template>
  <div class="home">
    <h1>Principles App</h1>
    <LandingButton />
    <h3>Principles app is inspired by the book Principles by Ray Dalio</h3>

    <p>Principles has had a hugely positive impace on my life 
      and has helped me develop the habit of recording and reflecting 
      on my principles especially as problems arise.</p>

    <p>I made this App as a tool to help me record my principles and discover other peoples principles</p>
  </div>
</template>

<script>
// @ is an alias to /src
import LandingButton from "../components/LandingButton"


export default {
  name: 'Home',
  components: {
    LandingButton
  }
}
</script>

<style>
  .home {
    background-color: #838383;
    text-align: center;
    margin: 5% auto;
    border-radius: 5px;
    width: 80%;
  }
  .home h1 {
    margin-top: 2%;
    font-size: 2rem;
    text-decoration: underline;
    text-decoration-color: #D70913;
  }
  .home p {
    width: 80%;
    margin: 1% auto;
  }
  .home h3 {
    width: 80%;
    font-size: 1.3rem;
    margin: 1% auto;
    margin-bottom: 3%;
  }

</style>
