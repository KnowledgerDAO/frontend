import React from "react";
import StorageContext from "./storageContext";
import axios from "axios";
import { create } from "ipfs-http-client";
const client = create(new URL(process.env.IPFS_HOST));

function StorageState({ children }) {
    const uploadFile = async ({ file }) => {
        const obj = await client.add(file);

        const url = `https://ipfs.io/ipfs/${obj.cid}?filename=${file.name}`;

        return { url, cid: `${obj.cid}` };
    };

    const saveCourse = async (data) => {
        await axios.post(process.env.IPFS_BACKEND_API_URL, data);
    };

    const retrieveFile = () => {};

    return (
        <StorageContext.Provider value={{ uploadFile, saveCourse }}>
            {children}
        </StorageContext.Provider>
    );
}

export default StorageState;
