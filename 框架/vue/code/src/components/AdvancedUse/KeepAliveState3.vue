<template>
    <p>内容三</p>
</template>

<script>
    export default {
        mounted() {
            console.log('3 mounted');
        },
        destroyed() {
            console.log('3 destroyed');
        }
    }
</script>
