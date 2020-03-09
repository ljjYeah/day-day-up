<template>
   <div id="app">
       <ul ref="ul">
           <li v-for="(item,index) in list" :key="index">
               {{item}}
           </li>
       </ul>
       <button @click="addItem">添加一项</button>
   </div>
</template>

<script>
    export default {
        data() {
            return {
                list: [1,2,3]
            }
        },
        methods: {
            addItem() {
                this.list.push(Date.now());
                this.list.push(Date.now());
                this.list.push(Date.now());
                const ulElem = this.$refs.ul;
                console.log(ulElem.childNodes.length);
                this.$nextTick(()=>{
                    console.log(ulElem.childNodes.length);
                })
            }
        }
    }
</script>
