// import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-main";
import Footer from "@layout/footer/footer-main";
import Breadcrumb from "@components/breadcrumb";

const RejectContent = () => (
    <Wrapper>
        <SEO pageTitle="List your rejections" />
        <Header />
        <main id="main-content">
            <Breadcrumb
                pageTitle="List contents rejected"
                currentPage="List contents rejected"
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
