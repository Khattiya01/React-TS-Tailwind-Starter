import React, { useEffect } from "react";

type AuthProps = {
  children?: React.ReactNode;
};

const withAuthorization = (WrappedComponent: React.ComponentType<any>) => {
  const WithAuthorization = (props: AuthProps) => {
    useEffect(() => {
      const isAuthenticated = checkAuthentication();

      if (!isAuthenticated) {
        window.location.replace("/signin");
        console.warn("User is not authenticated.");
      }
    }, []);

    const checkAuthentication = () => {
      return localStorage.getItem("token") !== null;
    };
    return <WrappedComponent {...props} />;
  };

  return WithAuthorization;
};

export default withAuthorization;