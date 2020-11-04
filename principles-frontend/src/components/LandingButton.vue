<template>
    <div class='onboarding'>
      <router-link to="onboarding">
        <button class="btn btn-animation">Get Started</button>
      </router-link>

    </div>
</template>

<script>
export default {
    name: "LandingButton",
    components: {

    }
}
</script>

<style>
.onboarding {
    width: 80%;
    margin: 3% auto;
    border: 1px solid #D70913;
    padding-top: 8%;
    padding-bottom: 8%;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.781);
}

.onboarding h3 {
    margin-top: 0%;
}

.btn {
    width: 20%;
    padding: 2%;
    margin-left: 12%;
    margin-right: 12%;
    background: transparent;
    border: 1px solid #f0efe7;
    color: #D70913;
    cursor: pointer;
    font-size: 1rem;;
    letter-spacing: 0.2ch
}

.btn:hover, .btn:focus {
  color: #fff;
  outline: 0;
}

.btn-animation {
  -webkit-transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
}
.btn-animation:hover {
  box-shadow: 0 0 40px 40px #D70913 inset;
}
</style>