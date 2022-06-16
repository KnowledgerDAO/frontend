// import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-main";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";

const ListContent = () => (
    <Wrapper>
        <SEO pageTitle="List your contents" />
        <Header />
        <main id="main-content">
            <Breadcrumb pageTitle="List contents" currentPage="List contents" />
        </main>
        <Footer />
    </Wrapper>
);

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

// ListContent.propTypes = {};

export default ListContent;
