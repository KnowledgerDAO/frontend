// import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-main";
import Footer from "@layout/footer/footer-main";
import Breadcrumb from "@components/breadcrumb";
import ContentArea from "@containers/content/list-table-content";

import contentsData from "../../../../data/content-area.json";

const ApproveContent = () => (
    <Wrapper>
        <SEO pageTitle="List approvals" />
        <Header />
        <main id="main-content">
            <Breadcrumb
                pageTitle="List contents approved"
                currentPage="List contents approved"
            />
            <ContentArea
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

export default ApproveContent;
