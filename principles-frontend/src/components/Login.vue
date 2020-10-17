<template>
    <v-app>
        <v-card>
            <v-card-title>
                <h1>Login</h1>
            </v-card-title>
            <v-card-text>
                <v-form>
                    <v-text-field 
                    prepend-icon="mdi-account-circle"
                    label="username" />
                    <v-text-field 
                    prepend-icon="mdi-lock"
                    append-icon="mdi-eye-off"
                    type="password" 
                    label="password" />
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-btn color="info">Login</v-btn>
                <v-btn color="success">Register</v-btn>
            </v-card-actions>
        </v-card>
    </v-app>
</template>

<script>

export default {
    name: "AddTodo",
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

<style scoped>
    form {
        display: flex;
    }

    input[type="text"] {
        flex: 10;
        padding: 5px;
    }
</style>