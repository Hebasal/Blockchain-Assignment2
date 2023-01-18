//import { createHash } from "crypto"
import sha256 from "crypto-js/sha256.js"
export default class Block {
    hash
    data
    previousHash
    nonce
    height
    timestamp

    constructor( data, previousHash, nonce, height) {

        this.hash = this.Hash(data) // change it to the hash function
        this.data = data
        this.previousHash = previousHash
        this.nonce = nonce
        this.height = height
        this.timestamp = new Date()
        
    }
    

       Hash (data) { 

        const hash = sha256(data).toString()
                           

        
        return hash;

    
    }
}
