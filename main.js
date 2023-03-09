import { Bubble } from './algorithms/bubble-sort.js';
import { Selection } from './algorithms/selection-sort.js';

var nodes = [];
var createNodes = () => {
  for (var i = 0; i < 20; i++) {
    var height = Math.floor(Math.random() * 15) + 1; //Sets a random height
    nodes.push(height); //Apends height to array
    var node = document.createElement("div");
    node.className = "node";
    node.style.height = `${height * 25}px`; //Creates div for index and sets height
    nodeContainer.appendChild(node);
  } //for
} //createNodes

var nodeContainer = document.createElement("div");
nodeContainer.className = "node-container";
document.body.appendChild(nodeContainer);
createNodes();

document.getElementById("sort").addEventListener("click", () => {
  var algorithm = document.getElementById('sort-type').value;
  if (algorithm.localeCompare("bubble") === 0) {
    var test = new Bubble(nodes);
  } else if (algorithm.localeCompare("selection") === 0) {
    var test = new Selection(nodes);
  } //else if
  test.sort();
})

document.getElementById("reset").addEventListener("click", () => {
  while (nodeContainer.firstChild) {
    nodeContainer.removeChild(nodeContainer.lastChild)
  } //while
  nodes = [];
  createNodes();
})


