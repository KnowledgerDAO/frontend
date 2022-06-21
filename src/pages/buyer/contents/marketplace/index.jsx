// import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-main";
import Footer from "@layout/footer/footer-main";
import Breadcrumb from "@components/breadcrumb";
import ContentArea from "@containers/content/list-content";

import contentData from "../../../../data/contents.json";

const ListContentMarketplace = () => (
    <Wrapper>
        <SEO pageTitle="Available contents" />
        <Header />
        <main id="main-content">
            <Breadcrumb pageTitle="Buy content" currentPage="Buy content" />
            <ContentArea data={{ products: contentData }} path="/product" />
        </main>
        <Footer />
    </Wrapper>
);

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

// ListContentMarketplace.propTypes = {};

export default ListContentMarketplace;
