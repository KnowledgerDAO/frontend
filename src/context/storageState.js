import React from "react";
import StorageContext from "./storageContext";
import axios from "axios";
import web3storage from "src/service";
import { makeFileObjects } from "src/helper/file-parser";
import { create } from "ipfs-http-client";
const client = create(new URL("http://20.121.24.4:5001"));

function StorageState({ children }) {
    const uploadFile = async ({ file, title, thumbnail }) => {
        const files = makeFileObjects(file, thumbnail);
        // const cid = await web3storage.store(files);

        const obj = await client.add(file);
        const thumbnailIpfs = await client.add(thumbnail);
        console.log(obj);
        console.log(thumbnailIpfs);

        const url = `https://ipfs.io/ipfs/${obj.cid}?filename=${file.name}`
        const thumbnail_url = `https://ipfs.io/ipfs/${thumbnailIpfs.cid}?filename=${thumbnail.name}`;

        await axios.post("http://localhost:3000/api", {
            title,
            video_url: url,
            thumbnail_url,
        });
    };
    
    const retrieveFile = () => {};

    return (
        <StorageContext.Provider value={{ uploadFile }}>
            {children}
        </StorageContext.Provider>
    );
}

export default StorageState;
