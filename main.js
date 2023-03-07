/*
* Visual sort that uses array nodes to set random heights and
* repaint the elements once sorted
*/
class Sort {
  nodes = [];

  constructor(num) {
    var nodeContainer = document.createElement("div");
    nodeContainer.className = "node-container";
    document.body.appendChild(nodeContainer);

    for (var i = 0; i < num; i++) {
      var height = Math.floor(Math.random() * 10) + 1; //Sets a random height
      this.nodes.push(height); //Apends height to array
      var node = document.createElement("div"); 
      node.className = "node";
      node.style.height = `${height * 25}px`; //Creates div for index and sets height
      nodeContainer.appendChild(node);
    } // for
  } // constructor
  
  repaint = () => {
    for (var i = 1; i <= nodes.length; i++) {
      var x = document.querySelector(`.node-container div:nth-of-type(${i})`);
      x.style.height = `${nodes[i - 1] * 25}px`; 
    } // for
  } // repaint

  sort() { 
    throw new Error("Must be a non-abstract implementation")
  } // sort

} // Sort

