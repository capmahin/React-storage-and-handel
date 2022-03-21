const addToDb =id =>{
    let shoppingCart ={};
    localStorage.setItem('shoppingCart',JSON.stringify(shoppingCart));
    const quantity = localStorage.getItem(id);
    if(quantity){
        
        const newQuanity = parseInt(quantity) + 1;
        // localStorage.setItem(id , newQuanity);
    }
    else{
        console.log('new item')
        // localStorage.setItem(id ,1);

    }
    
}
export{addToDb}