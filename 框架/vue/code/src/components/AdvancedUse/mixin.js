export default {
    data() {
        return {
            age: 20
        }
    },
    mounted() {
        console.log('mixin mounted');
    },
    methods: {
        showWebsite() {
            console.log('http://liujuanjuan.com');
        }
    }
}