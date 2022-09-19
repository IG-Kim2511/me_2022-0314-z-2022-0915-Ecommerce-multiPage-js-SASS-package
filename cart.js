

// variable
const cartItemsEl = document.querySelector('.shopping-cart .box-container');

const subTotalElm = document.querySelector('.shopping-cart .subtotal');
const taxElm = document.querySelector('.shopping-cart .tax');
const totalElm = document.querySelector('.shopping-cart .total');
const numberOfItemsElm = document.querySelector('.shopping-cart .numberOfItems');




// 🦄multi page : 저장된 localstorage data활용하기 - cart.js



//🥨 products.js  - 🥒 cart 
// let cart =[];
// 🥒js45-30,-40,-50,-60, localStorage
let cart = JSON.parse(localStorage.getItem("CART")) || [];



// 🍀js13-40. renderCartItems :  cart에 아이템 render
/* 
    🦄databinding 안에 js코드 넣기

    + substring(~,~) 하는법 : ${pp_item.title.substring(0, 15)}
 */

/* 
    <form action="">
        <span>quantity : </span>
        <input type="number" name="" value="${pp_item.numberOfUnits}" id="">
    </form>
*/

function renderCartItems() {
    
    cartItemsEl.innerHTML=""; 

    cart.forEach((pp_item)=>{
        cartItemsEl.innerHTML += `
        <div class="box">
            <i class="fas fa-xmark" onclick="removeItemFromCart(${pp_item.id})"></i>
            <img src="${pp_item.image}" alt="${pp_item.title}">
            <div class="content">
                <h3>${pp_item.title.substring(0, 15)}..</h3>
          
                <div class="units">
                <div class="number"> QTY : ${pp_item.numberOfUnits}</div>
                    <button class="mybtn plus" onclick="changeNumberOfUnits('plus', ${pp_item.id})">+</button>           
                    <button class="mybtn minus" onclick="changeNumberOfUnits('minus', ${pp_item.id})">-</button>
                </div>
                <div class="price">$${pp_item.price}</div>
            </div>
        </div>
    `        
    });
}




// 🥨 products.js  - 🍀js13-40.update Cart  

function updateCart_onCart() {
    renderCartItems();
    renderSubtotal();

    console.log(cart)

    // js 45-10, js45-20
    // localStorage.setItem('CART',cart);
    localStorage.setItem('CART',JSON.stringify(cart));    
}
updateCart_onCart();



// 🥨 products.js  - 🍀js28.  

function changeNumberOfUnits(p_action, p_id) {

    cart = cart.map((p_item)=>{
        let numberOfUnits = p_item.numberOfUnits;

        if (p_item.id === p_id) {

            if (p_action ===  "minus" && numberOfUnits > 1) {

                numberOfUnits--;
                
            } else if (p_action ===  "plus" && numberOfUnits <  p_item.inStock) {

                numberOfUnits++;
                
            }else if(p_action ==="plus" && numberOfUnits ===p_item.inStock){
                alert(`sorry. it's out of stock.`);                
            }            
        }

        return{
            ...p_item,

            numberOfUnits:numberOfUnits,
        }

    })
    updateCart_onCart();
}


//🥨 products.js 🍀js35. calculate, renderSubtotal 

/* 

const subtotalElm = document.querySelector('.shopping-cart .subtotal');
const numberOfItemsElm = document.querySelector('.shopping-cart .numberOfItems');
const taxElm = document.querySelector('.shopping-cart .tax');
const totalElm = document.querySelector('.shopping-cart .total');



*/





function renderSubtotal() {    

    let subTotalPrice = 0;
    let tax = 0;    
    let totalPrice = 0;    
    let totalNumber = 0;

    cart.forEach((pp_item)=>{
        subTotalPrice += pp_item.price * pp_item.numberOfUnits

        tax += pp_item.price * pp_item.numberOfUnits/10

        totalPrice += ( pp_item.price * pp_item.numberOfUnits) + (pp_item.price * pp_item.numberOfUnits/10)

        totalNumber += pp_item.numberOfUnits;

    });

 subTotalElm.innerHTML = `${subTotalPrice.toFixed(2)}`
 taxElm.innerHTML = `${tax.toFixed(2)}`
 totalElm.innerHTML=`${totalPrice.toFixed(2)}`
 numberOfItemsElm.innerHTML = `${totalNumber}`

}


// 🍀js41. remove item from cart

function removeItemFromCart(p_id) {
 

    cart = cart.filter(pp_item => pp_item.id !=p_id);

    updateCart_onCart();    
}







//🍀localStorage.clear(); /  location.reload();    
// 🥨 products.js에 같은 코드 있음

const deleteAllBtn = document.querySelector('.delete-all-btn');
const checkoutBtn = document.querySelector('.checkoutBtn');

deleteAllBtn.addEventListener('click',()=>{
    localStorage.clear();
    location.reload();    
});

checkoutBtn.addEventListener('click',()=>{
    localStorage.clear();
    location.reload();    
   
    alert(`Thank you`);

});
