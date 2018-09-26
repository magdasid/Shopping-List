let addButton = document.querySelector("#add-button");
let productName = document.querySelector(".product-input");
let amount = document.querySelector(".amount-input");

let counter = (function(){
    let i = 0;
    return function() {
        i+=1;
        return i;
    };
})();
let addProduct = (name, amount) => {
    let i = counter();
    let element = document.createElement("div");
    element.innerHTML = `${name}, ilość: ${amount} <span class='delete${i}'><i class="far fa-trash-alt"></i></span>`;
    element.classList.add("product"+i,"product");
    document.getElementById("list-items").appendChild(element);
    
    document.getElementsByClassName('delete'+i)[0].addEventListener('click', () => deleteProduct(i));

}
let deleteProduct = (id) => {
    document.getElementsByClassName('product'+id)[0].remove();

}
addButton.addEventListener('click', () => addProduct(productName.value, amount.value)); 
document.getElementsByClassName("print-button")[0].addEventListener('click', () => window.print()); 

