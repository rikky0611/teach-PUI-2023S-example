class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;

        this.element = null;
        this.createElement();
        this.updateElement();
        
    }
    deleteElement(){
        this.element.remove();
        theCart.delete(this);
        cartCheckoutPrice();
    }

// create template 
    createElement(){
        const template = document.querySelector('#rolltemplate');
        const clone = template.content.cloneNode(true);

        this.element = clone.querySelector('.horizontalGroup');
        const removeButton = this.element.querySelector('.remove');
            removeButton.addEventListener('click', ()=>{
                this.deleteElement();
            });
    }


// update items in the cart
    updateElement() {
        const rollImage = this.element.querySelector('.CartPicture');
        const rollName = this.element.querySelector('.rollName');
        const rollGlazingElement = this.element.querySelector('.glazingName');
        const rollPackSize = this.element.querySelector('.pack-size');
        const rollPriceElement = this.element.querySelector('.Cartprice');

        const CheckoutPrice = this.calculatePrice();

    // point cart item to corresponding HTML elements 
        rollImage.src = 'PUI HW1 images/' + rolls[this.type].imageFile;
        rollName.innerText = this.type + 'Cinnamon Roll';
        rollGlazingElement.innerText = 'Glazing:' + this.glazing;
        rollPackSize.innerText = 'Pack Size:' + this.size;
        rollPriceElement.innerText = "$" + CheckoutPrice;
    }

// calculate the price based on glazing and pack size
    calculatePrice(){
        let glazingPrice = 0;
        for (const glaze of allGlazing){
            if(this.glazing == glaze.glazing){
                glazingPrice = glaze.price;
            }
        }

        let packPriceFinal = 0;
        for (const pack of allPackSize){
            if (this.size == pack.size){
                packPriceFinal = pack.priceAdaption;
            }
        }

        const updatedPrice = ((this.basePrice + glazingPrice) * packPriceFinal).toFixed(2);
        console.log("PACK", packPriceFinal)
        console.log(this.basePrice + 0);
        return updatedPrice;
    }

    
}

// create a set to represent the cart
const theCart = new Set();

// make four new Roll object and add them to the cart
let originalRoll = new Roll("Original", 'Sugar Milk', 1, rolls["Original"].basePrice);
theCart.add(originalRoll);

let walnutRoll = new Roll("Walnut", 'Vanilla Milk', 12, rolls["Walnut"].basePrice );
theCart.add(walnutRoll);

let raisinRoll = new Roll("Raisin", 'Sugar Milk', 3, rolls["Raisin"].basePrice);
theCart.add(raisinRoll);

let appleRoll = new Roll("Apple", 'Keep original', 3, rolls["Apple"].basePrice);
theCart.add(appleRoll);

let AddtoCart = document.querySelector(".row-cartItem");
for (const roll of theCart){
    AddtoCart.append(roll.element);
}

function cartCheckoutPrice(){
    let cartCheckoutPrice = document.querySelector('.endprice');
    let price = 0;

    for (const roll of theCart){
        price = price + parseFloat(roll.calculatePrice());
    }
        cartCheckoutPrice.innerText = "$" + price.toFixed(2);
}

cartCheckoutPrice();
