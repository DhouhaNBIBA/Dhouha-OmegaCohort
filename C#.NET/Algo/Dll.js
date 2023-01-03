class Node
{
    constructor(value){
        this.value=value
        this.next= null
        this.previous=null
    }
}
class Dll
{
    constructor()
    {
        this.head=null
        this.tail= null
    }
    isEmpty()
    {
        if(this.head===null){return true;}
        else{return false}
    }
    addAtFirst(value)
    {
        if(this.isEmpty()){
            this.head = new Node(value);
            this.tail=this.head
            }
            else
            {
                let newNode=new Node(value)
                this.head.previous = newNode;
                newNode.next=this.head;
                this.head=newNode
            }
    }
    addAtBack(value)
    {
        if(this.isEmpty()){
            this.tail = new Node(value);
            this.head=this.tail
            }
            else
            {
                let newNode=new Node(value)
                this.tail.next = newNode;
                newNode.previous=this.tail;
                this.tail=newNode
            }
    }
    removeAtFirst()
    {

    }
    removeAtBack()
    {

    }
}

var myDll = new Dll();
// myDll.addAtFirst(30)
// myDll.addAtFirst(20)
// // myDll.addAtFirst(10)
// myDll.
myDll.addAtBack(30)
myDll.addAtBack(20)
myDll.addAtBack(10)
console.log(myDll);