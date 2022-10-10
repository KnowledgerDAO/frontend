import { useForm, Controller } from "react-hook-form";
import { useWatch } from "react-hook-form";
import { useEffect } from "react";

const TagsSetting = ({ addTags }) => {
    const { control, reset, watch } = useForm({
        defaultValues: {
            blockchain: false,
            web3: false,
            crypto: false,
            programming: false,
            hacking: false,
        },
    });

    const tagDiff = useWatch({
        control,
    });

    useEffect(() => {
        addTags(tagDiff);
    }, [tagDiff]);

    return (
        <div className="nuron-information">
            <h5 className="title">Course Tags </h5>

            <hr />
            <div className="notice-parent-wrapper d-flex">
                <div className="notice-child-wrapper">
                    <div className="single-notice-setting mt--15">
                        <div className="input">
                            <Controller
                                name="web3"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <input
                                        type="checkbox"
                                        id="themeSwitchs9"
                                        name="web3"
                                        className="theme-switch__input"
                                        {...field}
                                        // onChange={(e) => {
                                        //     addTags(field);
                                        //     field.onChange(e);
                                        // }}
                                    />
                                )}
                            />

                            <label
                                htmlFor="themeSwitchs9"
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
                            <Controller
                                name="blockchain"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <input
                                        type="checkbox"
                                        id="themeSwitchs"
                                        name="blockchain"
                                        className="theme-switch__input"
                                        {...field}
                                        // onChange={(e) => {
                                        //     addTags(field);
                                        //     // field.onChange(e);
                                        // }}
                                    />
                                )}
                            />

                            <label
                                htmlFor="themeSwitchs"
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
                            <Controller
                                name="crypto"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <input
                                        type="checkbox"
                                        id="themeSwitchs1"
                                        name="crypto"
                                        className="theme-switch__input"
                                        {...field}
                                        // onChange={(e) => {
                                        //     addTags(field);
                                        //     field.onChange(e);
                                        // }}
                                    />
                                )}
                            />

                            <label
                                htmlFor="themeSwitchs1"
                                className="theme-switch__label"
                            >
                                <span />
                            </label>
                        </div>
                        <div className="content-text">
                            <p>Crypto</p>
                        </div>
                    </div>

                    <div className="single-notice-setting mt--15">
                        <div className="input">
                            <Controller
                                name="programming"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <input
                                        type="checkbox"
                                        id="themeSwitchs2"
                                        name="programming"
                                        className="theme-switch__input"
                                        {...field}
                                        // onChange={(e) => {
                                        //     addTags(field);
                                        //     field.onChange(e);
                                        // }}
                                    />
                                )}
                            />

                            <label
                                htmlFor="themeSwitchs2"
                                className="theme-switch__label"
                            >
                                <span />
                            </label>
                        </div>
                        <div className="content-text">
                            <p>Programming</p>
                        </div>
                    </div>
                    <div className="single-notice-setting mt--15">
                        <div className="input">
                            <Controller
                                name="hacking"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <input
                                        type="checkbox"
                                        id="themeSwitchs3"
                                        name="hacking"
                                        className="theme-switch__input"
                                        {...field}
                                        // onChange={(e) => {
                                        //     addTags(field);
                                        //     field.onChange(e);
                                        // }}
                                    />
                                )}
                            />

                            <label
                                htmlFor="themeSwitchs3"
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
};

export default TagsSetting;
