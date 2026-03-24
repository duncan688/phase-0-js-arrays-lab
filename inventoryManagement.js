// Write your code here
// Task 2: Create the products array
let products = ["laptop", "phone", "headphones", "monitor"];

// Task 3: Access and log the first product
function logFirstProduct() {
  console.log(products[0]);
}

// Task 4: Add a new product to the array
function addProduct(name) {
  products.push(name);
}

// Task 5: Update a product name at a specific index
function updateProductName(index, newName) {
  products[index] = newName;
}

// Task 6: Remove the last product from the array
function removeLastProduct() {
  products.pop();
}


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
