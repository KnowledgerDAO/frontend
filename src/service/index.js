import web3storageClient from "./web3storage";


class Web3Storage {
    constructor(client){
        this.client = client;
    } 

    async store(files) {
        const cid = await this.client.put(files)
        return cid
    }


    async retrieve(cid){
        const arr = []
        const res = await this.client.get(cid)
        if (!res.ok) {
          throw new Error(`failed to get ${cid}`)
        }
        
        const files = await res.files()
         for (const file of files) {
            arr.push({path: file.name, cid: file.cid, size:file.size})
        }

        return arr;
        

    }


    async list(){
       const arr = []
        for await (const upload of this.client.list()) {
            arr.push({name: upload.name, cid:upload.cid ,dagSize: upload.dagSize  })
          }
        return arr;

    }
}



export default new Web3Storage(web3storageClient)