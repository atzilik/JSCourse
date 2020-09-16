export {Product}

class Product {
    constructor(id, name, itemsInStock){
        this._id = id;
        this._name = name;
        this._itemsInStock = itemsInStock;
    }

    set itemsInStock(itemsInStock) {this._itemsInStock = itemsInStock};
    get itemsInStock() {return this._itemsInStock};
    set id(id) {this._id = id};
    get id() {return this._id};

    toString(){
        return ` ${this._name}`; 
    }
}