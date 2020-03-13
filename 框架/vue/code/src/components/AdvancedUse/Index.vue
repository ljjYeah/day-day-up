<template>
    <div>
        <p>vue高级特性</p>

        <p>自定义v-model {{name}}</p>
        <custom-v-model v-model="name"></custom-v-model>

        <!--<p>nextTick</p>-->
        <!--<next-tick></next-tick>-->

        <!--<p>slot</p>-->
        <!--<slot-demo :url="website.url">-->
        <!--    {{website.desc}}-->
        <!--</slot-demo>-->

        <!--<p>作用域插槽</p>-->
        <!--<scoped-slot-demo :url="website.url">-->
        <!--    <template v-slot="data">-->
        <!--        {{data.slotData.desc}}-->
        <!--    </template>-->
        <!--</scoped-slot-demo>-->

        <!--<p>具名插槽</p>-->
        <!--<named-slot-demo>-->
        <!--    <template #header>-->
        <!--        <h1>header111</h1>-->
        <!--    </template>-->
        <!--    &lt;!&ndash;<template v-slot:header>&ndash;&gt;-->
        <!--    &lt;!&ndash;    <h1>header111</h1>&ndash;&gt;-->
        <!--    &lt;!&ndash;</template>&ndash;&gt;-->
        <!--    <p>body111</p>-->
        <!--    <template v-slot:footer>-->
        <!--        <h1>footer111</h1>-->
        <!--    </template>-->
        <!--</named-slot-demo>-->

        <!-- 动态组件-->
        <!--<component :is="componentName"></component>-->

<!--        keep-alive-->
<!--        <keep-alive-demo></keep-alive-demo>-->

<!--        mixin-->
        <mixin-demo></mixin-demo>


    </div>
</template>

<script>
    import CustomVModel from './CustomVModel'
    import NextTick from './NextTick'
    import SlotDemo from './SlotDemo'
    import ScopedSlotDemo from './ScopedSlotDemo'
    import NamedSlotDemo from './NamedSlotDemo'
    import KeepAliveDemo from './KeepAliveDemo'
    import MixinDemo from './MixinDemo'

    export default {
        data() {
            return {
                name: '455355543',
                website: {
                    url: "http://www.liujuanjuan.com",
                    desc: '点击去我的博客看看吧'
                },
                componentName: 'NextTick'
            }
        },
        components: {
            CustomVModel,
            NextTick,
            SlotDemo,
            ScopedSlotDemo,
            NamedSlotDemo,
            KeepAliveDemo,
            MixinDemo
        }
    }
</script>
