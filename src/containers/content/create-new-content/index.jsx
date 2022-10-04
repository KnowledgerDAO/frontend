/* eslint-disable @next/next/no-img-element */
import { useState, useContext } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import Button from "@ui/button";
import ProductModal from "@components/modals/product-modal";
import ErrorText from "@ui/error-text";
import { toast } from "react-toastify";
import NiceSelect from "@ui/nice-select";
import StorageContext from "src/context/storageContext";
import Accordion from "@components/accordion";
import TagWidget from "@components/widgets/tag-widget";
import { BiAddToQueue } from "react-icons/bi";

const CreateNewContent = ({ className, space }) => {
    const [showProductModal, setShowProductModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState();
    const [hasImageError, setHasImageError] = useState(false);
    const [previewData, setPreviewData] = useState({});
    const [tokenType, setTokenType] = useState("");
    const [thumbnail, setThumbnail] = useState("");

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

    const watchPrice = watch("price", "0.0");
    const watchPrizePercentage = watch("prize_percentage", "0.0");
    const watchNetworkPercentage = watch("network_percentage", "0.0");

    const notify = () => toast("Your content has submitted");
    const handleProductModal = () => {
        setShowProductModal(false);
    };

    // This function will be triggered when the file field change
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
            console.log(selectedImage);
        }
    };

    const thumbNailChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setThumbnail(e.target.files[0]);
        }
    };

    const tokenChange = ({ text }) => {
        setTokenType(text);
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
            reset();
            setSelectedImage();
        }

        const a = await uploadFile({
            file: selectedImage,
            title: data.name,
            thumbnail: thumbnail,
        });

        console.log(a);
    };

    return (
        <>
            <div
                className={clsx(
                    "create-area",
                    space === 1 && "rn-section-gapTop",
                    className
                )}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-10">
                            {/* <div> */}
                            {/* <SectionCourseEdit> */}
                            {/* <Accordion> */}
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
                                                        Drag or choose your file
                                                        to upload
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
                                                            WEBP, MP4 or PDF.{" "}
                                                            <br /> Max 10Mb.
                                                        </p>
                                                    </label>
                                                </div>
                                                {hasImageError &&
                                                    !selectedImage && (
                                                        <ErrorText>
                                                            Image is required
                                                        </ErrorText>
                                                    )}
                                            </div>

                                            <div className="mt--100 mt_sm--30 mt_md--30 d-none d-lg-block">
                                                <h5> Note: </h5>
                                                <br />
                                                <span>
                                                    Price :{" "}
                                                    <strong>
                                                        {watchPrice} {tokenType}
                                                    </strong>
                                                </span>
                                                <br />
                                                <span>
                                                    Prize percentage :{" "}
                                                    <strong>
                                                        {watchPrizePercentage} %
                                                    </strong>
                                                </span>
                                                <br />

                                                <span>
                                                    Network percentage :{" "}
                                                    <strong>
                                                        {watchNetworkPercentage}{" "}
                                                        %
                                                    </strong>
                                                </span>
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
                                                                Product Name
                                                            </label>
                                                            <input
                                                                id="name"
                                                                placeholder="Type a name for your own content here ..."
                                                                {...register(
                                                                    "name",
                                                                    {
                                                                        required:
                                                                            "Product name is required",
                                                                    }
                                                                )}
                                                            />
                                                            {errors.name && (
                                                                <ErrorText>
                                                                    {
                                                                        errors
                                                                            .name
                                                                            ?.message
                                                                    }
                                                                </ErrorText>
                                                            )}
                                                        </div>
                                                    </div>

                                                    <div className="col-md-12">
                                                        <div className="input-box pb--20">
                                                            <label
                                                                htmlFor="price"
                                                                className="form-label"
                                                            >
                                                                Thumbnail
                                                            </label>
                                                            <input
                                                                name="file"
                                                                id="file"
                                                                type="file"
                                                                className="inputfile"
                                                                data-multiple-caption="{count} files selected"
                                                                multiple
                                                                onChange={
                                                                    thumbNailChange
                                                                }
                                                            />

                                                            {errors.price && (
                                                                <ErrorText>
                                                                    {
                                                                        errors
                                                                            .price
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
                                                                Summary
                                                            </label>
                                                            <textarea
                                                                id="summary"
                                                                rows="3"
                                                                placeholder="Type a brief summary of your product here ..."
                                                                {...register(
                                                                    "summary",
                                                                    {
                                                                        required:
                                                                            "Summary is required",
                                                                    }
                                                                )}
                                                            />
                                                            {errors.summary && (
                                                                <ErrorText>
                                                                    {
                                                                        errors
                                                                            .summary
                                                                            ?.message
                                                                    }
                                                                </ErrorText>
                                                            )}
                                                        </div>
                                                    </div>

                                                    <div className="col-md-12">
                                                        <div className="input-box pb--20">
                                                            <label
                                                                htmlFor="token"
                                                                className="form-label"
                                                            >
                                                                Token Type
                                                            </label>
                                                            <NiceSelect
                                                                id="token"
                                                                name="token"
                                                                options={[
                                                                    {
                                                                        value: "ethereum address",
                                                                        text: "ETH",
                                                                    },
                                                                    {
                                                                        value: "dollar usdc address",
                                                                        text: "USDC",
                                                                    },
                                                                    {
                                                                        value: "dollar usdt address",
                                                                        text: "USDT",
                                                                    },
                                                                ]}
                                                                placeholder="Choose the token you want to charge buyers"
                                                                onChange={
                                                                    tokenChange
                                                                }
                                                            />
                                                            {errors.token && (
                                                                <ErrorText>
                                                                    {
                                                                        errors
                                                                            .token
                                                                            ?.message
                                                                    }
                                                                </ErrorText>
                                                            )}
                                                        </div>
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div className="input-box pb--20">
                                                            <label
                                                                htmlFor="price"
                                                                className="form-label"
                                                            >
                                                                Item Price in
                                                                ERC20 token
                                                            </label>
                                                            <input
                                                                id="price"
                                                                placeholder="e. g. `2 eth`"
                                                                type="number"
                                                                {...register(
                                                                    "price",
                                                                    {
                                                                        setValueAs:
                                                                            (
                                                                                v
                                                                            ) =>
                                                                                parseInt(
                                                                                    v,
                                                                                    10
                                                                                ),
                                                                        min: {
                                                                            value: 0.1,
                                                                            message:
                                                                                "The minimum value is 0.1",
                                                                        },
                                                                        required:
                                                                            "Price is required",
                                                                    }
                                                                )}
                                                            />
                                                            {errors.price && (
                                                                <ErrorText>
                                                                    {
                                                                        errors
                                                                            .price
                                                                            ?.message
                                                                    }
                                                                </ErrorText>
                                                            )}
                                                        </div>
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div className="input-box pb--20">
                                                            <label
                                                                htmlFor="prize_percentage"
                                                                className="form-label"
                                                            >
                                                                Prize percentage
                                                            </label>
                                                            <input
                                                                id="prize_percentage"
                                                                placeholder="% able to to pay reviewers"
                                                                type="number"
                                                                {...register(
                                                                    "prize_percentage",
                                                                    {
                                                                        min: {
                                                                            value: 1,
                                                                            message:
                                                                                "The minimum value is 1%",
                                                                        },
                                                                        max: {
                                                                            value: 3,
                                                                            message:
                                                                                "The minimum value is 3%",
                                                                        },
                                                                        required:
                                                                            "Prize percentage is required",
                                                                    }
                                                                )}
                                                            />
                                                            {errors.prize_percentage && (
                                                                <ErrorText>
                                                                    {
                                                                        errors
                                                                            .prize_percentage
                                                                            ?.message
                                                                    }
                                                                </ErrorText>
                                                            )}
                                                        </div>
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div className="input-box pb--20">
                                                            <label
                                                                htmlFor="network_percentage"
                                                                className="form-label"
                                                            >
                                                                Network
                                                                percentage
                                                            </label>
                                                            <input
                                                                id="network_percentage"
                                                                placeholder="% to bonuses the network"
                                                                type="number"
                                                                disabled
                                                                {...register(
                                                                    "network_percentage",
                                                                    {
                                                                        value: 3.0,
                                                                        min: {
                                                                            value: 3,
                                                                            message:
                                                                                "The minimum value is 3%",
                                                                        },
                                                                        max: {
                                                                            value: 3,
                                                                            message:
                                                                                "The minimum value is 3%",
                                                                        },
                                                                        required:
                                                                            "Network percentage is required",
                                                                    }
                                                                )}
                                                            />
                                                            {errors.network_percentage && (
                                                                <ErrorText>
                                                                    {
                                                                        errors
                                                                            .network_percentage
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
                            {/* </Accordion> */}
                            <div class="add-lecture-card ">
                                <div className="button-group lecture-item filters-button-group d-flex justify-content-start mt_md--30 mt_sm--30 ml--15">
                                    <button
                                        type="button"
                                        // className={clsx(
                                        //     button === active &&
                                        //         "is-checked"
                                        // )}
                                        // onClick={() =>
                                        //     activeHandler(button)
                                        // }
                                    >
                                        <BiAddToQueue /> Lecture
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showProductModal && (
                <ProductModal
                    show={showProductModal}
                    handleModal={handleProductModal}
                    data={previewData}
                />
            )}
        </>
    );
};

CreateNewContent.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1]),
};

CreateNewContent.defaultProps = {
    space: 1,
};

export default CreateNewContent;
