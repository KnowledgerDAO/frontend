// import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-main";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import NewContent from "@containers/content/create-new-content";

const CreateContent = () => (
    <Wrapper>
        <SEO pageTitle="Publish content" />
        <Header />
        <main id="main-content">
            <Breadcrumb
                pageTitle="Mint own content"
                currentPage="Mint own content"
            />
            <NewContent />
        </main>
        <Footer />
    </Wrapper>
);

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

// CreateContent.propTypes = {};

export default CreateContent;
