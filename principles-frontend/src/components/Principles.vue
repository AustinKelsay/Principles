<template>
    <div v-on:welcome="getPrinciples">
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Principles',
    created: function() {
        axios.get('https://principles-backend.herokuapp.com/principles', {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    methods: {
    }
}
</script>

<style>

</style>