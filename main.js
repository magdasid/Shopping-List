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
let shoppingList = (function(){
    let items = [];
    return function(...products){
        items.push(...products);
        return items;
    }
})();
let addProduct = (name, amount) => {
    let i = counter();
    let element = document.createElement("div");
    element.innerHTML = `${name}, ilość: ${amount} <span class='delete${i}'><i class="far fa-trash-alt"></i></span>`;
    element.classList.add("product"+i,"product");
    document.getElementById("list-items").appendChild(element);
    document.getElementsByClassName('delete'+i)[0].addEventListener('click', () => deleteProduct(i, name));

    let items = shoppingList(i, name, amount);
    localStorage.setItem("array", JSON.stringify(items));
}
let deleteProduct = (id) => {
    document.getElementsByClassName('product'+id)[0].remove();
    let items = shoppingList();
    let elementIndex = items.indexOf(id);
    items.splice(elementIndex, 3);
    localStorage.setItem("array", JSON.stringify(items));
}
addButton.addEventListener('click', () => addProduct(productName.value, amount.value)); 
document.getElementsByClassName("print-button")[0].addEventListener('click', () => window.print()); 

let getProducts = (function(){
    let products = JSON.parse(localStorage.getItem("array"));
        for (let j=0; j< products.length; j=j+3) {
            let name = products[j+1];
            let amount = products[j+2];
            addProduct(name,amount);
        }
})();