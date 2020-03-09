<template>
    <div>
        <p>输入框:{{name}}</p>
        <input type="text" v-model.trim="name">
        <input type="text" v-model.lazy="name">
        <input type="text" v-model.number="age">

        <p>多行文本:{{desc}}</p>
        <textarea v-model="desc"></textarea>
        <!-- <textarea>{{desc}}</textarea> 这种写法是不允许的-->

        <p>复选框 {{checked}}</p>
        <input type="checkbox" v-model="checked">

        <p>多个复选框 {{checkNames}}</p>
        <input type="checkbox" id="jack" value="Jack" v-model="checkNames">
        <label for="jack">jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkNames">
        <label for="john">john</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkNames">
        <label for="mike">mike</label>

        <p>单选框 {{gender}}</p>
        <input type="radio" id="male" value="male" v-model="gender">
        <label for="male">male</label>
        <input type="radio" id="female" value="female" v-model="gender">
        <label for="female">female</label>


        <p>下拉列表选择 {{selected}}</p>
        <select v-model="selected">
            <option disabled value="">请选择</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>

        <p>下拉列表选择(多选) {{selectedList}}</p>
        <select v-model="selectedList" multiple>
            <option disabled value="">请选择</option>
            <option value="AA">A</option>
            <option value="BB">B</option>
            <option value="CC">C</option>
        </select>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'ljj',
                age: 20,
                desc: '',
                checked: false,
                checkNames: [],
                gender: 'male',
                selected: 'B',
                selectedList: []
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