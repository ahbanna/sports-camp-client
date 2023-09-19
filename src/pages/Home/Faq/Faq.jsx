import Accordion from "react-bootstrap/Accordion";
import "./Faq.css";

function Faq() {
  return (
    <div className="faq-area">
      <div className="faq-content container">
        <div className="area-title">
          <p>Faq</p>
          <h2>
            Questions? <span>Look Here</span>
          </h2>
        </div>
        <div className="faq">
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                What sports are offered at your sports camp, and who are the
                instructors?
              </Accordion.Header>
              <Accordion.Body>
                Our sports camp provides instruction in a wide range of sports,
                including basketball, soccer, tennis, swimming, and more. Our
                instructors are seasoned professionals with expertise in their
                respective sports. You can learn more about each instructor on
                our "Instructors" page.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Is prior experience required for campers to participate in the
                sports programs?
              </Accordion.Header>
              <Accordion.Body>
                No prior experience is necessary! Our programs are designed to
                accommodate participants of all skill levels, from beginners to
                advanced athletes. Our instructors tailor their coaching to suit
                the abilities of each camper.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Faq;
