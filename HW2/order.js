export { Order };

class Order {
    constructor(customerId, productsId)
    {
        this.customerId = customerId;
        this.productsId = productsId;
    }
    
    toString() {
        return `CustomerID: ${this.customerId}, ProductsIDs: ${this.productsId.join()}`;
    }
}
