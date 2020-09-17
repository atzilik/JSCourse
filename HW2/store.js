import {Order} from './order.js'
export { Store };

const NOTIFICATION_INTERVAL = 10000;

class Store{
    constructor(products, customers, orders){
        this.products = products;
        this.customers = customers;
        this.orders = orders;  
    }
    

    addOrder(customerId, ...productsIds) {
        if (this.areAllProductsInStock(productsIds)){
            productsIds.forEach(productId => {
                const product = this.products.find(p=>p.id === productId);
                product.itemsInStock--;
            });
            const newOrder = new Order(customerId, productsIds);
                this.orders.push(newOrder);
                return true;
        }   
        return false;
    }

    areAllProductsInStock(productsIds){
        let areAllProductsInStock = true;
        productsIds.forEach(productId => {
            const product = this.products.find(p=>p.id === productId);
            
            if (product){
                if (!product.itemsInStock)
                {
                    areAllProductsInStock = false;
                    console.log(`product: ${product} is out of stock`);
                }
            }
            else{
                console.log(`product: ${product} not found in stock`);
                areAllProductsInStock = false;
                }
        });

        return areAllProductsInStock;
    }

    printOrders(){
            this.orders.forEach(order => {
                console.log(`${order}`);
        });
    }

    notify(){
        setInterval(()=> {
            const productsOutOfStock = this.products.filter(product=> !product.itemsInStock);
            if (productsOutOfStock.length)
                console.log(`The following products are out of stock: ${productsOutOfStock.join()}`);
        }, NOTIFICATION_INTERVAL);
    }
}