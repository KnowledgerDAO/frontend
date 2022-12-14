import Anchor from "@ui/anchor";
import Sticky from "@ui/sticky";
import TabContent from "react-bootstrap/TabContent";
import TabContainer from "react-bootstrap/TabContainer";
import TabPane from "react-bootstrap/TabPane";
import Nav from "react-bootstrap/Nav";
import EditProfileImage from "../edit-profile/edit-profile-image";
import PersonalInformation from "../edit-profile/personal-information";
import ChangePassword from "../edit-profile/change-password";
import NotificationSetting from "../edit-profile/notification-setting";
import ThoughtsArea from "./thoughts-area";
import ReasonsArea from "./reasons-area";

const FeedbackArea = () => (
    <div className="edit-profile-area rn-section-gapTop">
        <div className="container">
            <div className="row plr--70 padding-control-edit-wrapper pl_md--0 pr_md--0 pl_sm--0 pr_sm--0">
                <div className="col-12 d-flex justify-content-between mb--30 align-items-center">
                    <h4 className="title-left">Review the course</h4>
                    <Anchor path="/author" className="btn btn-primary ml--10">
                        <i className="feather-eye mr--5" /> Submit
                    </Anchor>
                </div>
            </div>
            <TabContainer defaultActiveKey="nav-home">
                <div className="row plr--70 padding-control-edit-wrapper pl_md--0 pr_md--0 pl_sm--0 pr_sm--0">
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <Sticky>
                            <nav className="left-nav rbt-sticky-top-adjust-five">
                                <Nav className="nav nav-tabs">
                                    <Nav.Link eventKey="nav-home" as="button">
                                        <i className="feather-bell" />
                                        Reason
                                    </Nav.Link>

                                    <Nav.Link eventKey="nav-homes" as="button">
                                        <i className="feather-user" />
                                        Thoughts
                                    </Nav.Link>
                                </Nav>
                            </nav>
                        </Sticky>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12 mt_sm--30">
                        <TabContent className="tab-content-edit-wrapepr">
                            <TabPane eventKey="nav-homes">
                                <ThoughtsArea />
                            </TabPane>
                            <TabPane eventKey="nav-profile">
                                <ChangePassword />
                            </TabPane>
                            <TabPane eventKey="nav-home">
                                <ReasonsArea />
                            </TabPane>
                        </TabContent>
                    </div>
                </div>
            </TabContainer>
        </div>
    </div>
);

export default FeedbackArea;
