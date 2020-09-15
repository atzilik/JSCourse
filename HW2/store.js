export { Store };

class Store{
    constructor(products, customers, orders){
        this.products = products;
        this.customers = customers;
        this.orders = orders;
     
        Order.prototype.toString = function orderToString() {
            return JSON.stringify(this);
        }
    }

    addOrder(customerId, ...productsIds) {
        productsIds.forEach(productId => {
            let product = this.products.find(p=>p.id == productId);
            if (product){
                if (product.itemsInStock)
                {
                        product.itemsInStock--;
                        let newOrder = new Order(customerId, productsIds);
                        this.orders.push(newOrder);
                        return true;
                }
                else{
                    console.log(`productID: ${productId} is out of stock`);
                    return false;
                }
            }
            else{
                console.log(`productId: ${productId} not found in stock`);
                return false;
                }
        });
    }

    printOrders(){
            this.orders.forEach(order => {
                console.log(order);
        });
    }

    notify(){
        let productsOutOfStock;
        setInterval(()=> {
            productsOutOfStock = this.products.filter(product=> !product.itemsInStock);
            console.log(`The following products are out of stock: ${JSON.stringify(productsOutOfStock)}`);
        }, 10000)
    }
}