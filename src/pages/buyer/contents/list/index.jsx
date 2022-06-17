// import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-main";
import Footer from "@layout/footer/footer-main";
import Breadcrumb from "@components/breadcrumb";

const ListPurchasedContents = () => (
    <Wrapper>
        <SEO pageTitle="List your purchases" />
        <Header />
        <main id="main-content">
            <Breadcrumb
                pageTitle="List purchases"
                currentPage="List purchases"
            />
        </main>
        <Footer />
    </Wrapper>
);

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

// ListPurchasedContents.propTypes = {};

export default ListPurchasedContents;
