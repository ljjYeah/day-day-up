<template>
    <div>
        <p>文本插值 {{message}}</p>
        <p>JS表达式 {{flag ? 'yes' : 'no'}}</p>
        <p :id="dynamicId">动态属性 id</p>
        <p v-html="rawHtml">
            <span>xss 风险</span>
            <span>使用v-html之后，将会覆盖子元素</span>
        </p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: "HELLO VUE",
                flag: true,
                dynamicId: `id-${Date.now()}`,
                rawHtml: '渲染html<b>加粗</b> <i>斜体</i>'
            }
        },
        beforeCreate() {
            console.log('----------beforeCreate----------');
            console.log("%c%s", "color:red", "el     : "+this.$el);   //undefined
            console.log("%c%s", "color:red", "data   : "+this.$data); //undefined
            console.log("%c%s", "color:red", "message: "+this.message);   //undefined
        },
        created() {
            console.log('----------created----------');
            console.log("%c%s", "color:red", "el     : "+this.$el);   //undefined
            console.log("%c%s", "color:red", "data   : "+this.$data); //[object Object]
            console.log("%c%s", "color:red", "message: "+this.message);   //HELLO VUE
        }
    }
</script>