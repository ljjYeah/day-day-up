<template>
    <div>
        <button @click="changeState(1)">按钮一</button>
        <button @click="changeState(2)">按钮二</button>
        <button @click="changeState(3)">按钮三</button>

        <keep-alive>
            <keep-alive-state1 v-if="state===1"></keep-alive-state1>
            <keep-alive-state2 v-if="state===2"></keep-alive-state2>
            <keep-alive-state3 v-if="state===3"></keep-alive-state3>
        </keep-alive>
    </div>
</template>

<script>
    import KeepAliveState1 from './KeepAliveState1'
    import KeepAliveState2 from './KeepAliveState2'
    import KeepAliveState3 from './KeepAliveState3'
    export default {
        data() {
            return {
                state:1
            }
        },
        methods: {
            changeState(state) {
                this.state=state;
            }
        },
       components: {
           KeepAliveState1,
           KeepAliveState2,
           KeepAliveState3
       }
    }
</script>
