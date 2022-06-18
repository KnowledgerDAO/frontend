import PropTypes from "prop-types";
import clsx from "clsx";

const ContentTable = ({ className, title, isApprovalTable, contents }) => (
    <div className={clsx("row", className)}>
        <div className="col-12">
            <div className="table-title-area d-flex">
                <i
                    className={
                        isApprovalTable ? "feather-check" : "feather-lock"
                    }
                />
                <h3>{title}</h3>
            </div>

            <div className="box-table table-responsive">
                <table className="table upcoming-projects">
                    <thead>
                        <tr>
                            <th>
                                <span>Title</span>
                            </th>
                            <th>
                                <span>Publisher at</span>
                            </th>
                            <th>
                                <span>Currency</span>
                            </th>
                            <th>
                                <span>Price</span>
                            </th>
                            <th>
                                <span>Categories</span>
                            </th>
                            $
                            {!isApprovalTable ? (
                                <th>
                                    <span>Reason</span>
                                </th>
                            ) : (
                                ""
                            )}
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
                                    <span>{item.categories.join(", ")}</span>
                                </td>
                                $
                                {!isApprovalTable ? (
                                    <td>
                                        <span>{item.rejectedReason}</span>
                                    </td>
                                ) : (
                                    ""
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);

ContentTable.propTypes = {
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
export default ContentTable;
