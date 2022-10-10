import React, { useState, useContext } from "react";
import Button from "@ui/button";
import ErrorText from "@ui/error-text";
import StorageContext from "src/context/storageContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function CourseForm({ changeTitle, index, addVideoCourse }) {
    const [selectedImage, setSelectedImage] = useState();
    const [hasImageError, setHasImageError] = useState(false);
    const [state, setState] = useState({
        id: index,
        lectureBio: "",
        lectureName: "",
        file: "",
    });

    const { uploadFile } = useContext(StorageContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
    } = useForm({
        mode: "onChange",
    });

    const notify = () => toast("Your lecture has been published");

    // This function will be triggered when the file field change
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
            setState({ ...state, file: e.target.files[0] });
            console.log(state);
        }
    };

    const onSubmit = async (data, e) => {
        e.preventDefault();
        const { target } = e;
        const submitBtn =
            target.localName === "span" ? target.parentElement : target;
        const isPreviewBtn = submitBtn.dataset?.btn;
        setHasImageError(!selectedImage);
        if (isPreviewBtn && selectedImage) {
            setPreviewData({ ...data, image: selectedImage });
            setShowProductModal(true);
        }
        if (!isPreviewBtn) {
            notify();
            // setSelectedImage();
        }

        const { url } = await uploadFile({ file: state.file });

        console.log(url);

        addVideoCourse({ ...data, file: url });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-40">
                    <form action="#" onSubmit={handleSubmit(onSubmit)}>
                        <div className="container pt-3">
                            <div className="row g-5">
                                <div className="col-lg-3 offset-1 ml_md--0 ml_sm--0">
                                    <div className="upload-area">
                                        <div className="upload-formate mb--30">
                                            <h6 className="title">
                                                Upload file
                                            </h6>
                                            <p className="formate">
                                                Drag or choose your file to
                                                upload
                                            </p>
                                        </div>

                                        <div className="brows-file-wrapper">
                                            <input
                                                name="file"
                                                id="file"
                                                type="file"
                                                className="inputfile"
                                                data-multiple-caption="{count} files selected"
                                                multiple
                                                onChange={imageChange}
                                            />

                                            <label
                                                htmlFor="file"
                                                title="No File Choosen"
                                            >
                                                <i className="feather-upload" />
                                                <span className="text-center">
                                                    {selectedImage
                                                        ? selectedImage.name
                                                        : "Choose a File"}
                                                </span>
                                                <p className="text-center mt--10">
                                                    MP4 or PDF. <br /> Max 10Mb.
                                                </p>
                                            </label>
                                        </div>
                                        {hasImageError && !selectedImage && (
                                            <ErrorText>
                                                Image is required
                                            </ErrorText>
                                        )}
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="form-wrapper-one">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="input-box pb--20">
                                                    <label
                                                        htmlFor="name"
                                                        className="form-label"
                                                    >
                                                        Lecture Name
                                                    </label>
                                                    <input
                                                        id="name"
                                                        placeholder="Type a name for your own content here ..."
                                                        {...register(
                                                            "lectureName",
                                                            {
                                                                required:
                                                                    "Product name is required",
                                                                onChange: (
                                                                    e
                                                                ) => {
                                                                    setState({
                                                                        ...state,
                                                                        lectureName:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    });
                                                                    console.log(
                                                                        state
                                                                    );
                                                                    changeTitle(
                                                                        index,
                                                                        e.target
                                                                            .value
                                                                    );
                                                                },
                                                            }
                                                        )}
                                                    />
                                                    {errors.name && (
                                                        <ErrorText>
                                                            {
                                                                errors.name
                                                                    ?.message
                                                            }
                                                        </ErrorText>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="input-box pb--20">
                                                    <label
                                                        htmlFor="summary"
                                                        className="form-label"
                                                    >
                                                        Lecture Bio
                                                    </label>
                                                    <textarea
                                                        id="summary"
                                                        rows="3"
                                                        placeholder="Type a brief summary of your product here ..."
                                                        {...register(
                                                            "lectureBio",
                                                            {
                                                                required:
                                                                    "Lecture Bio is required",
                                                                onChange: (
                                                                    e
                                                                ) => {
                                                                    setState({
                                                                        ...state,
                                                                        lectureBio:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    });
                                                                    console.log(
                                                                        state
                                                                    );
                                                                },
                                                            }
                                                        )}
                                                    />
                                                    {errors.summary && (
                                                        <ErrorText>
                                                            {
                                                                errors.summary
                                                                    ?.message
                                                            }
                                                        </ErrorText>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="col-md-12 col-xl-12 mt_lg--15 mt_md--15 mt_sm--15">
                                                <div className="input-box">
                                                    <Button
                                                        type="submit"
                                                        fullwidth
                                                    >
                                                        Publish content
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CourseForm;
