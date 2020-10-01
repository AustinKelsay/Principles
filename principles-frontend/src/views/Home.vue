<template>
  <div class="home">
    <h1>Principles App</h1>
    <Onboarding />
    <p>Principles app is inspired the book Principles by Ray Dalio</p>
    <br/>
    <p>Principles has had a hugely positive impace on my life 
      and has helped me develop the habit of recording and reflecting 
      on my principles especially as problems arise.</p>
    <br/>
    <p>I made this App as a tool to help me record my principles and discover other peoples principles</p>
  </div>
</template>

<script>
// @ is an alias to /src
import Onboarding from "../components/Onboarding"


export default {
  name: 'Home',
  components: {
    Onboarding
  }
}
</script>

<style>
  .home {
    text-align: center;
    margin: 5% auto;
  }
  .home h1 {
    font-size: 2rem;
    text-decoration: underline;
    text-decoration-color: #D70913;
  }
  .home p {
    width: 80%;
    margin: 0% auto;
  }

</style>
