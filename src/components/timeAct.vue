<template>
    <div class="clock">
        <div class="hr">
            <div class="strip">
                <div class="number">0</div>
                <div class="number">1</div>
                <div class="number">2</div>
            </div>
            <div class="strip">
                <div class="number">0</div>
                <div class="number">1</div>
                <div class="number">2</div>
                <div class="number">3</div>
                <div class="number">4</div>
                <div class="number">5</div>
                <div class="number">6</div>
                <div class="number">7</div>
                <div class="number">8</div>
                <div class="number">9</div>
            </div>
        </div>
        <div class="min">
            <div class="strip">
                <div class="number">0</div>
                <div class="number">1</div>
                <div class="number">2</div>
                <div class="number">3</div>
                <div class="number">4</div>
                <div class="number">5</div>
            </div>
            <div class="strip">
                <div class="number">0</div>
                <div class="number">1</div>
                <div class="number">2</div>
                <div class="number">3</div>
                <div class="number">4</div>
                <div class="number">5</div>
                <div class="number">6</div>
                <div class="number">7</div>
                <div class="number">8</div>
                <div class="number">9</div>
            </div>
        </div>
        <div class="sec">
            <div class="strip">
                <div class="number">0</div>
                <div class="number">1</div>
                <div class="number">2</div>
                <div class="number">3</div>
                <div class="number">4</div>
                <div class="number">5</div>
            </div>
            <div class="strip">
                <div class="number">0</div>
                <div class="number">1</div>
                <div class="number">2</div>
                <div class="number">3</div>
                <div class="number">4</div>
                <div class="number">5</div>
                <div class="number">6</div>
                <div class="number">7</div>
                <div class="number">8</div>
                <div class="number">9</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

let strips: any = '';
const numberSize = "4"; // in rem

var lastTime = new Array(-1, -1, -1)

// highlight number i on strip s for 1 second
const highlight = (strip: any, d: any) => {

    // console.log(strip, d, 'dddd');
    strips = document.querySelectorAll(".strip");
    strips[strip]
        .querySelector(`.number:nth-of-type(${d + 1})`)
        .classList.add("pop");
    setTimeout(() => {
        // strips[strip]
        //     .querySelector(`.number:nth-of-type(${d + 1})`)
        //     .classList.remove("pop");
        const allnumel = document.querySelectorAll('.number')
        allnumel.forEach(element => {
            try {
                element.classList.remove("pop");
            } catch (error) {
                
            }
        });
    }, 950); // causes ticking
}

const stripSlider = (strip: any, id: any, number: any) => {
    strips = document.querySelectorAll(".strip");
    let d1 = Math.floor(number / 10);
    let d2 = number % 10;
    if (lastTime[id] == -1 || lastTime[id] != number) {
        strips[strip].style.transform = `translateY(${d1 * -numberSize}rem)`;
        strips[strip + 1].style.transform = `translateY(${d2 * -numberSize}rem)`;
        lastTime[id] = number;
    }
    highlight(strip, d1);
    highlight(strip + 1, d2);
}

const updateClock = () => {
    // get new time
    const time = new Date();
    // get h,m,s
    const hours = time.getHours();
    const mins = time.getMinutes();
    const secs = time.getSeconds();
    // slide strips
    stripSlider(0, 0, hours);
    stripSlider(2, 1, mins);
    stripSlider(4, 2, secs);
}
var time: any
onMounted(() => {
    time = setInterval(updateClock, 1000);
    // updateClock();
})
onUnmounted(() => {
    clearInterval(time)
})
</script>

<style lang="less" scoped>
.hr,
.min,
.sec {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
    grid-row: 1/2;
    align-items: start;
}

.number {
    // padding: 0.5em;
    width: 4rem;
    height: 4rem;
    display: grid;
    place-items: center;
    color: #f9fbfd;
    transition: all 500ms 100ms ease;
    border-radius: 50%;
}

.number.pop {
    color: #3e6ccb;
    font-weight: bold;
    transform: scale(1.3);
    background-color: #dfe6f6;
    box-shadow: -10px -10px 20px -5px #f9fbfd, 10px 10px 20px #a9bee8;
}

.strip {
    transition: transform 500ms ease-in-out;
    border-radius: 8px;
    background-color: #dfe6f6;
    box-shadow: -10px -10px 20px -5px #f9fbfd, 10px 10px 20px #a9bee8;
}

.clock {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5rem;
    height: 4rem;
    position: relative;
    padding: 0 4rem;
}
</style>