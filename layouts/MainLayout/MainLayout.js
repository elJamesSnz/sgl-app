import { Container } from "semantic-ui-react";
import classNames from "classnames";
import Header from "../../components/Header/";
import Body from "../../components/Body";
import { Footer } from "antd/lib/layout/layout";

export default function MainLayout(props) {
  const { children, className } = props;

  return (
    <Container
      fluid
      className={classNames("main-layout ", {
        [className]: className,
      })}
    >
      <Header />
      <Container className="content">{children}</Container>
    </Container>
  );
}
