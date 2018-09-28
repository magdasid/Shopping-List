const addButton = document.querySelector("#add-button");
const productName = document.querySelector(".product-input");
const amount = document.querySelector(".amount-input");

const counter = (function(){
    let i = 0;
    return function() {
        i+=1;
        return i;
    };
})();
const shoppingList = (function(){
    const items = [];
    return function(...products){
        items.push(...products);
        return items;
    }
})();
const addProduct = (name, amount) => {
    let i = counter();
    const element = document.createElement("div");
    element.innerHTML = `${name}, ilość: ${amount} <span class='delete${i}'><i class="far fa-trash-alt"></i></span>`;
    element.classList.add("product"+i,"product");
    document.getElementById("list-items").appendChild(element);
    document.getElementsByClassName('delete'+i)[0].addEventListener('click', () => deleteProduct(i, name));
    const items = shoppingList(i, name, amount);
    localStorage.setItem("array", JSON.stringify(items));
}
const deleteProduct = (id) => {
    document.getElementsByClassName('product'+id)[0].remove();
    const items = shoppingList();
    const elementIndex = items.indexOf(id);
    items.splice(elementIndex, 3);
    localStorage.setItem("array", JSON.stringify(items));
}
addButton.addEventListener('click', () => addProduct(productName.value, amount.value)); 
document.getElementsByClassName("print-button")[0].addEventListener('click', () => window.print()); 

const getProducts = (function(){
    const products = JSON.parse(localStorage.getItem("array"));
        for (let j=0; j< products.length; j=j+3) {
            const name = products[j+1];
            const amount = products[j+2];
            addProduct(name,amount);
        }
})();