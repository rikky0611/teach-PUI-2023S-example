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

// retrive the dropdown menue for glazing and packsize
let glazingDropdown = document.querySelector('#glazing');
let packsizeDropdown = document.querySelector('#packsize');

// populate the options for glazing dropdown menu
for (let i=0; i< allGlazing.length; i++) {
    let choiceNow = allGlazing[i];
    let optionElement = document.createElement('option');
    optionElement.text=choiceNow.glazing;
    optionElement.value=choiceNow.price;
    glazingDropdown.appendChild(optionElement);
}

// populate the options for packsize dropdown menu
for (let i=0; i< allPackSize.length; i++) {
    let choiceNow = allPackSize[i];
    let optionElement = document.createElement('option');
    optionElement.text = choiceNow.size;
    optionElement.value = choiceNow.priceAdaption;
    packsizeDropdown.appendChild(optionElement);
}

// let the options respond to changes
let glazingChange = document.querySelector('#glazing');
glazingChange.addEventListener('change', onSelectValueChange);

let packSizeChange = document.querySelector('#packsize');
packSizeChange.addEventListener('change', onSelectValueChange);

// function for onSelectValueChange to update the checkout price 
function onSelectValueChange(){
    let price = document.querySelector('#finalprice');

    let glazingPrice = Number(glazingChange.value);
    let packPriceFinal = Number(packSizeChange.value);

    const basePrice = 2.49;
    let updatedPrice = ((basePrice + glazingPrice)* packPriceFinal).toFixed(2);
    console.log(updatedPrice)
    let finalPrice = "$" + updatedPrice;

    price.innerHTML = finalPrice;

}