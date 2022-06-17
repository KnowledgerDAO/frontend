import Image from "next/image";
import PropTypes from "prop-types";
import clsx from "clsx";
import Anchor from "@ui/anchor";
import { BsPlay } from "react-icons/bs";
import { AiFillPlaySquare } from "react-icons/ai";
const TopSeller = ({ name, time, path, image, eth, isVarified }) => (
    <div className="top-seller-inner-one">
        <div className="top-seller-wrapper">
            {image?.src && (
                <div>
                    <AiFillPlaySquare
                        width={image?.width || 50}
                        height={image?.height || 50}
                    />
                </div>
            )}
            <div className="top-seller-content">
                <span>
                    Part 1

                    <Anchor path={path}>{name}</Anchor>
                </span>
                {time && <span className="count-number">5 min</span>}
            </div>
        </div>
    </div>
);

TopSeller.propTypes = {
    name: PropTypes.string.isRequired,
    time: PropTypes.string,
    path: PropTypes.string.isRequired,
    eth: PropTypes.string,
    image: PropTypes.shape({
        src: PropTypes.oneOfType([PropTypes.shape(), PropTypes.string])
            .isRequired,
        alt: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
    }).isRequired,
    isVarified: PropTypes.bool,
};

export default TopSeller;
