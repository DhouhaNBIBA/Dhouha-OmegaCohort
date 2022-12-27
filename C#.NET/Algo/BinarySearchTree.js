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
}

var node1= new Node(8);
var node2= new Node(45);
var node3= new Node(6);
node1.right= node2;
node2.left= node3;
var myBST= new BST();
console.log(myBST.isEmpty())
myBST.root= node1;
console.log(myBST.Min())
console.log(myBST.Max())
console.log(myBST.find(9))


