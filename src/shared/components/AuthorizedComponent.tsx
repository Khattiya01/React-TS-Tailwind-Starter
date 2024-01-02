import React from "react";
import withAuth from "../hoc/withAuthentication";

type AuthorizedProps = {
  children: React.ReactNode;
};

const AuthorizedComponent: React.FC<AuthorizedProps> = (props) => {
  return <div>{props.children}</div>;
};

export default withAuth(AuthorizedComponent, "admin");
