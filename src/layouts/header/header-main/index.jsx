import PropTypes from "prop-types";
import clsx from "clsx";
import { useMoralis } from "react-moralis";
import Logo from "@components/logo";
import MainMenu from "@components/menu/main-menu";
import MobileMenu from "@components/menu/mobile-menu";
import UserDropdown from "@components/user-dropdown";
import ColorSwitcher from "@components/color-switcher";
import BurgerButton from "@ui/burger-button";
import Button from "@ui/button";
import { useOffcanvas, useSticky } from "@hooks";
import headerData from "../../../data/general/header-main.json";
import menuData from "../../../data/general/menu-main.json";

const Header = ({ className }) => {
    const sticky = useSticky();
    const { offcanvas, offcanvasHandler } = useOffcanvas();
    const { authenticate, isAuthenticated } = useMoralis();

    return (
        <>
            <header
                className={clsx(
                    "rn-header haeder-default black-logo-version header--fixed header--sticky",
                    sticky && "sticky",
                    className
                )}
            >
                <div className="container">
                    <div className="header-inner">
                        <div className="header-left">
                            <Logo logo={headerData.logo} />
                            <div className="mainmenu-wrapper">
                                <nav
                                    id="sideNav"
                                    className="mainmenu-nav d-none d-xl-block"
                                >
                                    <MainMenu menu={menuData} />
                                </nav>
                            </div>
                        </div>
                        <div className="header-right">
                            {!isAuthenticated && (
                                <div className="setting-option header-btn">
                                    <div className="icon-box">
                                        <Button
                                            color="primary-alta"
                                            className="connectBtn"
                                            size="small"
                                            onClick={() => authenticate()}
                                        >
                                            Wallet connect
                                        </Button>
                                    </div>
                                </div>
                            )}
                            {isAuthenticated && (
                                <div className="setting-option rn-icon-list user-account">
                                    <UserDropdown />
                                </div>
                            )}
                            {/* <div className="setting-option rn-icon-list notification-badge">
                                <div className="icon-box">
                                    <Anchor path={headerData.activity_link}>
                                        <i className="feather-bell" />
                                        <span className="badge">0</span>
                                    </Anchor>
                                </div>
                            </div> */}
                            <div className="setting-option mobile-menu-bar d-block d-xl-none">
                                <div className="hamberger">
                                    <BurgerButton onClick={offcanvasHandler} />
                                </div>
                            </div>
                            <div
                                id="my_switcher"
                                className="setting-option my_switcher"
                            >
                                <ColorSwitcher />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <MobileMenu
                isOpen={offcanvas}
                onClick={offcanvasHandler}
                menu={menuData}
                logo={headerData.logo}
            />
            <div className="container color-danger col-lg-12 col-md-12 col-sm-12 col-12 mt_md--40 mt_sm--40">
                <div className="icon">
                    <i className={clsx("feather-triangle")} /> Disclaimer:
                    <span>
                        {" "}
                        This is a demo website. It is initially only for showing
                        purposes and to demonstrate the idea of the project.
                    </span>
                </div>
                <div />
            </div>
        </>
    );
};

Header.propTypes = {
    className: PropTypes.string,
};

export default Header;
