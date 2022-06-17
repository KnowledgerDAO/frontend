// import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-main";
import Footer from "@layout/footer/footer-main";
import Breadcrumb from "@components/breadcrumb";

const ListContentMarketplace = () => (
    <Wrapper>
        <SEO pageTitle="Content Marketplace" />
        <Header />
        <main id="main-content">
            <Breadcrumb
                pageTitle="All available contents"
                currentPage="All available contents"
            />
        </main>
        <Footer />
    </Wrapper>
);

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

// ListContentMarketplace.propTypes = {};

export default ListContentMarketplace;
