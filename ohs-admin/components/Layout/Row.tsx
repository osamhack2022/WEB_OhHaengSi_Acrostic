import { PropsWithChildren } from "react";

export default function Row({ children }: PropsWithChildren) {
  return <div className="row">{children}</div>;
}
