

// Shopping cart array
let cart = [];


// Add product to cart
function addToCart(productName, price) {

    let product = cart.find(item => item.name === productName);

    if (product) {
        product.quantity++;
    } else {
        cart.push({
            name: productName,
            price: price,
            quantity: 1
        });
    }

    displayCart();
}


// Display cart products and total
function displayCart() {

    let cartItems = document.getElementById("cartItems");
    let cartCount = document.getElementById("cartCount");
    let cartTotal = document.getElementById("cartTotal");

    let totalItems = 0;
    let totalPrice = 0;

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
    }

    cart.forEach(function(item, index) {

        totalItems += item.quantity;
        totalPrice += item.price * item.quantity;

        cartItems.innerHTML += `
            <div class="mb-3 border-bottom pb-3">

                <h6>${item.name}</h6>

                <p>Price: ₹${item.price}</p>

                <p>Quantity: ${item.quantity}</p>

                <button class="btn btn-sm btn-success"
                        onclick="changeQuantity(${index}, 1)">
                    +
                </button>

                <button class="btn btn-sm btn-secondary"
                        onclick="changeQuantity(${index}, -1)">
                    -
                </button>

                <button class="btn btn-sm btn-danger"
                        onclick="removeItem(${index})">
                    Remove
                </button>

            </div>
        `;
    });

    cartCount.innerText = totalItems;
    cartTotal.innerText = totalPrice;
}


// Increase or decrease quantity
function changeQuantity(index, amount) {

    cart[index].quantity += amount;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    displayCart();
}


// Remove product from cart
function removeItem(index) {

    cart.splice(index, 1);

    displayCart();
}


// Place order
function placeOrder() {

    if (cart.length === 0) {
        alert("Your cart is empty! Add a product first.");
        return;
    }

    let orderDetails = "";

    let total = 0;

    cart.forEach(function(item) {

        orderDetails += item.name +
            " x " + item.quantity + "\n";

        total += item.price * item.quantity;
    });

    alert(
        "Thank you for shopping with Herbal Beauty!\n\n" +
        "Your Order:\n" +
        orderDetails +
        "\nTotal Amount: ₹" + total +
        "\n\nYour demo order has been placed!"
    );

    cart = [];

    displayCart();

    let modalElement = document.getElementById("cartModal");

    let modal = bootstrap.Modal.getInstance(modalElement);

    if (modal) {
        modal.hide();
    }
}


// Enquiry form
document.getElementById("enquiryForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        let name = document.getElementById("name").value;
        let product = document.getElementById("product").value;

        document.getElementById("formMessage").innerText =
            "Thank you, " + name +
            "! Your enquiry about " + product +
            " has been submitted successfully.";

        this.reset();
    });


// Initialize cart display
displayCart();

