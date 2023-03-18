const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};

// make an array containing all the possible glazing options
let allGlazing = [
    {
        glazing: 'Keep original',
        price: 0.00,
    },
    {
        glazing: 'Sugar milk',
        price: 0.00,
    },
    {   glazing: 'Vanilla milk',
        price: 0.50,
    },
    {
        glazing: 'Double chocolate',
        price: 1.50,
    }
];

// make an array containing all the pack size options 
let allPackSize = [
    {
        size: 1,
        priceAdaption: 1,
    },
    {
        size: 3,
        priceAdaption: 3,
    },
    {
        size: 6,
        priceAdaption: 5,
    },
    {
        size: 12,
        priceAdaption: 10,
    }
];

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;

        this.element=null;
    }
}

// retrive cart from local storage, if no cart exist create an empty cart array

let cartArray = []

function addNewRollToCart(rollType, rollGlazing, packSize, basePrice) {
    const roll = new Roll(rollType, rollGlazing, packSize, basePrice);
    cartArray.push(roll);
    return roll;  
  }

function retriveCartFromLocalStorage(){
    if (localStorage.getItem('cartItems') !=null){
        const cartArrayString = localStorage.getItem('cartItems');
        cartArray = JSON.parse(cartArrayString);
    }
}

function updateLocalStorage(){
    const cartArrayString = JSON.stringify(cartArray);
    localStorage.setItem('cartItems', cartArrayString);
}