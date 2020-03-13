<template>
    <div>
        <Input @add="addHandler"/>
        <List :list="list" @delete="deleteHandler"/>
    </div>
</template>

<script>
    import Input from './Input'
    import List from './List'

    export default {
        data() {
            return {
                list: [
                    {id: 'a', title: '标题1'},
                    {id: 'b', title: '标题2'},
                    {id: 'c', title: '标题3'},
                ],
            }
        },
        methods: {
            addHandler(title) {
                this.list.push({id: Date.now(), title})
            },
            deleteHandler(index) {
                this.list.splice(index, 1)
            }
        },
        beforeCreate() {
            console.log('index beforeCreate');
        },
        created() {
            console.log('index created');
        },
        mounted() {
            console.log('index mounted');
        },
        beforeUpdate() {
            console.log('index beforeUpdate');
        },
        updated() {
            console.log('index updated');
        },
        beforeDestroy() {
            console.log('index beforeDestroy');
        },
        destroyed() {
            console.log('index destroyed');
        },
        components: {
            Input,
            List
        }
    }
</script>
