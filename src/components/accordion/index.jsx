import Accordion from "react-bootstrap/Accordion";
import Acc from "react-bootstrap/Accordion";

function BasicExample({ title, id, children }) {
    // const { titleObj, id } = props;
    return (
        <div className="mt-5">
            <Acc defaultActiveKey="0">
                <Acc.Item eventKey="0">
                    <Acc.Header>
                        #{id} {title} <i className="feather-chevron-up" />
                    </Acc.Header>
                    <Acc.Body>{children}</Acc.Body>
                </Acc.Item>
            </Acc>
        </div>
    );
}

export default BasicExample;
