const addToDb =id =>{
    const quantity = localStorage.getItem(id);
    if(quantity){
        console.log('already exist');
        const newQuanity = parseInt(quantity) + 1;
        localStorage.setItem(id , newQuanity);
    }
    else{
        console.log('new item')
        localStorage.setItem(id ,1);

    }
    
}
export{addToDb}