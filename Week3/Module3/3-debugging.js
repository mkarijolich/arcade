// workshop: https://learn.fullstackacademy.com/workshop/60940fadc0f2710004827106/landing

// Group Questions
// What is debugging?
// troubleshooting your code when there is errors
// making sure your code is doing what you want it to do
// ways we have debugged: fixing syntax errors, console.log, testing

function printing() {
    // debugger // keyword used to start the debugger --> better for browser
    for (let i = 10; i >= 1; i--) {
        console.log("i is: ", i)
        
        if (i === 7) { //setting a breakpoint --> better for editor
            break // break the loop; can be used to terminate for loop early
        }

    }
}

printing() // remember to invoke your function