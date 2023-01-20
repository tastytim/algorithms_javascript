class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode
      return;
    }

    let currentNode = this.root;


    while(currentNode){
        if(newNode.value < currentNode.value){
            if(!currentNode.left){
                currentNode.left = newNode
                return;
            }
            currentNode = currentNode.left;
        }else{
            if(!currentNode.right){
                currentNode.right = newNode
                return;
            }
            currentNode = currentNode.right;
        }
    }
  }

  traverseDFS(callback, method){
    if(method === 'preOrder'){
        return this.preOrder(this.root,callback)
    }

    if(method === 'inOrder'){
        return this.inOrder(this.root, callback)
    }

    return this.postOrder(this.root,callback)
  }

  traverseBFS(callback){
    const queue = [this.root]
    while(queue.length){
        const node = queue.shift()
        callback(node)
        if(node.left){
            queue.push(node.left)
        }

        if(node.right){
            queue.push(node.right)
        }
    }

  }

  preOrder(node, callback){
    if(!node){
        return;
    }
    if(callback){
        callback(node)
    }
    this.preOrder(node.left,callback)
    this.preOrder(node.right, callback)

  }


  inOrder(node, callback){
    if(!node){
        return;
    }
    this.preOrder(node.left,callback)
    if(callback){
        callback(node)
    }
    this.preOrder(node.right,callback)

  }

  postOrder(node, callback){
    if(!node){
        return;
    }
    this.preOrder(node.left,callback)
    this.preOrder(node.right,callback)
    if(callback){
        callback(node)
    }
  }

}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const tree = new BinaryTree();
tree.add(8);
tree.add(7);
tree.add(9);
tree.add(5);
tree.add(10);
tree.add(20);
tree.add(6);
tree.add(2);
tree.add(11);
console.log(tree);

// tree.traverseDFS((node)=>{
//     console.log(node.value);
// } , 'preOrder')


tree.traverseBFS((node)=>{
    console.log(node.value)
})
