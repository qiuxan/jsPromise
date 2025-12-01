function fullFillAndReject(name, onFulfilled, onRejected) {
    console.log(
        `Hello, ${name}! I want to discuss something important with you. You could either 
        fulfill my request by agreeing to help me with my project, or reject it if you're too busy.
        `
    );

    setTimeout(() => {
        if (Math.random() <= 0.3) {
            onFulfilled(`${name}, I will help you!`);
        } else {
            onRejected(`${name}, I am very busy, Maybe next time!`);
        }
    }, 2000);
}

// Callback hell: deeply nested callbacks for each person
fullFillAndReject(
    "Alice",
    (message) => {
        console.log("Fulfilled:", { message });
    },
    (message) => {
        console.log("Rejected:", { message });
        fullFillAndReject(
            "Bob",
            (message) => {
                console.log("Fulfilled:", { message });
            },
            (message) => {
                console.log("Rejected:", { message });
                fullFillAndReject(
                    "Charlie",
                    (message) => {
                        console.log("Fulfilled:", { message });
                    },
                    (message) => {
                        console.log("Rejected:", { message });
                        fullFillAndReject(
                            "Diana",
                            (message) => {
                                console.log("Fulfilled:", { message });
                            },
                            (message) => {
                                console.log("Rejected:", { message });
                                fullFillAndReject(
                                    "Eve",
                                    (message) => {
                                        console.log("Fulfilled:", { message });
                                    },
                                    (message) => {
                                        console.log("Rejected:", { message });
                                        console.log("No one was able to help with the project.");
                                    }
                                );
                            }
                        );
                    }
                );
            }
        );
    }
);