import PropTypes from "prop-types";
import Anchor from "@ui/anchor";
import { containsObject } from "@utils/methods";
import { BsPlay } from "react-icons/bs";

const CategoryWidget = ({ categories, rootPage, coursePlaylist, slug }) => {
    const cats = [];
    categories?.forEach((cat) => {
        const obj = {
            ...cat,
            count: 1,
        };
        const objIndex = containsObject(obj, cats);
        if (objIndex !== -1) {
            const prevCount = cats[objIndex].count;
            cats[objIndex] = {
                title: cat.title,
                slug: cat.slug,
                count: prevCount + 1,
            };
        } else {
            cats.push(obj);
        }
    });

    return (
        <div className="rbt-single-widget widget_categories">
            <h3 className="title">Course Content</h3>
            <div className="inner">
                <ul className="category-list">
                    {coursePlaylist?.map((cat, i) => (
                        <li key={cat.slug}>
                            <Anchor
                                path={`/publisher/contents/video/${slug}?cid=${coursePlaylist[i].cid}`}
                            >
                                <span className="left-content">
                                    <BsPlay /> {cat.lectureName}
                                </span>

                                <span className="count-text">Part {i}</span>
                            </Anchor>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

CategoryWidget.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({})),
    rootPage: PropTypes.string,
};

CategoryWidget.defaultProps = {
    rootPage: "/blog",
};

export default CategoryWidget;
