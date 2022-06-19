import Button from "@ui/button";

const ReasonsArea = () => (
    <div className="nuron-information">
        <h5 className="title">Was any of these present on the course? </h5>

        <hr />
        <div className="notice-parent-wrapper d-flex">
            <div className="notice-child-wrapper">
                <div className="single-notice-setting">
                    <div className="input">
                        <input
                            type="checkbox"
                            id="themeSwitch"
                            name="theme-switch"
                            className="theme-switch__input"
                        />
                        <label
                            htmlFor="themeSwitch"
                            className="theme-switch__label"
                        >
                            <span />
                        </label>
                    </div>
                    <div className="content-text">
                        <p>Violence</p>
                    </div>
                </div>
                <div className="single-notice-setting mt--15">
                    <div className="input">
                        <input
                            type="checkbox"
                            id="themeSwitchs"
                            name="theme-switch"
                            className="theme-switch__input"
                        />
                        <label
                            htmlFor="themeSwitchs"
                            className="theme-switch__label"
                        >
                            <span />
                        </label>
                    </div>
                    <div className="content-text">
                        <p>Nudism</p>
                    </div>
                </div>
                <div className="single-notice-setting mt--15">
                    <div className="input">
                        <input
                            type="checkbox"
                            id="OrderNotice"
                            name="theme-switch"
                            className="theme-switch__input"
                        />
                        <label
                            htmlFor="OrderNotice"
                            className="theme-switch__label"
                        >
                            <span />
                        </label>
                    </div>
                    <div className="content-text">
                        <p>Gruesome</p>
                    </div>
                </div>
                <div className="single-notice-setting mt--15">
                    <div className="input">
                        <input
                            type="checkbox"
                            id="newPAy"
                            name="theme-switch"
                            className="theme-switch__input"
                        />
                        <label htmlFor="newPAy" className="theme-switch__label">
                            <span />
                        </label>
                    </div>
                    <div className="content-text">
                        <p>Gore</p>
                    </div>
                </div>
                <div className="single-notice-setting mt--15">
                    <div className="input">
                        <input
                            type="checkbox"
                            id="EndBid"
                            name="theme-switch"
                            className="theme-switch__input"
                        />
                        <label htmlFor="EndBid" className="theme-switch__label">
                            <span />
                        </label>
                    </div>
                    <div className="content-text">
                        <p>Racism</p>
                    </div>
                </div>
                <div className="single-notice-setting mt--15">
                    <div className="input">
                        <input
                            type="checkbox"
                            id="Approve"
                            name="theme-switch"
                            className="theme-switch__input"
                        />
                        <label
                            htmlFor="Approve"
                            className="theme-switch__label"
                        >
                            <span />
                        </label>
                    </div>
                    <div className="content-text">
                        <p>Abuse</p>
                    </div>
                </div>
            </div>

            <div className="notice-child-wrapper" />
        </div>
        <Button className="save-btn-edit" size="medium">
            Save
        </Button>
    </div>
);

export default ReasonsArea;
