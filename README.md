# React useEffect Hook Infinite Loop Bug

This repository demonstrates a common React bug involving the `useEffect` hook running more often than expected, even with dependencies specified.  The issue stems from a misunderstanding of how the dependency array in `useEffect` works and can lead to performance problems and unexpected behavior.

## Bug Description

The provided `bug.js` file contains a simple component that updates its state. However, the `useEffect` hook inside the component logs a message to the console on every render. This is because although a dependency array `[count]` is specified, the function's closure contains the count variable, which keeps changing, therefore useEffect still runs every render, creating an unwanted side-effect. 

## Solution

The `bugSolution.js` file demonstrates the correct implementation.  The solution fixes this by correctly managing state updates, preventing unnecessary re-renders and making useEffect correctly run only when the `count` variable changes.