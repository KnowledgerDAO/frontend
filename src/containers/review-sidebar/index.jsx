import PropTypes from "prop-types";
import clsx from "clsx";
import CategoryWidget from "@widgets/category-widget";
import RecentPostsWidget from "@widgets/recent-posts-widget";
import TagWidget from "@widgets/tag-widget";
import PlaceBet from "@components/product-details/place-bet";

const ReviewSidebar = ({
    className,
    categories,
    recentPosts,
    tags,
    rootPage,
}) => (
    <aside className={clsx("rwt-sidebar", className)}>
        {categories?.length > 0 && (
            <CategoryWidget categories={categories} rootPage={rootPage} />
        )}
        {/* <PlaceBet
            highest_bid={34}
            auction_date="05-12-2023"
        /> */}
        {/* {tags?.length > 0 && <TagWidget tags={tags} rootPage={rootPage} />} */}
    </aside>
);

ReviewSidebar.propTypes = {
    className: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.shape({})),
    recentPosts: PropTypes.arrayOf(PropTypes.shape({})),
    tags: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
    rootPage: PropTypes.string,
};

export default ReviewSidebar;
