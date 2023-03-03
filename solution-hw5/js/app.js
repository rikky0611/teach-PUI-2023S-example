
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

// parse the URL parameter and store the current role type
const queryString=window.location.search;
const params=new URLSearchParams(queryString);
const rollType=params.get('roll');

// extract current roll information from rollsData
// update name of the roll
const heading=document.querySelector('#header');
heading.innerText = rollType + 'Cinnamon Roll';

// update image path of the roll
const rollImage=document.querySelector('#detailpic');
rollImage.src = 'PUI HW1 images/' + rolls[rollType].imageFile;

//update base price of the roll
const rollPrice=document.querySelector('#finalprice');
rollPrice.innerText = '$' + rolls[rollType].basePrice;
let basePrice = rolls[rollType].basePrice;

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

    //const basePrice = 2.49;
    let updatedPrice = ((basePrice + glazingPrice)* packPriceFinal).toFixed(2);
    console.log(updatedPrice)
    let finalPrice = "$" + updatedPrice;

    price.innerHTML = finalPrice;

}

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

// create an empty array called Cart
const cart=[]

// save current information of roll on clicked on Add To Cart
let rollButton=document.querySelector('#checkoutbutton');
rollButton.addEventListener("click", addRollToCart);

function addRollToCart(){
    
    let selectedGlazing=allGlazing[glazingChange.selectedIndex];
    let selectedPack=allPackSize[packSizeChange.selectedIndex];

    let selectedRoll= new Roll(rollType, selectedGlazing.glazing, selectedPack.size, '$' + rolls[rollType].basePrice);
    cart.push (selectedRoll);
    console.log(cart);
}