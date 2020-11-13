<template>
    <div>
        <v-card dark v-bind:key='principle.id' v-for="principle in principles"  class="mx-auto my-12" max-width="55%">
            <v-card-title>Problem:</v-card-title>
            <v-card-text>
                <div class="subtitle-1 highlight">
                    {{principle.problem}}
                </div>
                <br/>
                <v-card-title class="inner-title">Diagnosis:</v-card-title>
                <div class="my-4 subtitle-1">
                    {{principle.diagnosis}}
                </div>
                <v-card-title class="inner-title">Change:</v-card-title>
                <div class="my-4 subtitle-1">
                    {{principle.change}}
                </div>
            </v-card-text>
            <v-card-actions>
                <v-btn
                    color="#D70913"
                    text
                    @click="reserve"
                >
                    Adopt Principle
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Principles',
    data: () => ({
        principles: [],
        loading: false,
        selection: 1,
    }),
    created: function() {
        axios.get('https://principles-backend.herokuapp.com/principles', {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            .then((res) => {
                this.principles = res.data
            })
            .catch((err) => {
                console.log(err)
            })
    },
    methods: {
        reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    }
}
</script>

<style>
.highlight {
    width: 60%;
    padding: 1%;
    font-size: 1.2rem;
    text-align: center;
    background-color: #d70913d7;
    border-radius: 5px;
}
.inner-title {
    padding: 0%;
    color: white;
}
</style>