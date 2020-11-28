const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        console.log(resolve, reject)
        setTimeout(() => {
            const rand = Math.random();
            if (rand < 0.3) {
                reject()
            }
            else {
                resolve();
            }
        }, 3000);
    })
}

fakeRequest().then(()=> {
    console.log('success!')
}).catch(() => {
    console.log('fail')
})