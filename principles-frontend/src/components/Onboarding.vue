<template>
    <v-app>
        <v-card width="800" class="mx-auto mt-5">
            <v-card-title>
                <h1>Login / Signup</h1>
            </v-card-title>
            <v-card-text>
                <v-form>
                    <v-text-field 
                    prepend-icon="mdi-account-circle"
                    label="username" />
                    <v-text-field 
                    :type="showPassword ? 'text' : 'password'" 
                    label="password" 
                    prepend-icon="mdi-lock"
                    append-icon="mdi-eye-off"
                    />
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-btn color="info">Login</v-btn>
                <v-spacer />
                <v-btn color="success">Register</v-btn>
            </v-card-actions>
        </v-card>
    </v-app>
</template>

<script>

export default {
    name: "Onboarding",
    data() {
        return {
            title: ''
        }
    },
    methods: {
        loginUser(e) {
            e.preventDefault()
            const newTodo = {
                title: this.title,
                completed: false
            }
            // send up to parent
            this.$emit('add-todo', newTodo)
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