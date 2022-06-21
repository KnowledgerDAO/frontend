import PropTypes from "prop-types";
import clsx from "clsx";
import CategoryWidget from "@widgets/category-widget";
import RecentPostsWidget from "@widgets/recent-posts-widget";
import TagWidget from "@widgets/tag-widget";

const VideoSidebar = ({
    className,
    categories,
    recentPosts,
    tags,
    rootPage,
}) => {
    const cat = categories.map((c) => ({ title: c, slug: c }));

    return (
        <aside className={clsx("rwt-sidebar", className)}>
            {categories?.length > 0 && (
                <CategoryWidget categories={cat} rootPage={rootPage} />
            )}

            {tags?.length > 0 && <TagWidget tags={tags} rootPage={rootPage} />}
        </aside>
    );
};

VideoSidebar.propTypes = {
    className: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.shape({})),
    recentPosts: PropTypes.arrayOf(PropTypes.shape({})),
    tags: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
    rootPage: PropTypes.string,
};

export default VideoSidebar;
