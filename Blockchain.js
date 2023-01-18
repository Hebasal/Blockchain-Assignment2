import Block from './app.js'
class Blockchain{

list =[]

constructor(){

if(this.list.length ==0){
this.list.push(new Block('Genesis block','N/A',0,0))
}


}

addBlock( data){
    const previousHash= this.getPreviousBlockHash()
    // console.log()
    this.list.push(new Block(data,previousHash,0,this.list.length))
    // console.log(this.list)
    return this.list
    
}
getPreviousBlockHash(){
    return this.list[this.list.length-1].hash
   
}

print(){
  //  console.log(this.list)
}

validateBlockchain(){
for(let i=0;i<this.list.length;i++)
{
    var len = this.list.length;
    var current = this.list[i];
    var next = this.list[(i+1)%len];
    if(current.hash === next.previousHash){
        console.log("current "+current.hash)
        console.log("previous "+next.previousHash)
        console.log('Block number '+ i +' equals the prevoies hash')
    }

}
}
}
const blockchain= new Blockchain();
blockchain.addBlock('second block')
blockchain.addBlock('Thired block')
blockchain.addBlock('Fourth block')
console.log(blockchain.list)
blockchain.validateBlockchain()