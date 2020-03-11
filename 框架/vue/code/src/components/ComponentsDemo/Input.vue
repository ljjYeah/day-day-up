<template>
    <div>
        <input type="text" v-model="value">
        <button @click="add">add</button>
    </div>
</template>

<script>
    import event from './event'
    export default {
        data() {
            return {
                value: ''
            }
        },
        methods: {
            add() {
                this.$emit('add', this.value);

                event.$emit('onAddTitle', this.value);

                this.value = ''
            }
        },
    }
</script>
