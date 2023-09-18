<template>
    <div class="waiBox">
        <timeAct class="timeAct"></timeAct>
        <div class="formBox">
            <div style="font-size: 70px; font-weight: 900;color:#3e6ccb;text-shadow: 5px 5px 5px;">{{ l0gOrReg }}</div>
            <div class="inputBox btnLoginHover" style="margin-top: 15%;">
                <input style="position: relative;" v-model="userlist.username" class="aBox-input" type="text" required
                    @keydown="disableKouge">
                <van-icon class="iconHover" v-if="userlist.username != ''" @click="clearData"
                    style="color: #f9fbfd; position: absolute; right: 16px; font-size: 18px; top:17px" name="close" />
                <span>Account</span>
            </div>
            <div class="inputBox btnLoginHover">
                <input style="position: relative;" v-model="userlist.password" class="aBox-input" :type="changeType"
                    required>
                <van-icon class="iconHover" @click="gaiType" v-if="changeType == 'text'"
                    style=" color: #f9fbfd;position: absolute; right: 16px; font-size: 20px; top:15px" name="eye-o" />
                <van-icon class="iconHover" @click="gaiType" v-else
                    style="color: #f9fbfd;position: absolute; right: 16px; font-size: 20px; top:17px" name="closed-eye" />
                <span>Password</span>
            </div>
            <div v-if="!loginAndRegSign" class="inputBox btnLoginHover">
                <input style="position: relative;" v-model="password1" class="aBox-input" :type="changeType" required>
                <van-icon class="iconHover" @click="gaiType" v-if="changeType == 'text'"
                    style=" color: #f9fbfd;position: absolute; right: 16px; font-size: 20px; top:15px" name="eye-o" />
                <van-icon class="iconHover" @click="gaiType" v-else
                    style="color: #f9fbfd;position: absolute; right: 16px; font-size: 20px; top:17px" name="closed-eye" />
                <span>CheckPassword</span>
            </div>
            <button v-if="loginAndRegSign" @click="btnLogin" class="btnLogin btnLoginHover">{{ btnText }}</button>
            <button v-else @click="btnRegister" class="btnLogin btnLoginHover">{{ btnText }}</button>
            <span class="changeAct spanHover" @click="loginAndReg">{{ spanText }}</span>
        </div>
        <svg class="waves" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g class="parallax">
                <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7"></use>
                <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)"></use>
                <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)"></use>
                <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff"></use>
            </g>
        </svg>
    </div>
</template>

<script setup lang="ts">
import { loginAPI } from '@/api/useApi/login.ts'
import timeAct from "@/components/timeAct.vue";
const router = new (useRouter as any)
let userlist: any = reactive({
    username: '',
    password: ''
})
let password1: any = ref('')
let btnText = ref('登 录')
let l0gOrReg = ref('Login')
let changeType = ref('password')
let spanText = ref('没有账号，去注册 ->')
let clearData = () => {
    userlist.username = ''
    userlist.password = ''
}
let loginAndRegSign = ref(true)
let loginAndReg = () => {
    password1.value = ''
    userlist.username = ''
    userlist.password = ''
    if (loginAndRegSign.value) {
        loginAndRegSign.value = false
        btnText.value = '注册并登录'
        l0gOrReg.value = 'Register'
        spanText.value = '已有账号，去登录 ->'
    } else {
        loginAndRegSign.value = true
        btnText.value = '登 录'
        l0gOrReg.value = 'Login'
        spanText.value = '没有账号，去注册 ->'
    }
}
let gaiType = () => {
    if (changeType.value == 'text') {
        changeType.value = 'password'
    } else {
        changeType.value = 'text'
    }
}

let disableKouge = (e: any) => {
    if (e.keyCode === 32) { //禁止空格键
        e.preventDefault(); //阻止默认事件
    }
}
let btnLogin = async () => {
    if (userlist.username != "" && userlist.password != "") {
        console.log(222);
        await loginAPI(JSON.parse(JSON.stringify(userlist))).then((res: any) => {
            if (res.code == 200) {
                localStorage.setItem('loginToken', res.data.token)
                // ElMessage({
                //     message: 'Congrats, this is a success message.',
                //     type: 'success',
                // })
                // router.push('/home')
                document.startViewTransition(() => {
                    router.push('/home')
                })
            } else {
                ElMessage.error('登录失败,请检查用户名或密码')
            }
        })
    }
}
let btnRegister = async () => {
    if (userlist.username != "" && userlist.password != "" && password1.value != "") {
        if (userlist.password != password1.value) {
            ElMessage.error('两次密码不一致.')
        } else {
            console.log(333);
        }
        // await loginAPI(JSON.parse(JSON.stringify(userlist))).then((res: any) => {
        //     if (res.code == 200) {
        //         console.log(res.data.token);
        //         localStorage.setItem('loginToken', res.data.token)
        //         // ElMessage({
        //         //     message: 'Congrats, this is a success message.',
        //         //     type: 'success',
        //         // })
        //         router.push('/home')
        //     } else {
        //         ElMessage.error('登录失败,请检查用户名或密码')
        //     }
        // })
    }
}
const loginChangeColor = () => {
    if (loginAndRegSign.value) {
        if (userlist.username != "" && userlist.password != "") {
            const changebtn: any = document.getElementsByClassName('btnLogin')[0]
            changebtn.style.color = "#6687c9"
        } else {
            const changebtn: any = document.getElementsByClassName('btnLogin')[0]
            changebtn.style.color = "#fff"
        }
    } else {
        if (userlist.username != "" && userlist.password != "" && password1.value != '') {
            const changebtn: any = document.getElementsByClassName('btnLogin')[0]
            changebtn.style.color = "#6687c9"
        } else {
            const changebtn: any = document.getElementsByClassName('btnLogin')[0]
            changebtn.style.color = "#fff"
        }
    }
}
var time: any
onMounted(() => {
    time = setInterval(() => {
        loginChangeColor()
    }, 500);
})
onUnmounted(() => {
    clearInterval(time)
})
</script>

<style lang="less" scoped>
.timeAct{
    view-transition-name:timeAct;
}
// .timeAct::view-transition-old(timeAct),
// .timeAct::view-transition-new(timeAct){
//     animation-duration: 5s;
// }
// .waves::view-transition-old(waves),
// .waves::view-transition-new(waves){
//     animation-duration: 5s;
// }

.waiBox {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(-45deg, #c4d2ef, #dfe6f6);
    // background-color: #000000;
    font-family: monospace;
    font-size: 2rem;
    min-height: 100vh;
    display: flex;
    overflow-y: hidden;
    place-items: center;
}

.formBox {
    // border: 1px solid red;
    width: 30vw;
    height: 50vh;
    margin-left: 6vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.btnLogin {
    width: 82%;
    padding: 10px;
    // border: 1px #C1B9B9 solid;
    border: none;
    background-color: #dfe6f6;
    box-shadow: -10px -10px 20px -5px #f9fbfd, 10px 10px 20px 3px #a9bee8;
    border-radius: 8px;
    // color: #6687c9;
    color: #fff;
    font-weight: 800;
    font-size: 26px;
    margin-top: 30px;
    text-shadow: 1px 1px 1px;
    transition-duration: 2s;
}

.btnLoginHover:hover {
    box-shadow: -10px -10px 20px 5px #f9fbfd, 10px 10px 20px 3px #a9bee8;
    transition-duration: 0s;
}

//input
.inputBox {
    position: relative;
    width: 83%;
    height: 15%;
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 20px;
    transition-duration: 2s;
}

.aBox-input {
    width: 93%;
    height: 2rem;
    padding: 10px;
    // border: 1px #C1B9B9 solid;
    border: none;
    background-color: #dfe6f6;
    box-shadow: -10px -10px 20px -5px #f9fbfd, 10px 10px 20px 3px #a9bee8;
    border-radius: 8px;
    color: #3e6ccb;
}

.inputBox span {
    position: absolute;
    left: 0px;
    top: 0px;
    padding: 11px;
    pointer-events: none; //pointer-events 属性用于设置元素是否对鼠标事件做出反应。 默认值:none 默认值:auto 继承:无 动画:no
    transition: 0.5s;
    color: #f9fbfd;
}

.inputBox input:valid~span,
.inputBox input:focus~span {
    // color: #FF7FAE;
    color: #3e6ccb;
    transform: translateX(10px) translateY(-10px);
    font-size: 0.8em;
    padding: 0px 10px;
    text-transform: uppercase;
}

.iconHover:hover {
    cursor: pointer;
}

.spanHover:hover {
    cursor: pointer;
    color: #3e6ccb;
}

//svg
.waves {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 15vh;
    /*Fix for safari gap*/
    min-height: 100px;
    max-height: 150px;
    view-transition-name:waves;
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
}
</style>