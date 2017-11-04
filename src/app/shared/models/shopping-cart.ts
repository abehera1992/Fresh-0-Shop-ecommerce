import { Product } from './app-product';
import { ShoppingCartItems } from './shopping-cart-item';

export class ShoppingCart{
    items: ShoppingCartItems[] = [];

    constructor(private itemsMap: { [productId: string]: ShoppingCartItems }) {
        this.itemsMap = itemsMap || {};
        for(let productId in itemsMap){
            let item = itemsMap[productId];
            this.items.push( new ShoppingCartItems({
                ...item,
                $key: productId
            })); 
        }    
    }

    getQuantity(product: Product){
        let item = this.itemsMap[product.$key];
        return item ? item.quantity : 0;
      }

    get totalItemsCount(){
       let count = 0;
        for(let productId in this.itemsMap)
          count += this.itemsMap[productId].quantity;
        
        return count;
    }

    get totalPrice(){
        let sum = 0;
        for(let productId in this.items){
         sum += this.items[productId].totalPrice;
         
        return sum;
        
        }
    }
}