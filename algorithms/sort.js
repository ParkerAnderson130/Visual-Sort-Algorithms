/*
* Visual sort that uses array nodes to set random heights and
* repaint the elements once sorted
*/
export class Sort {
    nodes = [];

    constructor(nodes) {
        this.nodes = nodes;
    } // constructor

    repaint = () => {
        for (var i = 1; i <= this.nodes.length; i++) {
            var x = document.querySelector(`.node-container div:nth-of-type(${i})`);
            x.style.height = `${this.nodes[i - 1] * 25}px`;
        } // for
    } // repaint

    sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    sort() {
        throw new Error("Must be a non-abstract implementation")
    } // sort

} // Sort