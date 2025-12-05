new Promise((resolve, reject) => {
    reject(new Error("Something went wrong"));
}).catch(error => {
    console.error("Caught an error:", error.message);
});