import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-main";
import Footer from "@layout/footer/footer-main";
import Breadcrumb from "@components/breadcrumb";
import ProductDetailsArea from "@containers/product-details";
import ProductArea from "@containers/product/layout-03";
import { shuffleArray } from "@utils/methods";

// demo data
import productData from "../../data/products.json";
import contentData from "../../data/contents.json";

const ProductDetails = ({ product, recentViewProducts, relatedProducts }) => (
    <Wrapper>
        <SEO pageTitle="Product Details" />
        <Header />
        <main id="main-content">
            <Breadcrumb
                pageTitle="Course Details"
                currentPage="Product Details"
            />
            <ProductDetailsArea product={product} />
        </main>
        <Footer />
    </Wrapper>
);

export async function getStaticPaths() {
    return {
        paths: contentData.map(({ slug }) => ({
            params: {
                slug,
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const product = contentData.find(({ slug }) => slug === params.slug);
    const { categories } = product;
    const recentViewProducts = shuffleArray(productData).slice(0, 5);
    const relatedProducts = productData
        .filter((prod) => prod.categories?.some((r) => categories?.includes(r)))
        .slice(0, 5);
    return {
        props: {
            className: "template-color-1",
            product,
            recentViewProducts,
            relatedProducts,
        }, // will be passed to the page component as props
    };
}

ProductDetails.propTypes = {
    product: PropTypes.shape({}),
    recentViewProducts: PropTypes.arrayOf(PropTypes.shape({})),
    relatedProducts: PropTypes.arrayOf(PropTypes.shape({})),
};

export default ProductDetails;
