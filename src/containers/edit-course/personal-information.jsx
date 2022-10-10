import Button from "@ui/button";
import NiceSelect from "@ui/nice-select";
import { useForm } from "react-hook-form";

const CourseInformation = ({ changeState }) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

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
                            {...register("courseName", {
                                onChange: (e) => {
                                    changeState(e.target.name, e.target.value);
                                },
                            })}
                        />
                    </div>
                </div>
            </div>
            <div className="edit-bio-area mt--30">
                <label htmlFor="Discription" className="form-label">
                    Course Bio
                </label>
                <textarea
                    id="courseBio"
                    placeholder="This Course is About..."
                    {...register("courseBio", {
                        onChange: (e) => {
                            changeState(e.target.name, e.target.value);
                        },
                    })}
                ></textarea>
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
