// homepage

getUsers();

// First AJAX request that gets users
function getUsers() {
        // Fetch the raw user JSON string data
        // var token = sessionStorage.getItem('token');
        fetch('')
            .then(response => response.json())
            .then(data => {
                products = data
                loopUsers(products);
            });
    }

    function loopUsers(products) {
        products.forEach(createProducts);
        console.log(createProducts)
}
    // document.querySelector('#userListInput').innerHTML += userList;

