import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide, Zoom } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import Block from "../Block";
import Input from "../../common/Input";
import { ContactContainer, FormGroup, Span } from "./styles";

const Contact = ({ title, content, id, t }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    validate
  ) as any;


  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left">
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right">
            <FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <Col span={24}>
                <div className="gif-holder">
                  <img
                    className="mint-gif"
                    src="https://cdn.discordapp.com/attachments/854889426747654165/865655478637559838/CFCNFT.gif"
                    alt="cock-gif"
                  />
                </div>
              </Col>
            </FormGroup>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
