// homepage

getProducts();

getCategories()

function getProducts() {
        fetch('/api/products')
            .then(response => response.json())
            .then(data => {
                products = data
                loopProducts(products);
            });
    }

    function loopProducts(products) {
        products.forEach(createProducts => {
            console.log(createProducts)
        }) 
        
    }

function getCategories() {
    fetch('/api/categories')
        .then(response => response.json())
        .then(data => {
            categories = data
            console.log(categories)
            // loopProducts(categories);
        });
}
   
    // document.querySelector('#userListInput').innerHTML += userList;

