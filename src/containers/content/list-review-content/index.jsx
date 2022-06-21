import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Pagination from "@components/pagination-02";
import ReviewTable from "@components/review-table";

const POSTS_PER_PAGE = 5;

const RewiewPendingArea = ({ space, className, data }) => {
    const [contents, setContents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const numberOfPages = Math.ceil(data.contents.length / POSTS_PER_PAGE);
    const paginationHandler = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const creatorHandler = useCallback(() => {
        const start = (currentPage - 1) * POSTS_PER_PAGE;
        setContents(data.contents.slice(start, start + POSTS_PER_PAGE));
    }, [currentPage, data.contents]);

    useEffect(() => {
        creatorHandler();
    }, [currentPage, creatorHandler]);
    return (
        <div
            className={clsx(
                "rn-upcoming-area",
                space === 1 && "rn-section-gap",
                className
            )}
        >
            <div className="container">
                <ReviewTable
                    title={data.isApprovalTable ? "Approvals" : "Rejections"}
                    className={clsx("mt--80")}
                    isApprovalTable={data.isApprovalTable}
                    contents={contents.filter(
                        (content) => content.approved === data.isApprovalTable
                    )}
                />
                <div className="row">
                    <div
                        className="col-lg-12"
                        data-sal="slide-up"
                        data-sal-delay="950"
                        data-sal-duration="800"
                    >
                        <Pagination
                            currentPage={currentPage}
                            numberOfPages={numberOfPages}
                            onClick={paginationHandler}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

RewiewPendingArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        isApprovalTable: PropTypes.bool.isRequired,
        contents: PropTypes.arrayOf(
            PropTypes.shape({
                date: PropTypes.string,
                projects: PropTypes.arrayOf(
                    PropTypes.shape({
                        id: PropTypes.number,
                        project: PropTypes.string,
                        time: PropTypes.string,
                        count: PropTypes.string,
                        price: PropTypes.string,
                        extras: PropTypes.string,
                    })
                ),
            })
        ),
    }),
};

RewiewPendingArea.defaultProps = {
    space: 1,
};
export default RewiewPendingArea;
