import {Store} from './store.js';


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
}

class Customer {
    constructor(id, name, address){
        this.id = id;
        this.name = name;
        this.address = address;
    }
}

class Order {
    constructor(customerId, productsId)
    {
        this.customer = customerId;
        this.products = productsId;
    }
}

function initStore(){
    const products = [new Product(1,"Tomato", 1),
                    new Product(2,"Apple",  1),
                    new Product(3,"Orange", 20),
                    new Product(4,"Lemon", 10),
                    new Product(5,"Cucamber", 15),
                    new Product(6,"Potato",  4),
                    new Product(7,"Watermelon", 0)];

    const customers = [new Customer({id: 100, name:"Avraham", address:"NYC"}),
                       new Customer({id: 101, name:"Yaron", address:"Tel-Aviv"}),
                       new Customer({id: 102, name:"Yigal", address:"Yokneam"}),
                       new Customer({id: 103, name:"Nadav", address:"Akko"}),
                       new Customer({id: 104, name:"Sigal", address:"Eilat"}),
                       new Customer({id: 105, name:"Rivka", address:"Jerusalem"})];
                      
 console.log("Store initialized...");

    return new Store(products, customers, []);

}

function saveStoreState(store){
    let jsonData = JSON.stringify(store);
    console.log(jsonData);
    return jsonData;
}

function loadStoreData(storeInJson){
   let store = JSON.parse(storeInJson);
   return store;
}

let store = initStore();
console.log(JSON.stringify(store));
store.notify()
let initialStoreState = saveStoreState(store);
store.addOrder(106, 1,2,3);
console.log(`Updated store information: ${JSON.stringify(store)}`);
console.log(JSON.stringify(loadStoreData(initialStoreState)));
debugger;