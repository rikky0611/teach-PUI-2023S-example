function deleteElement(roll){
        roll.element.remove();

        let index = cartArray.indexOf(roll);
        cartArray.splice(index,1);

        updateLocalStorage();
        cartCheckoutPrice();
  
    }

// create template 
function    createElement(roll){
        const template = document.querySelector('#rolltemplate');
        const clone = template.content.cloneNode(true);

        roll.element = clone.querySelector('.horizontalGroup');

        const removeButton = roll.element.querySelector('.remove');
            removeButton.addEventListener('click', ()=>{
                deleteElement(roll);
            });

        
    }


// update items in the cart
function    updateElement(roll) {
        const rollImage = roll.element.querySelector('.CartPicture');
        const rollName = roll.element.querySelector('.rollName');
        const rollGlazingElement = roll.element.querySelector('.glazingName');
        const rollPackSize = roll.element.querySelector('.pack-size');
        const rollPriceElement = roll.element.querySelector('.Cartprice');

        const CheckoutPrice = calculatePrice(roll);

    // point cart item to corresponding HTML elements 
        rollImage.src = 'PUI HW1 images/' + rolls[roll.type].imageFile;
        rollName.innerText = roll.type + 'Cinnamon Roll';
        rollGlazingElement.innerText = 'Glazing:' + roll.glazing;
        rollPackSize.innerText = 'Pack Size:' + roll.size;
        rollPriceElement.innerText = "$" + CheckoutPrice;
    }

// calculate the price based on glazing and pack size
function    calculatePrice(roll){
        let glazingPrice = 0;
        for (const glaze of allGlazing){
            if(roll.glazing == glaze.glazing){
                glazingPrice = glaze.price;
            }
        }

        let packPriceFinal = 0;
        for (const pack of allPackSize){
            if (roll.size == pack.size){
                packPriceFinal = pack.priceAdaption;
            }
        }

        const updatedPrice = ((roll.basePrice + glazingPrice) * packPriceFinal).toFixed(2);
        console.log("PACK", packPriceFinal)
        console.log(this.basePrice + 0);
        return updatedPrice;
    }



function cartCheckoutPrice(){
    let cartCheckoutPrice = document.querySelector('.endprice');
    let price = 0;

    for (const roll of cartArray){
        price = price + parseFloat(calculatePrice(roll));
    }
        cartCheckoutPrice.innerText = "$" + price.toFixed(2);
}

function populate(){
    retriveCartFromLocalStorage();

    let rollCartElement = document.querySelector('#row-cartItem');
    for (const roll of cartArray){
        createElement(roll);
        updateElement(roll);

        rollCartElement.append(roll.element)
    }

    cartCheckoutPrice();
}

populate();
