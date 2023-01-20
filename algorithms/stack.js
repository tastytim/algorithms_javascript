//CUSTOM STACK

class Stack {
    array = []
    constructor() {
     
    }
    push(value) {
        this.array.push(value);
    }
    pop() {
        this.array.pop();
    }
    peek() {
        console.log(this.array[0])
        return this.array[0];
    }
    count() {
        console.log(this.array.length)
        return this.array.length;
    }

    print(){
        console.log(this.array)
    }
}


let stack = new Stack()
stack.push(2);
stack.push(2);
stack.push(3);
stack.push(3);
stack.pop()
stack.print()
stack.peek()
stack.count()


