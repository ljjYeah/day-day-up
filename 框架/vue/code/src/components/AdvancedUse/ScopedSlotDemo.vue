<template>
    <a :href="url">
        <slot :slotData="website">默认内容，即父组件没有设置内容时，这里显示</slot>
    </a>
</template>

<script>
    export default {
        props: ['url'],
        data() {
            return {
                website: {
                    url: "http://www.baidu.com",
                    desc: '点击去百度'
                }
            }
        }
    }
</script>
