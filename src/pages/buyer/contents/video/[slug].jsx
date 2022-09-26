import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-main";
import Footer from "@layout/footer/footer-main";
import Breadcrumb from "@components/breadcrumb";
import BlogDetailsArea from "@containers/blog-details";
import CommentsArea from "@containers/comments-area";
import CommentForm from "@components/comment-form";
import RelatedPostsArea from "@containers/related-posts";
import BlogSidebar from "@containers/blog-sidebar";
import VideoSidebar from "@containers/video-sidebar";

import contentData from "../../../../data/contents.json";

const BlogDetails = ({ post, categories, recentPosts, tags, relatedPosts }) => {
    console.log(post)
    return (
        <Wrapper>
            <SEO pageTitle="Course Details" />
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
                                <CommentsArea />
                                <CommentForm />
                                <RelatedPostsArea relatedPosts={relatedPosts} />
                            </div>
                            <div className="col-xl-4 col-lg-4 mt_md--40 mt_sm--40">
                                <VideoSidebar
                                    categories={post.content}
                                    recentPosts={recentPosts}
                                    tags={post.tags}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
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
    const posts = contentData;
    const categories = posts.map((blog) => ({ ...blog.category }));

    const recentPosts = posts.slice(0, 4);

    return {
        props: {
            post,
            slug,
            categories,
            recentPosts,

            className: "template-color-1",
        },
    };
}

BlogDetails.propTypes = {
    post: PropTypes.shape({
        content: PropTypes.shape({}),
        tags: PropTypes.arrayOf(PropTypes.shape({})),
    }),
    categories: PropTypes.arrayOf(PropTypes.string),
    recentPosts: PropTypes.arrayOf(PropTypes.shape({})),
    tags: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
    relatedPosts: PropTypes.arrayOf(PropTypes.shape({})),
};

export default BlogDetails;
