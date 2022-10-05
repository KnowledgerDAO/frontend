import Button from "@ui/button";
import NiceSelect from "@ui/nice-select";
import { useForm } from "react-hook-form";

const CourseInformation = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    console.log(watch("courseName"));

    return (
        <div className="nuron-information">
            <div className="profile-form-wrapper">
                <div className="input mb--15">
                    <div className="first-name half-wid">
                        <label htmlFor="contact-name" className="form-label">
                            Course Name
                        </label>
                        <input
                            name="courseName"
                            id="courseName"
                            type="text"
                            {...register("courseName")}
                        />
                    </div>
                </div>
            </div>
            <div className="edit-bio-area mt--30">
                <label htmlFor="Discription" className="form-label">
                    Course Bio
                </label>
                <textarea id="courseBio" {...register("courseBio")}>
                    This Course is About...
                </textarea>
            </div>

            {/* <div className="button-area save-btn-edit">
                <Button className="mr--15" color="primary-alta" size="medium">
                    Cancel
                </Button>
                <Button size="medium">Save</Button>
            </div> */}
        </div>
    );
};

export default CourseInformation;
