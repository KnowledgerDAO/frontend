// import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-main";
import Footer from "@layout/footer/footer-main";
import Breadcrumb from "@components/breadcrumb";
import ContentArea from "@containers/content/list-table-content";
import ReviewTable from "@components/review-table";
import RewiewPendingArea from "@containers/content/list-review-content";

import contentsData from "../../../../data/contents.json";

const ReviewContentArea = () => (
    <Wrapper>
        <SEO pageTitle="Pending reviews" />
        <Header />
        <main id="main-content">
            <Breadcrumb
                pageTitle="Pending reviews"
                currentPage="Pending reviews"
            />
            <RewiewPendingArea
                data={{ contents: contentsData, isApprovalTable: true }}
            />
        </main>
        <Footer />
    </Wrapper>
);

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

// ApproveContent.propTypes = {};

export default ReviewContentArea;
