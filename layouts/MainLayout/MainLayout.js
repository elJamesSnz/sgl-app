import { Container } from "semantic-ui-react";
import classNames from "classnames";
import Header from "../../components/Header/";
import Body from "../../components/Body";

export default function MainLayout(props) {
  const { children, className } = props;

  return (
    <Container
      fluid
      className={classNames("main-layout", {
        [className]: className,
      })}
    >
      <Header />
      <Body/>
      <Container className="content">{children}</Container>
    </Container>
  );
}
