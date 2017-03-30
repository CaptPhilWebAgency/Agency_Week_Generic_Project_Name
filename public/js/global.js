// homepage

<<<<<<< HEAD
console.log('sup');
=======
getProducts();

getCategories()

displayFilteredCat()


function getProducts() {
        fetch('/api/products')
            .then(response => response.json())
            .then(data => {
                products = data
                // console.log(products.image.url)
                loopProducts(products);
            });
        function loopProducts(products) {
        products.forEach(createProducts => {
            console.log(createProducts.image.url)
        }) 
        
        }
    }

function getCategories() {
    fetch('/api/categories')
        .then(response => response.json())
        .then(data => {
            categories = data
            loopCategories(categories);
        });
}

function loopCategories(categories) {
    categories.forEach(createCategory => {

        // console.log(createCategory)
    }) 
        
}

function displayFilteredCat() {
    fetch('/api/categories/1')
        .then(response => response.json())
        .then(data => {
            getCat = data
            // console.log(getCat.name)
        });
}

>>>>>>> 8e36dfef63d3520f9588c4e5cffddbcff5216e60
