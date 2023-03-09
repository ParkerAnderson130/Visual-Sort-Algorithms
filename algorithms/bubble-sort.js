/*
* Bubble sort implementation in JavaScript for visual sort
*/
import { Sort } from './sort.js';

export class Bubble extends Sort {
    constructor(nodes) {
        super(nodes);
    } // constructor

    async sort() {
        for (var i = 0; i < this.nodes.length; i++) {
            for (var j = 0; j < this.nodes.length - i - 1; j++) {
                if (this.nodes[j] > this.nodes[j + 1]) {
                    var temp = this.nodes[j];
                    this.nodes[j] = this.nodes[j + 1];
                    this.nodes[j + 1] = temp;
                    this.repaint();
                    await this.sleep(50);
                } // if
            } // for
        } // for
    } // sort
} // Bubble