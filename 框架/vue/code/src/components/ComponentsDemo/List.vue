<template>
    <ul>
        <li v-for="(item, index) in list" :key="item.id">
            {{item.title}}
            <button @click="deleteItem(index)">删除</button>
        </li>
    </ul>
</template>

<script>
    import event from './event'
    export default {
        props: {
            list: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        created() {
            console.log('list created');
        },
        mounted() {
            event.$on('onAddTitle', this.addTitleHandler);
            console.log('list mounted');
        },
        beforeUpdate() {
            console.log('list beforeUpdate');
        },
        updated() {
            console.log('list updated');
        },
        methods: {
            deleteItem(index) {
                this.$emit('delete', index)
            },
            addTitleHandler(title) {
                console.log('on add title', title);
            }
        },
        beforeDestroy() {
            console.log('list beforeDestroy');
            event.$off('onAddTitle', this.addTitleHandler)
        },
        destroyed() {
            console.log('list destroyed');
        }
    }
</script>
