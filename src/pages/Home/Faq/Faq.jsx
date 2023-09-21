import Accordion from "react-bootstrap/Accordion";
import "./Faq.css";
import faqImg from "../../../assets/faq.jpg";

function Faq() {
  return (
    <div className="faq-area">
      <div className="container">
        <div className="area-title" data-aos="flip-up">
          <p>Faq</p>
          <h2>
            Questions? <span>Look Here</span>
          </h2>
        </div>
        <div className="faq-content">
          <div className="faq-img" data-aos="fade-up-right">
            <img src={faqImg} alt="" srcset="" />
          </div>
          <div className="faq" data-aos="fade-up-left">
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  What sports are offered at your sports camp, and who are the
                  instructors?
                </Accordion.Header>
                <Accordion.Body>
                  Our sports camp provides instruction in a wide range of
                  sports, including basketball, soccer, tennis, swimming, and
                  more. Our instructors are seasoned professionals with
                  expertise in their respective sports. You can learn more about
                  each instructor on our "Instructors" page.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Is prior experience required to participate in the sports
                  programs?
                </Accordion.Header>
                <Accordion.Body>
                  No prior experience is necessary! Our programs are designed to
                  accommodate participants of all skill levels, from beginners
                  to advanced athletes. Our instructors tailor their coaching to
                  suit the abilities of each camper.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  What age groups are eligible to enroll in the sports camp?
                </Accordion.Header>
                <Accordion.Body>
                  Our sports camp welcomes children and teenagers between the
                  ages of 6 and 16. We organize participants into
                  age-appropriate groups to ensure everyone enjoys a fun and
                  enriching experience.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  How do you ensure camper safety during sports activities?
                </Accordion.Header>
                <Accordion.Body>
                  Your child's safety is our top priority. We have certified
                  lifeguards on-site, staff members trained in first aid, and
                  all equipment undergoes regular inspections and maintenance.
                  We also adhere to provide a secure camp environment.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  What happens in case of bad weather affecting outdoor
                  activities?
                </Accordion.Header>
                <Accordion.Body>
                  In the event of inclement weather, our instructors have indoor
                  activities and contingency plans ready to ensure campers have
                  a full day of engaging experiences. We prioritize safety and
                  strive to ensure that every camper has a great time,
                  regardless of the weather conditions.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
