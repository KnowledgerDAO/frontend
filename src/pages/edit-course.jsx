import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-main";
import Footer from "@layout/footer/footer-main";
import Breadcrumb from "@components/breadcrumb";
import EditCourseArea from "@containers/edit-course";
import Accordion from "@ui/accordion";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const EditProfile = () => (
    <Wrapper>
        <SEO pageTitle="Edit Profile" />
        <Header />
        <main id="main-content">
            <Breadcrumb pageTitle="Edit Profile" currentPage="Edit Profile" />
            <EditCourseArea />
        </main>
        <Footer />
    </Wrapper>
);

export default EditProfile;
