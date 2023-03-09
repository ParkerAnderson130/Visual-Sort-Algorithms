# Visual-Sort-Algorithms

This is a raw Javascript program that creates div "nodes" and sorts them visually using repainting and sleep functions.

## How does it work?

1. main.js creates randomly sized nodes, renders them in the order they were generated, and add each height to an array
2. The user selects an algorithm, and an instance of the matching class is instantiated
3. The sort method is called and the function sorts the nodes array; each time a value is changed in the array the repaint function renders the new order on the window
