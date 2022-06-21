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
}) => {
    const cat = categories.map((cat) => {
        return { title: cat, slug: cat };
    });
    return (
        <aside className={clsx("rwt-sidebar", className)}>
            {categories?.length > 0 && (
                <CategoryWidget categories={cat} rootPage={rootPage} />
            )}
        </aside>
    );
};

ReviewSidebar.propTypes = {
    className: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.shape({})),
    recentPosts: PropTypes.arrayOf(PropTypes.shape({})),
    tags: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
    rootPage: PropTypes.string,
};

export default ReviewSidebar;
