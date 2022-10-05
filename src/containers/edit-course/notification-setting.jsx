import Button from "@ui/button";

const TagsSetting = () => (
    <div className="nuron-information">
        <h5 className="title">Course Tags </h5>

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
                        <p>Blockchain</p>
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
                        <p>Web3</p>
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
                        <p>Infrastructure</p>
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
                        <p>Crypto</p>
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
                        <p>Programming</p>
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
                        <p>Hacking</p>
                    </div>
                </div>
            </div>

            <div className="notice-child-wrapper" />
        </div>
    </div>
);

export default TagsSetting;
