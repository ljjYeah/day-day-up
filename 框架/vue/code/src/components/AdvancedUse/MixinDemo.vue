<template>
    <div>
        <p>{{name}} {{age}}</p>
        <button @click="showWebsite">获取网址信息</button>
    </div>
</template>

<script>
    import testMixin from './mixin'
    export default {
        mixins: [testMixin],

        data() {
            return {
                name: 'ljj'
            }
        },
        mounted() {
            console.log('index mounted');
        },
    }
</script>
