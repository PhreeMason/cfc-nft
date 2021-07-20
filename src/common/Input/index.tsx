import { withTranslation } from "react-i18next";
import { Container, StyledInput } from "./styles";
import { InputProps } from "../types";
import { Button } from "../Button";

const Input = ({ name, placeholder, onChange, t }: InputProps) => (
  <Container>
    <Button name="Mint">{t("Mint")}</Button>
  </Container>
);

export default withTranslation()(Input);
