<template>
    <p>内容一</p>
</template>

<script>
    export default {
        mounted() {
            console.log('1 mounted');
        },
        destroyed() {
            console.log('1 destroyed');
        }
    }
</script>
