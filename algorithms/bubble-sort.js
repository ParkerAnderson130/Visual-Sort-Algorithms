/*
* Bubble sort implementation in JavaScript for visual sort
*/

import { Sort } from '../main.js';

class Bubble extends Sort {
    constructor(num) {
        super(num); 
    } // constructor
    
    sort() {
        for (var i = 0; i < nodes.length; i++) {
            for (var j = 0; j < nodes.length-i; j++) {
                if (nodes[i] > nodes[i+1]) {
                    temp = nodes[i];
                    nodes[i] = nodes[i+1];
                    nodes[i+1] = temp;
                } // if
            } // for
        } // for
    } // sort
} // Bubble