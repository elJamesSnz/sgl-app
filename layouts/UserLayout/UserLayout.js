import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import classNames from "classnames";
import AccountHeader from "../../components/Account/AccountHeader/";
import AccountPanel from "../../components/Account/AccountPanel";
import { getUserLabsApi } from "../../api/user";
import { map, size } from "lodash";
import { useRouter } from "next/router";

export default function MainLayout(props) {
  const { children, className, auth, logout } = props;

  return (
    <Container
      fluid
      className={classNames("main-layout ", {
        [className]: className,
      })}
    >
      <AccountHeader />
      <AccountPanel auth={auth} logout={logout} />

      <div className="main-container">{children}</div>
    </Container>
  );
}
