//Singly Linked List

class Node{
    constructor(value){
        this.value=value
        this.next= null
    }
}

class SSL{
    constructor(){
        this.head=null
    }
    isEmpty(){
        if(this.head===null){return true;}
        else{return false}
        // let c=true
        // if(this.head!=null){
        //     c==false
        // }
        // return c
    }
    addToBack(value){
        if(this.isEmpty()){
        this.head = new Node(value);
        }
        else{
            let runner= this.head
            while (runner.next !==null) {
                runner= runner.next;
            }
            runner.next= new Node(value)
        }
        return this
    }
    read(){
        if(this.isEmpty()){
                return false
            }
        else{
            let R= this.head;
            while(R!==null){
                console.log(R.value);
                R=R.next
            }}
        }
    find(value){
        while(this.head!==null){
            if(this.head.next.value===value || this.head.value===value){
                return true
            }
            else{
                return false
            }
        }
    }
    removeAtFront(){

        if(this.isEmpty()){
            return false
        }
        else{
                this.head = this.head.next;
                return this
        }
        }
        
    delete(value){
        let runner=this.head
        if(this.isEmpty()){
            return false
        }
        while (runner.next) {
            if(runner.value===value || runner.next.value===value){
                runner.next= runner.next.next
                // delete runner.value
                return this
            }
            runner=runner.next
        }
    }
    
    size(){
        let runner=this.head
        let count=0
        while(runner.next!==null)
        {
            runner=runner.next
            count++
        }
        return count
    }
    insertAtFront(value){
        let newNode= new Node(value)
        if(this.isEmpty()){
            this.head = new Node(value);
            }
            else{
                newNode.next=this.head
                this.head=newNode
            }
        return this
    }
    reverse(node){
        let current = this.head;
        let prev=null;
        let next=null;
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
        return this.head;
    }

    }



// var firstNode= new Node(5);
// var secondNode = new Node(13);
// firstNode.next= secondNode;
// var firstSSL= new SSL();
// firstSSL.head= firstNode
// console.log(firstNode);

var mySLL = new SSL();
// console.log(mySLL);
mySLL.addToBack(11111)
mySLL.addToBack(22222)
mySLL.addToBack(33333)
mySLL.addToBack(44444);
// console.log(mySLL.read(mySLL));
// // console.log( mySLL.find(33));
// mySLL.read(mySLL);
// // console.log(mySLL.removeAtFront());
// console.log(mySLL.delete(33333));
// mySLL.read(mySLL);
// console.log("the count is "+ mySLL.size());
mySLL.insertAtFront(9999)
mySLL.insertAtFront(8888)
mySLL.read(mySLL);
console.log("the count is ");
mySLL.reverse(mySLL);
mySLL.read(mySLL);
