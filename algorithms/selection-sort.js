/*
* Bubble sort implementation in JavaScript for visual sort
*/
import { Sort } from './sort.js';

export class Selection extends Sort {
    constructor(nodes) {
        super(nodes);
    } // constructor

    async sort() {
        for (var i = 0; i < this.nodes.length; i++) {
            var min = i;

            for (var j = i+1; j < this.nodes.length; j++) {
                if (this.nodes[j] < this.nodes[min]) {
                    min = j;
                } //if
            } //for

            if (min != i) {
                var temp = this.nodes[i];
                this.nodes[i] = this.nodes[min];
                this.nodes[min] = temp;
                this.repaint();
                await this.sleep(50);
            }
        } //for
    }
} //Selection