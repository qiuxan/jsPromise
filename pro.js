const pro  =  new Promise((resolve, reject)=>{
    console.log('start of the process');
    const duration = Math.floor(Math.random() * 5000) + 1000; // Random duration between 1s and 5s
    setTimeout(() => {
        if(Math.random() < 0.5){
            console.log('Process succeeded');
            resolve(duration); // Promise status will be 'fulfilled' from 'pending'
        }else{
            console.log('Process failed');
            reject("failed"); // Promise status will be 'rejected' from 'pending'
        }

    }, duration);
});
console.log(pro);

pro.then(
    data=>{
        console.log('Process completed in', data, 'ms');
    }, 
    err=>{
        console.log('Error:', err);
    }
);