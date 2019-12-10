
var bank = document.getElementById('bankAmount');
    var AmountInBank = parseFloat(bank.innerHTML)
    var purchaseTotal = parseFloat(cart-item-total.innerHTML)
function addMoney(){
      //(cartItemNames)
      moneyToAdd = parseFloat(document.getElementById('money').value);
      if(!moneyToAdd ){
        alert('Please enter a number amount.');
      }
      else{
        newBank = parseFloat(AmountInBank) + parseFloat(moneyToAdd);
        AmountInBank = newBank;
        console.log("addMoney() function money to be added is " + moneyToAdd + " and the new bank total is " + newBank);
        newBank = parseFloat(newBank);
        bank.innerHTML = newBank;
        document.getElementById('money').value="";
  }
}

var amountBeforePurchase;
var AmountInBank = parseFloat(bank.innerHTML);

function purchaseClicked(){
  if (AmountInBank || parseFloat(AmountInBank)< parseFloast(purchaseTotal)) {alert ("Sorry you do not have enough funds to complete this purchase!");}
    else alert ('Thank you for shopping');
}

arrayquantity=[]
arrayprice=[]






if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

   var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

/*function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}*/

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = total;
}
 


function purchaseClicked(){

var balanceOfTheWallet= document.getElementById("bankAmount").innerHTML
var cartTotalBalance= document.getElementsByClassName('cart-total-price')[0].innerText

if (+ cartTotalBalance <= +balanceOfTheWallet){

 
var finalBalance= balanceOfTheWallet - cartTotalBalance

document.getElementById("bankAmount").innerHTML = finalBalance;
document.getElementsByClassName('cart-total-price')[0].innerText  = "0";




 var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {cartItems.removeChild(cartItems.firstChild)};

     var removeBody = document.getElementById("removeBody")
    while (removeBody.hasChildNodes()) {removeBody.removeChild(removeBody.firstChild)}; 


document.getElementById("receipt").innerHTML = 
"<h2>Receipt</h2>" +
"<br/>Wallet Balance:" + balanceOfTheWallet +
"<br/>Cart Total:" + cartTotalBalance +
"<br/>Amount left in wallet:" + finalBalance;

}

    else { alert("Sorry you have insufficient funds!")};



     }








