/**
 * Delays execution for a specified number of milliseconds.
 * @param {number} ms - The number of milliseconds to delay.
 * @returns {Promise<void>} A promise that resolves after the specified delay.
*/

function delay(duration){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        }, duration);
    });
}

delay(1000).then(()=>{
    console.log('Executed after 1 second delay');
});