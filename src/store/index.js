import { inject, reactive } from 'vuex'

class Store {
    //在js中，constructor函数是类的构造函数。在创建类的新实例时，会自动调用constructor函数。constructor函数可以用来初始化类的实例对象。
    constructor(options) {
        this.state = reactive(options.state)

        //getters
        let getters = options.getters;
        this.getters = {}
        Object.keys(getters).forEach(item => {
            Object.defineProperty(this.getters, item, {
                get: () => {
                    return getters[item](this.state)
                }
            })
        })

        //mutations
        let mutations = options.mutations;
        this.mutations = {}
        Object.keys(mutations).forEach(item=>{
            this.mutations[item]=(data)=>{
                mutations[item](this.state,data)
            }
        })
    }

    commit(key,value){
        this.mutations[key](value)
    }
    //app插件机制，当执行use，检查对象中是否有install，如果有，先去执行。
    install(app) {
        app.config.globalProperties.$store = this;
        app.provide('store', this)
    }
}

export function createStore(options) {
    return new Store(options)
}

export function useStore() {
    return inject('store')
}