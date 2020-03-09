<template>
    <div>
        <p v-if="type === 'a'">a by v-if</p>
        <p v-else-if="type === 'b'">b by v-if</p>
        <p v-else>other by v-if</p>


        <p v-show="type === 'a'">a by v-show</p>
        <p v-show="type === 'b'">b by v-show</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                type:'a'
            }
        }
    }
</script>
