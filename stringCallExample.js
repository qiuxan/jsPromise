new Promise((resolve, reject) => {
    reject(new Error("Something went wrong"));
}).then(null, (error) => {
    console.log("Caught error:", {error});
});