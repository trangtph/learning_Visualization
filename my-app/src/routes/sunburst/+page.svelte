<script>
    import { onMount } from "svelte";
    import * as d3 from 'd3';

    onMount(async function() { 
  let csv = await d3.csv('https://raw.githubusercontent.com/trangtph/Programming/main/Processed_data/hot_product_all.csv');
  
  let data = buildHierarchy(csv);

// Take a 2-column CSV and transform it into a hierarchical structure suitable
 // for a partition layout. The first column is a sequence of step names, from
 // root to leaf, separated by hyphens. The second column is a count of how 
 // often that sequence occurred.
 function buildHierarchy(csv) {
   var root = {"name": "root", "children": [], id: 'ROOT'};
   
   for (var i = 0; i < csv.length; i++) {
     var sequence = csv[i][0];
     var size = +csv[i][1];
     
     if (isNaN(size)) { // e.g. if this is a header row
       continue;
     }
     
     var parts = sequence.split("-");
     var currentNode = root;
     for (var j = 0; j < parts.length; j++) {
       var children = currentNode["children"];
       var nodeName = parts[j];
       var childNode;
       
       if (j + 1 < parts.length) {
         // Not yet at the end of the sequence; move down the tree.
         var foundChild = false;

         for (var k = 0; k < children.length; k++) {
           if (children[k]["name"] == nodeName) {
             childNode = children[k];
             foundChild = true;
             break;
           }
         }
         
         // If we don't already have a child node for this branch, create it.
         if (!foundChild) {
           childNode = { "name": nodeName, "children": [], id: create_id() };
           children.push(childNode);
         }

         currentNode = childNode;

       } else {
         // Reached the end of the sequence; create a leaf node.
         childNode = {"name": nodeName, "value": size, id: create_id() };
         children.push(childNode);
       }
     }
   }
     
   return root;
 };

// Retrieved from https://gist.github.com/gordonbrander/2230317
function create_id() {
  return '_' + Math.random().toString(36).substr(2, 9);
};


// END DATA MANIPULATION

// log out deep clone of data for review
let data = buildHierarchy(csv);
console.log(data);
    
    });
</script>