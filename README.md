# 🛒 Habung

**Habung** is a simple dynamic shopping cart simulator built with **HTML, CSS, and Vanilla JavaScript**.

This project was created as a frontend practice project to understand how JavaScript can manage dynamic data and update the user interface based on user interactions.

## ✨ Features

* Add products dynamically
* Set product name, price, and quantity
* Automatically combine quantities when adding an existing product
* Increase and decrease product quantity
* Remove products from the cart
* Automatically calculate:

  * Subtotal
  * Discount
  * Final total
* Dynamic cart item counter
* Empty cart state
* Responsive layout
* Indonesian Rupiah currency formatting
* Checkout button state based on cart contents

## 🎯 Discount Rule

CartSim currently applies a **10% discount** when the subtotal reaches:

```text
Rp500.000
```

Example:

```text
Subtotal   : Rp600.000
Discount   : Rp60.000
Total      : Rp540.000
```

## 🛠️ Built With

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* DOM Manipulation
* Event Handling
* Array Methods
* Template Literals
* `Intl.NumberFormat`

No framework or external JavaScript library is used.

## 🧠 What I Learned

This project focuses on several fundamental frontend concepts:

### 1. Managing Dynamic Data

Products are stored in a JavaScript array:

```js
let cart = [];
```

Each product is represented as an object:

```js
{
    id: 123,
    name: "Keyboard",
    price: 35000,
    quantity: 2
}
```

### 2. Rendering Data to the DOM

The cart interface is generated dynamically from the `cart` array.

```js
renderCart();
```

Instead of hardcoding products directly into HTML, the UI is generated based on the current data.

### 3. User Interaction

The application responds to user actions such as:

* Adding products
* Increasing quantity
* Decreasing quantity
* Removing products

### 4. Calculating Cart Values

The subtotal is calculated from:

```text
price × quantity
```

for every product in the cart.

### 5. Keeping Data and UI in Sync

The main idea of the project is:

```text
User Action
     ↓
Update Data
     ↓
Render UI
     ↓
Update Calculation
```

This helped me understand a basic concept that is commonly used in modern frontend applications.

## 📂 Project Structure

```text
cartsim/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🚀 How to Run

Clone this repository:

```bash
git clone https://github.com/devlin-25/habung.git
```

Open the project folder:

```bash
cd cartsim
```

Then open `index.html` in your browser.

You can also use **Live Server** in Visual Studio Code for a better development experience.

## 📸 Preview

<img width="1917" height="862" alt="image" src="https://github.com/user-attachments/assets/7766864f-7011-42f1-b00e-46f083dbb4d0" />



## 📚 Purpose

Habung is a learning project focused on strengthening my understanding of **JavaScript fundamentals, DOM manipulation, event handling, arrays, objects, and dynamic UI rendering** before moving into more advanced frontend technologies.

---

**Built with HTML, CSS & Vanilla JavaScript.**
