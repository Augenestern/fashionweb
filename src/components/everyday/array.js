function myPromise(excutor) {
    let self = this
    self.status = 'pendding';
    self.value = null;
    self.reson = null;

    self.onFulfilledCallbacks = []
    self.onRejectedCallbacks = []

    function resolve(value) {
        if (self.status === 'pendding') {
            self.value = value;
            self.status = 'fulfilled'
            self.onFulfilledCallbacks.forEach(item => item(value));
        }
    }

    function reject(reason) {
        if (self.status === 'pendding') {
            self.value = reason;
            self.status = 'rejexted'
            self.onRejectedCallbacks.forEach(item => item(reason));
        }
    }

    try {
        excutor(resolve, reject)
    } catch {
        reject(err)
    }
}

myPromise.prototype.then = function (onFulfilled, onRejected) {
    console.log('1111');
    //容错处理
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : function (data) { resolve(data) }
    onRejected = typeof onRejected === 'function' ? onRejected : function (err) { throw err }

    //使promise支持异步
    let self = this;
    if (self.status === 'pendding') {
        console.log('2222');
        self.onFulfilledCallbacks.push(onFulfilled)
        self.onRejectedCallbacks.push(onRejected)
    }
}

let demo = new myPromise((resolve, reject) => {
    // console.log(1);
    setTimeout(() => {
        resolve(1)
    }, 1000)
})

demo.then(data => console.log(data))