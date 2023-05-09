const sleep = (fn, ms) => new Promise((resolve, reject) => {
    setTimeout(() => {
        fn(resolve,reject)
    }, ms)
})

export default sleep