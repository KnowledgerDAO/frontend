/* eslint-disable @next/next/no-img-element */
import { useState, useContext, useEffect } from "react";
import storageContext from "src/context/storageContext";
import Image from "next/image";

const EditProfileImage = ({ addThumbnail }) => {
    const [selectedImage, setSelectedImage] = useState({
        cover: "",
    });
    const imageChange = (e) => {
        setSelectedImage({ cover: e.target.files[0] });
        addThumbnail(e.target.files[0]);
    };

    return (
        <div className="nuron-information">
            <div className="profile-change row g-5">
                <div className="profile-left right col-lg-8">
                    <div className="profile-image mb--30">
                        <h6 className="title">Change Your Cover Photo</h6>
                        <div className="img-wrap">
                            {selectedImage?.cover ? (
                                <img
                                    src={URL.createObjectURL(
                                        selectedImage.cover
                                    )}
                                    alt=""
                                    data-black-overlay="6"
                                />
                            ) : (
                                <Image
                                    id="rbtinput2"
                                    src="/images/profile/cover-01.jpg"
                                    alt="Profile-NFT"
                                    layout="fill"
                                />
                            )}
                        </div>
                    </div>
                    <div className="button-area">
                        <div className="brows-file-wrapper">
                            <input
                                name="cover"
                                id="nipa"
                                type="file"
                                onChange={imageChange}
                            />
                            <label htmlFor="nipa" title="No File Choosen">
                                <span className="text-center color-white">
                                    Upload Cover
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfileImage;
