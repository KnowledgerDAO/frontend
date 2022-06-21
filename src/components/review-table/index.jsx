import PropTypes from "prop-types";
import clsx from "clsx";
import Button from "@ui/button";
import Link from "next/link";

const ReviewTable = ({ className, title, isApprovalTable, contents }) => (
    <div className={clsx("row", className)}>
        <div className="col-12">
            <div className="table-title-area d-flex">
                <h3>Pending to be reviewed</h3>
            </div>

            <div className="box-table table-responsive">
                <table className="table upcoming-projects">
                    <thead>
                        <tr>
                            <th>
                                <span>Title</span>
                            </th>
                            <th>
                                <span>Published at</span>
                            </th>
                            <th>
                                <span>Currency</span>
                            </th>
                            <th>
                                <span>Price</span>
                            </th>
                            <th>
                                <span>Review</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {contents?.map((item, i) => (
                            <tr
                                key={item.id}
                                className={i % 2 === 0 ? "color-light" : ""}
                            >
                                <td>
                                    <span>{item.title}</span>
                                </td>
                                <td>
                                    <span
                                        className={
                                            isApprovalTable
                                                ? "color-green"
                                                : "color-danger"
                                        }
                                    >
                                        {item.published_at}
                                    </span>
                                </td>
                                <td>
                                    <span className="color-info">
                                        {item.price.currency}
                                    </span>
                                </td>
                                <td>
                                    <span className="color-info">
                                        {item.price.amount}
                                    </span>
                                </td>

                                <td>
                                    <Link href="/reviewer/contents/review/blog-9">
                                        <Button color={"primary-alta"}>
                                            Review
                                        </Button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);

ReviewTable.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    isApprovalTable: PropTypes.bool.isRequired,
    contents: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            published_at: PropTypes.string,
            price: PropTypes.shape({
                amount: PropTypes.string,
                currency: PropTypes.string,
            }),
            categories: PropTypes.arrayOf(PropTypes.string),
            rejectedReason: PropTypes.string,
        })
    ),
};
export default ReviewTable;
