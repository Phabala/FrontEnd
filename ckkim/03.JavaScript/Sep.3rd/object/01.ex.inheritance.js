// Product 클래스를 정의 (속성:이름, 가격, toString())
// 5가지의 상품을 만들 것(instance)

// Cart 클래스를 정의할 것(속성: 상품, 수량, 메소드: add(), sum())
// Cart 의 총 가격을 구하시오

class Product {
    constructor (name, price) {
        this.name = name;
        this.price = price;
    }
    toString() {
        return `이 상품의 이름은 ${this.name}, 가격은 ${this.price}원입니다.`;
    }
}

class Cart {
    constructor () {
        this.products = []
        this.quantity = this.products.length
    }
    add(product) {
        this.products.push(product)
    }
    sum() {
        let summedPrice = 0
        for (let product of this.products) {
            summedPrice += product.price;
        }
        return summedPrice
    }
}

// 아래부터는 위를 활용한 코드

a = new Product('a', 10000);
b = new Product('b', 20000);
c = new Product('c', 30000);
d = new Product('d', 40000);
e = new Product('e', 50000);

console.log(a.toString());
console.log(c.toString());
console.log(e.toString());

cart = new Cart();

cart.add(a)
cart.add(b)
cart.add(c)
cart.add(d)
cart.add(e)

console.log(cart.products)
console.log(cart.sum())