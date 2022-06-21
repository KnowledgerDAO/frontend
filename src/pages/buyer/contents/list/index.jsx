// import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-main";
import Footer from "@layout/footer/footer-main";
import Breadcrumb from "@components/breadcrumb";
import ContentArea from "@containers/content/list-content";
import contentData from "../../../../data/contents.json";


const ListPurchasedContents = () => (
    <Wrapper>
        <SEO pageTitle="List your purchased contents" />
        <Header />
        <main id="main-content">
            <Breadcrumb
                pageTitle="List purchased contents"
                currentPage="List purchased contents"
            />
            <ContentArea
                data={{
                    products: contentData.filter(
                        (content) => !!content.approved
                    ),
                }}
                path="/buyer/contents/video"
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
