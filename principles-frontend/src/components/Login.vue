<template>
    <div>
        <form @submit="loginUser">
            <input type="text" v-model="title" name="username" placeholder="username">
            <input type="text" v-model="title" name="password" placeholder="password">
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
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