export const initialState={
    total:0,

    cart_products:[],
    fav_products:[]
}

export const shopReducer=(state,action)=>{
    //action contains type and payload
    const {type,payload}=action
    switch (type) {
        case 'ADD_TO_CART':
            console.log('ADD_TO_CART',payload)
            return{
                ...state,
                cart_products:payload.cart_products};
        case 'REMOVE_FROM_CART':
            console.log('REMOVE_FROM_CART',payload)
            return{
                ...state,
                cart_products:payload.cart_products
            };
        case 'UPDATE_PRICE':
            console.log('UPDATE_TOTAL',payload)
            return{
                ...state,
                total:payload.total
            };
        
        default:
            throw new Error(`No case for ${type} has found`)
    }
    
}