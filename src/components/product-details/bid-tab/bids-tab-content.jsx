import PropTypes from "prop-types";
import TopSeller from "@components/top-seller/layout-02";
import { IDType, ImageType } from "@utils/types";

const BidsTabContent = ({ bids, product }) => (
    <div>
        {product?.map((bid, key) => (
            <TopSeller
                key={bid.id}
                name={bid}
                eth={432}
                path="fsdf"
                time={bid.publishedAt}
                image={{
                    src: "432",
                    width: 44,
                    height: 44,
                }}
            />
        ))}
    </div>
);

BidsTabContent.propTypes = {
    bids: PropTypes.arrayOf(
        PropTypes.shape({
            id: IDType.isRequired,
            user: PropTypes.shape({
                name: PropTypes.string.isRequired,
                slug: PropTypes.string.isRequired,
                image: ImageType.isRequired,
            }),
            amount: PropTypes.string.isRequired,
            bidAt: PropTypes.string.isRequired,
        })
    ),
    product: PropTypes.arrayOf(PropTypes.shape({})),
};

export default BidsTabContent;
