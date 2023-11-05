<template>
    <!-- <div class="container">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
    </div> -->
    <div class="main">
        <el-button type="primary" @click="kbShow = !kbShow">按钮</el-button>
        <div v-show="kbShow" class="kboard" @mousedown="arrowMove">

        </div>
    </div>
</template>

<script setup lang="ts">
let kbShow = ref(false)
// setTimeout(() => {
//     var kboard: any = document.querySelector('.kboard');
//     var x: any, y: any;
//     kboard.onmousedown = function (e: any) {
//         console.log(e, kboard);

//         x = e.pageX - kboard.offsetLeft;
//         y = e.pageY - kboard.offsetTop;

//         document.onmousemove = function (e) {
//             kboard.style.left = e.pageX - x + "px";
//             kboard.style.top = e.pageY - y + "px";
//         };

//         document.onmouseup = function () {
//             document.onmousemove = null;
//             document.onmouseup = null;
//         }
//     };
// }, 0);

const arrowMove = (e: any) => {
    let x = e.pageX - e.currentTarget.offsetLeft;
    let y = e.pageY - e.currentTarget.offsetTop;

    // 元素大小
    let elW = e.currentTarget.offsetWidth
    let elH = e.currentTarget.offsetHeight
    let el = e.currentTarget
    document.onmousemove = function (e: any) {
        let rigthX = window.innerWidth - e.pageX + x - elW
        let bottomY = window.innerHeight - e.pageY + y - elH
        if (rigthX <= 0) {
            el.style.right = 0;
        } else {
            el.style.left = (e.pageX - x >= 0 ? e.pageX - x : 0) + "px";
        }
        if (bottomY <= 0) {
            el.style.bottom = 0;
        } else {
            el.style.top = (e.pageY - y >= 0 ? e.pageY - y : 0) + "px";
        }
    };

    document.onmouseup = function () {
        document.onmousemove = null;
        document.onmouseup = null;
    }


    // // 元素大小
    // let elW = e.currentTarget.offsetWidth
    // let elH = e.currentTarget.offsetHeight
    // // 元素位置
    // let elL = e.currentTarget.offsetLeft
    // let elT = e.currentTarget.offsetTop
    // // 鼠标位置
    // let x = e.clientX
    // let y = e.clientY
    // // 窗口大小
    // let w = window.innerWidth
    // let h = window.innerHeight
    // // 鼠标到元素左边距离
    // let moveX = x - elL
    // let moveY = y - elT
    // let el = e.currentTarget
    // document.onmousemove = function (e) {
    //     el.style.right = w - (e.clientX - moveX) - elW + 'px'
    //     el.style.bottom = h - (e.clientY - moveY) - elH + 'px'
    // }
    // document.onmouseup = function () {
    //     document.onmousemove = null
    //     document.onmouseup = null
    // }
}

onMounted(() => {
})
onUnmounted(() => {
})
</script>

<style lang="less" scoped>
// .container{
//     display: flex;
//     flex-wrap: wrap;
// }
// .item{
//     flex-grow: 1;
//     flex-basis: 200px;
//     height: 200px;
//     margin: 10px;
//     background-color: orange;
// }

.main {
    width: 100vw;
    height: 100vh;
}

.kboard {
    width: 200px;
    height: 100px;
    background-color: red;
    position: absolute;
}
</style>