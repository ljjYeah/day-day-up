<template>
    <div id="app">
        <!--<tpl-demo></tpl-demo>-->
        <!--<computed-demo></computed-demo>-->
        <!--<watch-demo></watch-demo>-->
        <!--<class-demo></class-demo>-->
        <!--<condition-demo></condition-demo>-->
        <!--<list-demo></list-demo>-->
        <!--<event-demo></event-demo>-->
        <!--<form-demo></form-demo>-->
        <!--<component-demo></component-demo>-->
        <advanced-use></advanced-use>
    </div>
</template>

<script>
    import TplDemo from './components/BaseUse/TplDemo'
    import ComputedDemo from './components/BaseUse/ComputedDemo'
    import WatchDemo from './components/BaseUse/WatchDemo'
    import ClassDemo from './components/BaseUse/ClassDemo'
    import ConditionDemo from './components/BaseUse/ConditionDemo'
    import ListDemo from './components/BaseUse/ListDemo'
    import EventDemo from './components/BaseUse/EventDemo'
    import FormDemo from './components/BaseUse/FormDemo'
    import ComponentDemo from './components/ComponentsDemo/Index'
    import AdvancedUse from './components/AdvancedUse/Index'

    export default {
        name: 'App',
        components: {
            TplDemo,
            ComputedDemo,
            WatchDemo,
            ClassDemo,
            ConditionDemo,
            ListDemo,
            EventDemo,
            FormDemo,
            ComponentDemo,
            AdvancedUse
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
