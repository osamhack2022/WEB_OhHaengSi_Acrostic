import { PropsWithChildren } from "react";

export interface IContainerProps extends PropsWithChildren {
  fluid?: boolean;
}

export default function Container({
  children,
  fluid = false,
}: IContainerProps) {
  return (
    <div className={fluid ? "container-fluid" : "container"}>{children}</div>
  );
}
