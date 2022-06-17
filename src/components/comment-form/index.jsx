import Button from "@ui/button";

const CommentForm = () => (
    <div className="rn-comment-form pt--60">
        <div className="inner">
            <div className="section-title">
                <span className="subtitle">Have a Question?</span>
                <h2 className="title">Leave a Question</h2>
            </div>
            <form className="mt--40" action="#">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-12">
                        <div className="rnform-group">
                            <textarea placeholder="Comment" />
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="blog-btn">
                            <Button color="primary-alta" fullwidth>
                                <span>SEND MESSAGE</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
);
export default CommentForm;
