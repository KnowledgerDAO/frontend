import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import CreateNewContent from "@containers/content/create-new-content";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const CreateContent = () => (
    <Wrapper>
        <SEO pageTitle="Publish Content" />
        <Header />
        <main id="main-content">
            <Breadcrumb pageTitle="Publish a new content" />
            <CreateNewContent />
        </main>
        <Footer />
    </Wrapper>
);

export default CreateContent;
