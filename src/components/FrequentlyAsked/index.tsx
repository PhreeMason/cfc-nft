import { Row, Col } from "antd";
import { Slide } from "react-awesome-reveal";
import { MiddleBlockSection, ContentWrapper } from "../MiddleBlock/styles";
import AccordingItem from "./AccordingItem";
import { useState } from "react";
import './FAQ.css';

interface BulletPoint {
  title: string;
  content: string;
}

interface FrequentlyAskedProps {
  title: string;
  bulletPoints?: Array<BulletPoint>;
}

const FrequentlyAsked = ({ title, bulletPoints }: FrequentlyAskedProps) => {
  const [activeAria, setActiveAria] = useState(20);
  return (
    <MiddleBlockSection id="faq">
      <Slide direction="up">
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h2>{title}</h2>
              <div className="accordion">
                {bulletPoints?.map((item, idx) => (
                  <AccordingItem
                    key={idx}
                    {...item}
                    index={idx}
                    active={activeAria === idx}
                    expand={setActiveAria}
                  />)
                )}
              </div>
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default FrequentlyAsked;