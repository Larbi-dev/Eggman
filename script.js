/**
 * EGGMAN - Core Application Logic
 * Author: Larbi Michael Ankrah
 */

let cart = [];
const MY_PHONE_NUMBER = "233541746474"; 

/**
 * MOBILE NAVIGATION
 */
function toggleMenu() {
    const nav = document.getElementById("nav-links");
    const menuToggle = document.getElementById("mobile-menu");
    nav.classList.toggle("active");
}

/**
 * CART LOGIC
 */
function openModal(productName) {
    // For this premium version, "Add to Cart" directly adds the item 
    // and we use the modal to collect final delivery info during checkout.
    addToCart(productName);
}

function addToCart(productName) {
    // Define pricing based on the pack name
    const prices = {
        'Regular Pack': 20.00,
        'Family Pack': 55.00,
        'Bulk Pack': 100.00,
        'Mixed Pack': 60.00
    };

    const price = prices[productName] || 0;
    const existingItem = cart.find(item => item.name === productName);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }

    updateCartUI();
    
    // Feedback for the user
    console.log(`${productName} added to cart.`);
}

function updateCartUI() {
    const cartCount = document.getElementById("cart-count");
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.innerText = totalItems;
}

/**
 * CHECKOUT & WHATSAPP INTEGRATION
 */
function openCheckoutModal() {
    if (cart.length === 0) {
        alert("Your cart is empty! Add some eggs first.");
        return;
    }
    
    let summary = cart.map(item => `${item.name} (x${item.quantity})`).join(", ");
    document.getElementById("selected-item").innerText = "Ordering: " + summary;
    document.getElementById("orderModal").style.display = "block";
}

// Redirect the original "openModal" to checkout logic if needed, 
// or keep it simple as per your current HTML structure:
function openModal(product) {
    // In your current HTML, "Add to Cart" calls openModal. 
    // We will treat this as a direct intent to buy that specific item.
    selectedProduct = product;
    document.getElementById("selected-item").innerText = "Ordering: " + product;
    document.getElementById("orderModal").style.display = "block";
}

function closeModal() {
    document.getElementById("orderModal").style.display = "none";
}

/**
 * FORM SUBMISSION
 */
document.getElementById("whatsappForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const hostel = document.getElementById("hostel").value;
    const phone = document.getElementById("phone").value;

    // Create a professional order string for WhatsApp
    const orderHeader = `*🥚 NEW EGGMAN ORDER*`;
    const customerInfo = `*Customer:* ${name}%0A*Hostel/Room:* ${hostel}%0A*Phone:* ${phone}`;
    const itemInfo = `*Item:* ${selectedProduct}`;
    const footer = `--------------------------%0APlease confirm delivery!`;

    const fullMessage = `${orderHeader}%0A${customerInfo}%0A${itemInfo}%0A${footer}`;

    // Launch WhatsApp
    const whatsappUrl = `https://wa.me/${MY_PHONE_NUMBER}?text=${fullMessage}`;
    window.open(whatsappUrl, '_blank');

    // Reset and Close
    closeModal();
    alert("Opening WhatsApp to send your order...");
});

// Close modal if user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById("orderModal");
    if (event.target == modal) {
        closeModal();
    }
}
