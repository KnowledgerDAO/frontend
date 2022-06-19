import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import EditProfileArea from "@containers/edit-profile";
import FeedbackArea from "@containers/feed-back-area";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const ReviewFeedback = () => (
    <Wrapper>
        <SEO pageTitle="Review Course" />
        <Header />
        <main id="main-content">
            <Breadcrumb pageTitle="Review Course" currentPage="Review Course" />
            <FeedbackArea />
        </main>
        <Footer />
    </Wrapper>
);

export default ReviewFeedback;
