import Accordion from "react-bootstrap/Accordion";

function BasicExample(props) {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>

                <Accordion.Body>{props.children}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Accordion Item #1</Accordion.Header>

                <Accordion.Body>{props.children}</Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default BasicExample;
