cart = 1;
function addCart(no) {
    let addCart = document.getElementById("cart");
    addCart.innerHTML = cart;
    cart += 1;

    let addRow = document.createElement("div");
    addRow.classList.add("row");
    addRow.id = `checkout-cart-${no}`;
    addRow.innerHTML = ''
    document.getElementById("checkout-cart").appendChild(addRow);

    let addTitleCol = document.createElement("div");
    addTitleCol.classList.add("col");
    addTitleCol.id = `title-checkout-cart-${no}`;
    addTitleCol.innerHTML = document.getElementById(no).getElementsByClassName("title")[0].innerHTML
    document.getElementById(`checkout-cart-${no}`).appendChild(addTitleCol);
    document.getElementById("checkout-cart").appendChild(addRow);

    let addPriceCol = document.createElement("div");
    addPriceCol.classList.add("col");
    addPriceCol.id = `price-checkout-cart-${no}`;
    addPriceCol.innerHTML = document.getElementById(no).getElementsByClassName("price")[0].innerHTML
    document.getElementById(`checkout-cart-${no}`).appendChild(addPriceCol);
    document.getElementById(`price-checkout-cart-${no}`).style.textAlign="right";

    document.getElementById("checkout").style.display="block";

    alert("Item added successfully!");
    
    console.log("cart +1");

}

function over(){
    document.getElementById("dropdown-content").style.display="block"
    }
function out(){
    document.getElementById("dropdown-content").style.display="none"
}


