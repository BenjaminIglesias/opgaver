//a
function reverseArr<T> (arg: T[]): T[] {
    return arg.reverse();
}

console.log(reverseArr<string>(["a","b","c"]));
console.log(reverseArr<number>([1,2,3]));
console.log(reverseArr<boolean>([true,true,false]));
//console.log(reverseArr<number>(["a","b","c"]));


//b

class DataHolder<T> {
    val: T;
    constructor(val: T) { this.val = val };
    getValue() { return this.val };
    setValue(val: T) { this.val = val };
}

let d = new DataHolder<string>("Hello");
console.log(d.getValue());
d.setValue("World");
console.log(d.getValue());

let d2 = new DataHolder<number>(123);
console.log(d2.getValue());
d2.setValue(500);
console.log(d2.getValue());


//c

class DataHolder2<T> {
    #val: T
    constructor(val: T) { this.#val = val };
    get val(): T { return this.#val };
    set val(val: T) { this.#val = val };

    toString(): T { return this.#val }
}


let d3 = new DataHolder<string>("initial");
console.log(d3.toString());
d3.val = "Changed";
console.log(d3.toString());