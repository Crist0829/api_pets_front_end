import useAuthStore from "@/stores/AuthStore";
import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthLayout(props: PropsWithChildren) {
  const { auth } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.authenticated) navigate("/feed");
  }, []);

  return (
    <div>
      <main className="w-11/12 max-w-[1240px] mx-auto">{props.children}</main>
    </div>
  );
}

export { AuthLayout };
