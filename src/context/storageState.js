import React from "react";
import StorageContext from "./storageContext";
import axios from "axios";
import { create } from "ipfs-http-client";
const client = create(new URL("http://20.121.24.4:5001"));

function StorageState({ children }) {
    const uploadFile = async ({ file }) => {
        const obj = await client.add(file);

        const url = `https://ipfs.io/ipfs/${obj.cid}?filename=${file.name}`;

        return { url };
    };

    const saveCourse = async (data) => {
        await axios.post("http://localhost:3000/api", data);
    };

    const retrieveFile = () => {};

    return (
        <StorageContext.Provider value={{ uploadFile, saveCourse }}>
            {children}
        </StorageContext.Provider>
    );
}

export default StorageState;
