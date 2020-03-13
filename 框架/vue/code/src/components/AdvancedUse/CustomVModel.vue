<template>
    <input
            type="text"
            :value="text"
            @input="$emit('change1',$event.target.value)"
    >
</template>

<script>
    export default {
        model: {
            prop: 'text',
            event: 'change1'
        },
        props: {
            text: String,
            default() {
                return '123'
            }
        },
    }
</script>
