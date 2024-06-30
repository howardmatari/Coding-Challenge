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

// Output: ['Mouse']
console.log(addItem('Mouse'));  
// Output: ['Mouse', 'LCD']
console.log(addItem('LCD')); 
// Output: ['Mouse', 'LCD', 'Disk']
console.log(addItem('Disk')); 
