# Node.js Asynchronous Server Initialization Race Condition
This repository demonstrates a common issue in Node.js applications: race conditions arising from the asynchronous nature of server initialization using the `http.createServer` method.

## Problem
The `server.listen()` method is asynchronous. Code following `server.listen()` might execute before the server is fully listening on the specified port. This can result in the server being unable to handle requests correctly or leading to unpredictable behavior.

## Solution
The solution involves using the callback function provided to `server.listen()` to ensure that the rest of the application logic executes only after the server is ready to accept requests. This approach guarantees that subsequent operations will not interfere with the server's initialization process.

## How to run
1. Clone the repository
2. Navigate to the repository's root directory
3. Run `node bug.js` to see the problematic behavior
4. Run `node bugSolution.js` to see the solution that avoids the race condition.