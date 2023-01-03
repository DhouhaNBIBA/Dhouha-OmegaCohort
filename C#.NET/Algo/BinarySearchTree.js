class Node{
    constructor(value){
        this.value = value
        this.right = null
        this.left = null
    }
}
class BST{
    constructor(){
        this.root = null
    }
    isEmpty()
    {
        return this.root== null
    }
    Min(){
        if( this.isEmpty())
        {
            return false
        }
        let runner= this.root;
        let min= runner.value;
        while (runner.left !==null)
        {
            if(min>runner.left.value)
            {
                min = runner.left.value
            }
            runner=runner.left
        }
        return min
    }
    //******  Min with recursion ********//
    MinRecursive(runner){
        if( this.isEmpty())
        {
            return false
        }
        // let runner= this.root;

            if(runner.left===null)
            {
                return runner.value
            }
            return this.MinRecursive(runner.left)
    }
     //******  Min with recursion ********//
    MaxRecursive(runner){
        if( this.isEmpty())
        {
            return false
        }
        // let runner= this.root;

            if(runner.right===null)
            {
                return runner.value
            }
            return this.MaxRecursive(runner.right)
    }
    Max(){
        if( this.isEmpty())
        {
            return false
        }
        let runner= this.root;
        let max= runner.value;
        while (runner.right !==null)
        {
            if(max<runner.right.value)
            {
                max = runner.right.value
            }
            runner=runner.right
        }
        return max
    }
    find(value)
    {
        if (this.isEmpty() ) 
        {
            return false
        }
        else
        {
            let runner= this.root
            while (runner)
            {
                if(value==runner.value)
                    {
                        return true
                    }
                else 
                    {
                        if (runner.value>value)
                            {
                                runner= runner.left
                            }
                            runner=runner.right
                    }
            }
            return false
        }
    }
    
    insertValue(value)
    {
        const newNode =  new Node(value)
        if (this.isEmpty() ) 
        {
            this.root= new Node(value)
            return this
        }
        else
        {
            let runner= this.root
            while(runner)
            {
                if(runner.value<=value)
                {
                    if( runner.right===null)
                    {
                        runner.right= newNode
                        return this
                    }
                    runner= runner.right
                }
                else 
                {
                    if (runner.value>value )
                    {
                        if (runner.left===null) 
                        {
                            runner.left=newNode
                            return this
                        }
                        runner=runner.left
                    }    
                }
            }
        }
    }
    printPerOrder(runner, arr=[])
    {
        if (this.isEmpty( ) )
        {
            return false
        }
        if(runner)
        {
            console.log(runner.value);
            arr.push(runner.value)
            this.printPerOrder(runner.left, arr)
            this.printPerOrder(runner.right, arr)

        }
        return arr
    }
}

// var node1= new Node(8);
// var node2= new Node(45);
// var node3= new Node(6);
// node1.right= node2;
// node2.left= node3;
var myBST= new BST();
// console.log(myBST.isEmpty())
// myBST.root= node1;
// console.log(myBST.Min())
// console.log(myBST.Max())
// console.log(myBST.find(9))
myBST.insertValue(10)
myBST.insertValue(25)
myBST.insertValue(7)
myBST.insertValue(4)
myBST.insertValue(16)
myBST.insertValue(19)
myBST.insertValue(5)
myBST.insertValue(8)
myBST.insertValue(18)
myBST.insertValue(96)
// console.log(myBST.MinRecursive(myBST.root));
// console.log(myBST.MaxRecursive(myBST.root));
// console.log(myBST.printPerOrder(myBST.root));

