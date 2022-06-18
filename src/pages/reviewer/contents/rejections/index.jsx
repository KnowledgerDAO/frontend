// import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-main";
import Footer from "@layout/footer/footer-main";
import Breadcrumb from "@components/breadcrumb";
import ContentArea from "@containers/content/list-table-content";

import contentsData from "../../../../data/content-area.json";

const RejectContent = () => (
    <Wrapper>
        <SEO pageTitle="List rejections" />
        <Header />
        <main id="main-content">
            <Breadcrumb
                pageTitle="List contents rejected"
                currentPage="List contents rejected"
            />
            <ContentArea
                data={{ contents: contentsData, isApprovalTable: false }}
            />
        </main>
        <Footer />
    </Wrapper>
);

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

// RejectContent.propTypes = {};

export default RejectContent;
