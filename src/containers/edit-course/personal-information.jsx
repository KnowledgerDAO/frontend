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

            <div className="input-two-wrapper mt--15">
                <div className="half-wid role-area">
                    <label htmlFor="Role" className="form-label mb--10">
                        Your Role
                    </label>
                    <input
                        name="Role"
                        id="Role"
                        type="text"
                        value="Front-end Developer"
                        onChange={(e) => e}
                    />
                </div>
                <div className="half-wid gender">
                    <NiceSelect
                        options={[
                            { value: "male", text: "male" },
                            { value: "female", text: "female" },
                        ]}
                        placeholder="Select Your Gender"
                        className="profile-edit-select"
                        onChange={(e) => e}
                    />
                </div>
            </div>

            <div className="input-two-wrapper mt--15">
                <div className="half-wid currency">
                    <label htmlFor="Role" className="form-label">
                        Your Role
                    </label>
                    <NiceSelect
                        options={[
                            { value: "($)USD", text: "($)USD" },
                            { value: "wETH", text: "wETH" },
                            { value: "BIT Coin", text: "BIT Coin" },
                        ]}
                        placeholder="Currency"
                        className="profile-edit-select"
                        onChange={(e) => e}
                    />
                </div>
                <div className="half-wid phone-number">
                    <label htmlFor="PhoneNumber" className="form-label mb--10">
                        Phone Number
                    </label>
                    <input
                        name="contact-name"
                        id="PhoneNumber"
                        type="text"
                        value="+880100000000"
                        onChange={(e) => e}
                    />
                </div>
            </div>
            <div className="input-two-wrapper mt--15">
                <div className="half-wid currency">
                    <NiceSelect
                        options={[
                            { value: "United State", text: "United State" },
                            { value: "Katar", text: "Katar" },
                            { value: "Canada", text: "Canada" },
                        ]}
                        placeholder="Location"
                        className="profile-edit-select"
                        onChange={(e) => e}
                    />
                </div>
                <div className="half-wid phone-number">
                    <label htmlFor="PhoneNumber" className="form-label mb--10">
                        Address
                    </label>
                    <input
                        name="contact-name"
                        id="PhoneNumber"
                        type="text"
                        value="USA Cidni"
                        onChange={(e) => e}
                    />
                </div>
            </div>
            <div className="button-area save-btn-edit">
                <Button className="mr--15" color="primary-alta" size="medium">
                    Cancel
                </Button>
                <Button size="medium">Save</Button>
            </div>
        </div>
    );
};

export default CourseInformation;
