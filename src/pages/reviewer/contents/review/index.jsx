// import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-main";
import Footer from "@layout/footer/footer-main";
import Breadcrumb from "@components/breadcrumb";

const ReviewContent = () => (
    <Wrapper>
        <SEO pageTitle="Review pending contents" />
        <Header />
        <main id="main-content">
            <Breadcrumb
                pageTitle="Review content"
                currentPage="Review content"
            />
        </main>
        <Footer />
    </Wrapper>
);

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

// ReviewContent.propTypes = {};

export default ReviewContent;
