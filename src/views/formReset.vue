<template>
    <div class="forming">
        <input v-model="input1" type="text">
        <input v-model="input2" type="text">
        <button @click="resetForming">重置</button>
    </div>
</template>

<script setup>
let input1 = ref('')
let input2 = ref('')
let option = '111'
const resetForming = () => {
    console.log(option);
}

let a = [1, 2, 3, 14, 15]
//current=>当前值，index=>当前值的下标，array=>这个数组对象
let b = a.filter((current, index, array) => {
    return current < 10
})
console.log(b,a);

//防抖封装
// function antiShake(fn,wait) {
//     let timeOut = null
//     return args =>{
//         if(timeOut) clearTimeout(timeOut)
//         timeOut = setTimeout(fn,wait);
//     }
// }

//节流
// function throttle(event,time) {
//     let timer = null
//     return function () {
//         if(!timer){
//             timer = setTimeout(() => {
//                 event()
//                 timer = null
//             }, time);
//         }
//     }
// }


//原型  prototype  => 函数所特有的
//原型链 _proto_ => [[prototype]]

</script>

<style lang="less" scoped>
.forming {
    height: 100vh;
}

input {
    width: 200px;
}
</style>