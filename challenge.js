// testing this code
function createList() {
    let list = []; 

return function(item) {
        if (item !== undefined) { 
            // Add the item to the list
            list.push(item); 
        }
        // Return the updated list
        return list; 
   };
}

const addItem = createList();


console.log(addItem('Mouse'));  
//console.log(addItem('LCD')); 

