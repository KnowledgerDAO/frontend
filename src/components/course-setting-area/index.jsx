import React, { useState } from "react";
import SectionCard from "@components/section-card";
import Accordion from "@components/accordion";
import CourseForm from "@containers/course-form";
import Button from "@ui/button";

function CourseSettingArea({ addVideoCourse }) {
    const [lecture, setLecture] = useState([]);

    const onClick = () => {
        setLecture([
            ...lecture,
            { id: lecture.length, title: "", bio: "", file: "" },
        ]);
    };

    const changeTitle = (id, title) => {
        const newLecture = lecture.map((l) =>
            l.id === id ? { id, title } : l
        );
        setLecture(newLecture);
    };

    return (
        <SectionCard>
            {lecture.map((e, i) => (
                <Accordion title={e.title} key={i} id={i + 1}>
                    <CourseForm
                        key={e.id}
                        index={e.id}
                        title={e.title}
                        changeTitle={changeTitle}
                        addVideoCourse={addVideoCourse}
                    />
                </Accordion>
            ))}
            <button className="lecture-add" onClick={onClick}>
                <i className="feather-plus mr--5" /> Add Lecture
            </button>
        </SectionCard>
    );
}

export default CourseSettingArea;
