import Anchor from "@ui/anchor";
import Sticky from "@ui/sticky";
import TabContent from "react-bootstrap/TabContent";
import TabContainer from "react-bootstrap/TabContainer";
import TabPane from "react-bootstrap/TabPane";
import Nav from "react-bootstrap/Nav";
import EditProfileImage from "./edit-profile-image";
import PersonalInformation from "./personal-information";
import NotificationSetting from "./notification-setting";
import { useState, useContext, useEffect } from "react";
import CourseSettingArea from "@components/course-setting-area";
import storageContext from "src/context/storageContext";

const EditCourseArea = () => {
    const [state, setState] = useState({
        courseName: "",
        courseBio: "",
        coursePlaylist: [],
        tags: [],
    });

    const [thumbnail, setThumbnail] = useState({});

    const { uploadFile, saveCourse } = useContext(storageContext);

    function changeState(key, value) {
        setState({ ...state, [key]: value });
    }

    function addVideoCourse(videoData) {
        setState({
            ...state,
            coursePlaylist: [...state.coursePlaylist, videoData],
        });
    }

    function addTags(tagsObj) {
        const tagsArr = Object.keys(tagsObj);
        const tags = tagsArr
            .filter((tag) => !!tagsObj[tag])
            .map((t) => {
                return { title: t, slug: t };
            });
        setState({ ...state, tags: [...tags] });
    }

    async function onClick() {
        const { url } = await uploadFile({ file: state.thumbnail });

        await saveCourse({ ...state, thumbnail: url });
    }

    function addThumbnail(file) {
        setState({ ...state, thumbnail: file });
    }

    return (
        <div className="edit-profile-area rn-section-gapTop">
            <div className="container">
                <div className="row plr--70 padding-control-edit-wrapper pl_md--0 pr_md--0 pl_sm--0 pr_sm--0">
                    <div className="col-12 d-flex justify-content-between mb--30 align-items-center">
                        <h4 className="title-left">Course Settings</h4>
                        <button
                            className="btn btn-primary ml--10"
                            onClick={onClick}
                        >
                            <i className="feather-eye mr--5" /> Publish Course
                        </button>
                    </div>
                </div>
                <TabContainer defaultActiveKey="nav-home">
                    <div className="row plr--70 padding-control-edit-wrapper pl_md--0 pr_md--0 pl_sm--0 pr_sm--0">
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <Sticky>
                                <nav className="left-nav rbt-sticky-top-adjust-five">
                                    <Nav className="nav nav-tabs">
                                        <Nav.Link
                                            eventKey="nav-home"
                                            as="button"
                                        >
                                            <i className="feather-edit" />
                                            Course Information
                                        </Nav.Link>
                                        <Nav.Link
                                            eventKey="nav-homes"
                                            as="button"
                                        >
                                            <i className="feather-play" />
                                            Course Playlist
                                        </Nav.Link>
                                        <Nav.Link
                                            eventKey="nav-profile"
                                            as="button"
                                        >
                                            <i className="feather-image" />
                                            Add Thumbnail
                                        </Nav.Link>
                                        <Nav.Link
                                            eventKey="nav-contact"
                                            as="button"
                                        >
                                            <i className="feather-tag" />
                                            Tags
                                        </Nav.Link>
                                    </Nav>
                                </nav>
                            </Sticky>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12 mt_sm--30">
                            <TabContent className="tab-content-edit-wrapepr">
                                <TabPane eventKey="nav-home">
                                    <PersonalInformation
                                        changeState={changeState}
                                    />
                                </TabPane>
                                <TabPane eventKey="nav-homes">
                                    <CourseSettingArea
                                        changeState={changeState}
                                        addVideoCourse={addVideoCourse}
                                    />
                                </TabPane>
                                <TabPane eventKey="nav-profile">
                                    <EditProfileImage
                                        addThumbnail={addThumbnail}
                                    />
                                </TabPane>
                                <TabPane eventKey="nav-contact">
                                    <NotificationSetting addTags={addTags} />
                                </TabPane>
                            </TabContent>
                        </div>
                    </div>
                </TabContainer>
            </div>
        </div>
    );
};

export default EditCourseArea;
