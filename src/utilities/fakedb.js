const addToDb =id =>{
    let shoppingCart;
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    else{
        shoppingCart={};
    }
    
    const quantity = shoppingCart[id];
    if(quantity){
        
        const newQuanity = quantity + 1;
        shoppingCart[id] = newQuanity;
       
    }
    else{
        shoppingCart[id] = 1;
       

    }
    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart)
    );
    
}
export{addToDb}