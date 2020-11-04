<template>
    <v-container>
        <v-card width="800" class="mx-auto mt-5">
            <v-card-title>
                <h1>Login / Register</h1>
            </v-card-title>
            <v-card-text>
                <v-form>
                    <v-text-field 
                    v-model="username"
                    prepend-icon="mdi-account-circle"
                    label="username" />
                    <v-text-field 
                    v-model="password"
                    :type="showPassword ? 'text' : 'password'" 
                    label="password" 
                    prepend-icon="mdi-lock"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword"
                    />
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-btn @click="loginUser" color="info">Login</v-btn>
                <v-spacer />
                <v-btn @click='registerUser' color="success">Register</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
import axios from "axios"
export default {
    name: "Onboarding",
    data() {
        return {
            username: '',
            password: '',
            showPassword: false
        }
    },
    methods: {
        loginUser(e) {
            e.preventDefault()
            axios.post('https://principles-backend.herokuapp.com/auth/login', {username: this.username, password: this.password})
            .then((res) => {
                console.log(res)
                this.routing.push('Principles')
            })
            .catch((err) => {
                console.log(err)
            })
        },
        registerUser(e) {
            e.preventDefault()
            axios.post('https://principles-backend.herokuapp.com/auth/register', {username: this.username, password: this.password})
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }
}
</script>

<style>
    .v-app {
        background-color: #838383;
    }
    .v-card {
        background-color: white;
    }
</style>