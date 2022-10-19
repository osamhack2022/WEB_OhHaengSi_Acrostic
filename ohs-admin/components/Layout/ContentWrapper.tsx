import { PropsWithChildren } from "react";

export default function ContentWrapper({ children }: PropsWithChildren) {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">{children}</div>
    </div>
  );
}
