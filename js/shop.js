// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'Cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
let cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let cart = [];

let total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    for (let i = 0; i <= products.length - 1; i++) {
        if (i === (id - 1)) {
            cartList.push(products[i])

        }
    }
    console.log(products[id - 1])
    console.log(cartList)

    document.getElementById("count_product").innerHTML = cartList.length;
    generateCart();
}

// Exercise 2
function cleanCart() {

    //Opción 1
    /* for (let i = 0; i <= cartList.length; i++) {
        cartList.shift()
        cartList.pop()
    }
    console.log(cartList) */

    //Opción 2
    /* while (cartList.length > 0) {
        cartList.pop();
      }
      console.log(cartList) */

    //Opción 3
    cart = []
    cartList = []
    printedCart = []
    printCart()
    console.log(cartList)
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    let totalCost = 0
    for (let i = 0; i < cartList.length; i++) {
        totalCost = totalCost + cartList[i].price
    }
    console.log(cartList)
    console.log(totalCost)
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

    for (let i = 0; i < cartList.length; i++) {
        const product = cartList[i];
        const selectedFromCartList = cart.find((element) => element.id === product.id);
        /* console.log(selectedFromCartList); */

        if (selectedFromCartList === undefined) {
            product.quantity = 1;
            product.subtotal = product.price
            cart.push(product);
        }
        else {
            selectedFromCartList.quantity++;
            selectedFromCartList.subtotal = selectedFromCartList.quantity * selectedFromCartList.price;
        }
    }
    /* console.log(cartList); */
    applyPromotionsCart()

}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === 1 && cart[i].quantity >= 3) {
            cart[i].subtotalWithDiscount = cart[i].quantity * 10
        }
        if (cart[i].id === 1 && cart[i].quantity < 3) {
            cart[i].subtotalWithDiscount = cart[i].subtotal
        }

        if (cart[i].id === 3 && cart[i].quantity >= 10) {
            cart[i].subtotalWithDiscount = (cart[i].quantity * cart[i].price) * 0.66
        }
        if (cart[i].id === 3 && cart[i].quantity < 10) {
            cart[i].subtotalWithDiscount = cart[i].subtotal
        }
    }
    /* console.log(cart); */

    /* for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === 1 && cart[i].quantity >= 3) {
            cart[i].subtotalWithDiscount = cart[i].quantity * 10
        }
        if (cart[i].id === 3 && cart[i].quantity >= 10) {
            cart[i].subtotalWithDiscount = (cart[i].quantity * cart[i].price) * 0.66
        }
    }
    console.log(cart); */
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom

    /* generateCart() */ //Esta función aquí era necesaria para antes de refactorizar
    let printedCart = []
    for (let i = 0; i < cart.length; i++) {
        printedCart.push(
            `<tr>
            <th>${cart[i].name}</th>
            <td>${cart[i].price}</td> 
            <td>${cart[i].quantity}</td>
            <td>${cart[i].subtotalWithDiscount ? cart[i].subtotalWithDiscount : cart[i].subtotal}</td>
            <td><a type="button" onclick="removeFromCart(${cart[i].id})">
            <i class="fa fa-trash" aria-hidden="true"></i></a></td>
            </tr>`)
    }
    /* console.log(printedCart) */

    document.getElementById("cart_list").innerHTML = printedCart.join('')

}

function open_modal() {
    /* console.log("Open Modal"); */
    printCart();
}


// ** Nivell II **

// Exercise 8
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.

    for (let i = 0; i <= products.length - 1; i++) {
        if (i === (id - 1)) {
            const product = products[i];
            const selectedFromCartList = cart.find((element) => element.id === product.id);

            if (selectedFromCartList === undefined) {
                product.quantity = 1;
                product.subtotal = product.price
                cart.push(product);
            }
            else {
                selectedFromCartList.quantity++;
                selectedFromCartList.subtotal = selectedFromCartList.quantity * selectedFromCartList.price;
            }
            applyPromotionsCart()
        }
        let totalQuantity = 0;

        for (let i = 0; i < cart.length; i++) {
            totalQuantity += cart[i].quantity;
            document.getElementById("count_product").innerHTML = totalQuantity;
        }
        console.log(cart)
    }
}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    
    let totalQuantity = Number(document.getElementById("count_product").innerHTML)

    cart.forEach((item, index) => {
        if (item.id === id) {
            if (item.quantity > 1) {
                item.quantity--
                item.subtotal = item.subtotal - item.price
                totalQuantity--
            } else {
                cart.splice(index, 1)
                totalQuantity--

            }
        }
    });

    document.getElementById("count_product").innerHTML = totalQuantity;
    printCart();
    console.log(cart);

    /* for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            if (cart[i].quantity > 1) {
                cart[i].quantity--;
                cart[i].subtotal = cart[i].subtotal - cart[i].price
            }
            else {
                cart.splice(i, 1);
                i--;
            }
        }
        applyPromotionsCart()
        printCart()
        console.log(cart)
    } */

}