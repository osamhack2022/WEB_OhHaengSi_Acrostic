import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import { IUser } from "../api/auth";

export default function useUser(): [
  IUser | null,
  (user: IUser | null) => void
] {
  const [user, setUser] = useState<IUser | null>(null);
  const router = useRouter();

  useEffect(() => {
    const loginedUser = localStorage.getItem("user");
    if (loginedUser) setUser(JSON.parse(loginedUser));
  }, []);

  return [
    user,
    (user) => {
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      router.reload();
    },
  ];
}
