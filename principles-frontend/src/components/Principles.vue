<template>
    <div>
        <v-card v-bind:key='principle.id' v-for="principle in principles" :loading="loading" class="mx-auto my-12" max-width="58%">
            <template slot="progress">
                <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                ></v-progress-linear>
            </template>
            <v-card-title>Problem:</v-card-title>
            <v-card-text>
                <div class="my-1 subtitle-1">
                    {{principle.problem}}
                </div>
                <br/>
                <div color='black' class="my-4 subtitle-1">
                    Diagnosis:
                </div>
                <div class="my-4 subtitle-1">
                    {{principle.diagnosis}}
                </div>
                <div color='black' class="my-4 subtitle-1">
                    Change:
                </div>
                <div color='black' class="my-4 subtitle-1">
                    {{principle.change}}
                </div>
            </v-card-text>
            <v-card-actions>
                <v-btn
                    color="deep-purple lighten-2"
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

</style>