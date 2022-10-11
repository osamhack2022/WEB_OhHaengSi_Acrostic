import { useEffect, useState } from "react";
import LoginPage from "../../pages/login";
import useUser from "./useUser";

export default function withCredential(Component: Function) {
  return (props: any) => {
    const [loading, setLoading] = useState(true);
    const [user] = useUser();

    useEffect(() => {
      setLoading(false);
    });

    if (loading) {
      return null;
    } else if (!user) {
      return <LoginPage {...props} />;
    }

    return <Component {...props} />;
  };
}
