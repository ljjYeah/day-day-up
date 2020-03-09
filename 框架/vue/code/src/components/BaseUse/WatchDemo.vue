<template>
    <div>
        <input v-model="name">
        <input v-model="info.city">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'ljj',
                info: {
                    city: '杭州'
                }
            }
        },
        watch: {
            name(val,oldVal){
                console.log(`watch name: ${oldVal}, ${val}`)
            },
            info: {
                handler(val,oldVal){
                    console.log('watch info:', oldVal, val)
                },
                deep: true
            }
        }
    }
</script>