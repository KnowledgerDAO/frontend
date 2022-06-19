import Button from "@ui/button";
import NiceSelect from "@ui/nice-select";

const ThoughtsArea = () => (
    <div className="nuron-information">
        <div className="edit-bio-area mt--30">
            <h5 className="title">What are your thoughts on this course? </h5>

            <hr />
            <textarea
                id="Discription"
                value="I am disapproving this course because..."
                onChange={(e) => e}
            >
                I am disapproving this course because...
            </textarea>
        </div>

        <div className="button-area save-btn-edit">
            <Button className="mr--15" color="primary-alta" size="medium">
                Cancel
            </Button>
            <Button size="medium">Save</Button>
        </div>
    </div>
);

export default ThoughtsArea;
