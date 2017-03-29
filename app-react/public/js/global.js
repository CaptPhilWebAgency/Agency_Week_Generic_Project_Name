// homepage

getUsers();

function getUsers() {
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
    // document.querySelector('#userListInput').innerHTML += userList;

