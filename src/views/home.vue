<template>
    <div class="waiBox" ref="cont">
        <div class="topBox">
            <timeAct class="timeAct"></timeAct>
            <div class="container">
                <span class="text hcqStyle6">Fashion Reading</span>
                <!-- <span>每日一问</span> -->
            </div>
        </div>
        <div class="bottomBox">
            <!-- <svg class="waves" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g class="parallax">
                    <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7"></use>
                    <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)"></use>
                    <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)"></use>
                    <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff"></use>
                </g>
            </svg> -->
            <div class="bottom-main">
                <div class="bottom-item"></div>
                <span class="span1">文学经典</span>
                <div class="bottom-item"></div>
                <span class="span2">时尚杂志</span>
                <div class="bottom-item"></div>
                <span class="span3">科技科普</span>
                <div class="bottom-item"></div>
                <span class="span4">课程教材</span>
                <div class="bottom-item"></div>
                <span class="span5">儿童读物</span>
                <div class="bottom-item"></div>
                <span class="span6">精选小说</span>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import timeAct from "@/components/timeAct.vue";
let cont: any = ref('')
const scroll = async (e: any) => {
    let scrollTop = e.target.scrollTop; //滑入屏幕滚动条滚动时，距离顶部的距离
    let windowHeitht = e.target.clientHeight; //能看到的页面的高度
    let scrollHeight = e.target.scrollHeight; //监控的整个div的高度（包括现在看到的和上下隐藏起来看不到的）
    let total = scrollTop + windowHeitht
    console.log(scrollTop, windowHeitht, scrollHeight, total, scrollTop / windowHeitht);
    const yy: any = document.getElementsByClassName('bottom-main')[0]
    if (scrollTop / windowHeitht > 0.35) {
        yy.style.backgroundColor = '#1b1a1a'
    }
    else if (scrollTop / windowHeitht > 0.3) {
        yy.style.backgroundColor = '#232323'
    }
    else if (scrollTop / windowHeitht > 0.25) {
        yy.style.backgroundColor = '#707070'
    }
    else if (scrollTop / windowHeitht > 0.2) {
        yy.style.backgroundColor = '#898989'
    }
    else if (scrollTop / windowHeitht > 0.15) {
        yy.style.backgroundColor = '#a5a5a5'
    }
    else if (scrollTop / windowHeitht > 0.1) {
        yy.style.backgroundColor = '#c0bfbf'
    } else if (scrollTop / windowHeitht > 0.05) {
        yy.style.backgroundColor = '#dcdcdc'
    } else {
        yy.style.backgroundColor = '#fff'
    }
}
onMounted(() => {
    cont.value.addEventListener('scroll', scroll)
})
onUnmounted(() => {
})
</script>

<style lang="less" scoped>
.waiBox {
    width: 100vw;
    height: 100vh;
    position: relative;
    // background: linear-gradient(-45deg, #c4d2ef, #dfe6f6);
    // background-color: #cacaca;
    background-color: #fff;
    // display: flex;
    overflow-x: hidden;
    // place-items: center;
}

.topBox {
    height: 40%;
    width: 100%;
    background: linear-gradient(-45deg, #c4d2ef, #dfe6f6);
    position: sticky;
    top: 0;
}

.bottomBox {
    position: relative;
    // animation: items 3s;
}

.timeAct {
    position: absolute;
    top: 0%;
    transform: scale(0.4);
    left: -240px;
    view-transition-name: timeAct;
}

/deep/.number {
    color: rgb(103, 103, 103);
}

/deep/.number.pop {
    font-size: 24px;
}

.bottom-main {
    width: 100%;
    height: 100vh;
    background-color: #fff;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    transition-duration: 1s;
}

.bottom-item {
    height: 100px;
    // border: 1px solid orangered;
    margin-top: 10px;
    background-color: #D1DCF2;
    // border-left: 10px solid rgb(44, 212, 250);
    // border-radius: 0px 0px 10px 10px;
    transform: scale(0.9);
    border-radius: 2px;
    position: relative;
}

@keyframes items {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.bottom-item:nth-child(1) {
    background-image: url('../assets/图书馆.jpg');
    background-size: cover;
}
.bottom-item:nth-child(3) {
    background-image: url('../assets/zazhi.jpg');
    background-size: cover;
}
.bottom-item:nth-child(5) {
    background-image: url('../assets/yhy.jpg');
    background-size: cover;
    background-position: center;
}
.bottom-item:nth-child(7) {
    background-image: url('../assets/kcjc2.jpg');
    background-size: cover;
    background-position:bottom;
}
.bottom-item:nth-child(9) {
    background-image: url('../assets/etdw.png');
    background-size: cover;
    background-position:0px -100px;
}
.bottom-item:nth-child(11) {
    background-image: url('../assets/jxxs.png');
    background-size: cover;
    background-position:bottom;
}

.bottom-item:hover {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(6px);
    filter: blur(2px);
}

.bottom-main span {
    position: absolute;
    pointer-events: none;
    font-weight: 900;
    font-size: 26px;
    font-family: STXingkai;
    text-shadow: 0px 1px 0px #ffffff, 0px 2px 0px #f4f3f3, 0px 3px 0px #dbdada, 0px 4px 0px #cccccc, 0px 5px 0px #b8b8b8, 0px 6px 0px #444444, 0px 7px 0px #333333, 0px 8px 7px #969696 // text-shadow: 0px 1px 0px #999999, 0px 2px 0px #888888, 0px 3px 0px #777777, 0px 4px 0px #666666, 0px 5px 0px #555555, 0px 6px 0px #444444, 0px 7px 0px #333333, 0px 8px 7px #090a5b
}

.span1 {
    top: 70px;
    left: 4.7%;
}

// .span1:hover {
//     text-shadow: 0px 1px 0px #ffffff, 0px 2px 0px #f4f3f3, 0px 3px 0px #dbdada, 0px 4px 0px #cccccc, 0px 5px 0px #b8b8b8, 0px 6px 0px #444444, 0px 7px 0px #333333, 0px 8px 7px #969696
// }

.span2 {
    top: 70px;
    left: 21.7%;
}

.span3 {
    top: 70px;
    left: 38.5%;
}

.span4 {
    top: 70px;
    left: 55.3%;
}

.span5 {
    top: 70px;
    left: 71.9%;
}

.span6 {
    top: 70px;
    left: 88.7%;
}

//文字动效
.hcqStyle6 {
    letter-spacing: 0;
    text-shadow: 0px 1px 0px #999999, 0px 2px 0px #888888, 0px 3px 0px #777777, 0px 4px 0px #666666, 0px 5px 0px #555555, 0px 6px 0px #444444, 0px 7px 0px #333333, 0px 8px 7px #090a5b
}

.container {
    height: 40%;
    width: 100%;
    //   margin-top: 50px;
    text-align: center;
    background: linear-gradient(-45deg, #c4d2ef, #dfe6f6);
    //   background-color: #cacaca;
    //   filter: contrast(30);
}

.text {
    font-size: 100px;
    // font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    //、sans-serif、cursive、fantasy、monospace
    font-family: STXingkai;
    // font-family: STKaiti;
    // font-weight: 600;
    letter-spacing: -40px;
    margin-left: 200px;
    color: #bfd2f8;
    animation: move-letter 1s linear forwards; //forwards当动画完成后，保持最后一帧的状态
}

@keyframes move-letter {
    0% {
        opacity: 0;
        letter-spacing: -40px;
        // filter: blur(10px);
    }

    25% {
        opacity: 1;
    }

    50% {
        // filter: blur(5px);
    }

    100% {
        letter-spacing: 20px;
        // filter: blur(0px);
    }
}

// .timeAct::view-transition-old(timeAct),
// .timeAct::view-transition-new(timeAct){
//     animation-duration: 5s;
// }
// .waves::view-transition-old(waves),
// .waves::view-transition-new(waves){
//     animation-duration: 5s;
// }

//svg
.waves {
    position: absolute;
    top: 0;
    transform: translateY(-100%);
    width: 100%;
    height: 15vh;
    /*Fix for safari gap*/
    min-height: 100px;
    max-height: 150px;
    view-transition-name: waves;
}

.parallax>use {
    animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;
}

.parallax>use:nth-child(1) {
    animation-delay: -5s;
    animation-duration: 20s;
}

.parallax>use:nth-child(2) {
    animation-delay: -10s;
    animation-duration: 5s;
}

.parallax>use:nth-child(3) {
    animation-delay: -15s;
    animation-duration: 20s;
}

.parallax>use:nth-child(4) {
    animation-delay: 0s;
    animation-duration: 10s;
}

@keyframes move-forever {
    0% {
        transform: translate3d(-90px, 0, 0);
    }

    100% {
        transform: translate3d(85px, 0, 0);
    }
}

/*Shrinking for mobile*/
@media (max-width: 768px) {
    .waves {
        height: 60px;
        min-height: 40px;
    }
}

.changeAct {
    color: #fff;
    font-size: 14px;
    margin-top: 20px;
    position: relative;
    right: -25%;
    transition-duration: 1s;
}</style>