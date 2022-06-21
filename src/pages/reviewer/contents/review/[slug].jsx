import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-main";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import BlogDetailsArea from "@containers/blog-details";
import CommentsArea from "@containers/comments-area";
import CommentForm from "@components/comment-form";
import RelatedPostsArea from "@containers/related-posts";
import BlogSidebar from "@containers/blog-sidebar";
import PlaceBet from "@components/product-details/place-bet";
import ReviewSidebar from "@containers/review-sidebar";
import Button from "@ui/button";
import AllowReviewModal from "@components/modals/review-modal/allow";
import DenyReviewModal from "@components/modals/review-modal/deny";
import { useState } from "react";
import Link from "next/link";
import contentData from "../../../../data/contents.json";

const ReviewContent = ({
    post,
    categories,
    recentPosts,
    tags,
    relatedPosts,
}) => {
    const [showBidModal, setShowBidModal] = useState(false);
    const handleBidModal = () => {
        setShowBidModal((prev) => !prev);
    };

    const [showDenyModal, setShowDenyModal] = useState(false);
    const handleDenyModal = () => {
        setShowDenyModal((prev) => !prev);
    };

    console.log(post)
    return (
        <Wrapper>
            <SEO pageTitle="Review pending contents" />
            <Header />
            <main id="main-content">
                <Breadcrumb
                    pageTitle="Course Details"
                    currentPage="Blog Details"
                />
                <div className="rn-blog-area rn-blog-details-default rn-section-gapTop">
                    <div className="container">
                        <div className="row g-6">
                            <div className="col-xl-8 col-lg-8">
                                <BlogDetailsArea post={post} />
                                {/* <CommentsArea />
                            <CommentForm />
                            <RelatedPostsArea relatedPosts={relatedPosts} /> */}
                            </div>
                            <div className="col-xl-4 col-lg-4 mt_md--40 mt_sm--40">
                                <ReviewSidebar
                                    categories={post.content}
                                    recentPosts={recentPosts}
                                    tags={post.tags}
                                />
                                <div className="flex">
                                    <Button
                                        color={"primary-alta"}
                                        className="mt--30 mr--10"
                                        onClick={handleBidModal}
                                    >
                                        Allow
                                    </Button>
                                    <Link href="/reviewer/contents/review/feedback">
                                        <Button
                                            color={"primary-alta"}
                                            className="mt--30"
                                        >
                                            Deny
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <AllowReviewModal
                show={showBidModal}
                handleModal={handleBidModal}
            />
            <DenyReviewModal
                show={showDenyModal}
                handleModal={handleDenyModal}
            />
        </Wrapper>
    );
};

export async function getStaticPaths() {
    // map through to return post paths
    const paths = contentData.map((post) => ({
        params: {
            slug: post.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const { slug } = params;
    const post = contentData.filter((content) => content.slug === slug)[0];
    const posts = [...contentData];
    const categories = posts.map((blog) => ({ ...blog.category }));
    const tags = posts.map((blog) => [...blog.tags]);
    const recentPosts = posts.slice(0, 4);

    return {
        props: {
            post,
            slug,
            categories,
            recentPosts,
            tags,

            className: "template-color-1",
        },
    };
}

ReviewContent.propTypes = {
    post: PropTypes.shape({}),
    categories: PropTypes.arrayOf(PropTypes.shape({})),
    recentPosts: PropTypes.arrayOf(PropTypes.shape({})),
    tags: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
    relatedPosts: PropTypes.arrayOf(PropTypes.shape({})),
};

export default ReviewContent;
