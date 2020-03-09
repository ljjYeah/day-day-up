<template>
    <p>内容二</p>
</template>

<script>
    export default {
        mounted() {
            console.log('2 mounted');
        },
        destroyed() {
            console.log('2 destroyed');
        }
    }
</script>
