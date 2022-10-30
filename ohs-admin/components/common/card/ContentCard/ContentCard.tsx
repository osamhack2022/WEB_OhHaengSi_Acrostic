import { PropsWithChildren } from "react";

export interface IContentCardProps extends PropsWithChildren {
  title?: string;
  className?: string;
}

export default function ContentCard({
  title,
  className = "col-xl-6 col-lg-6",
  children,
}: IContentCardProps) {
  return (
    <div className={className}>
      <div className="card shadow mb-4">
        {/* Card Header - Dropdown */}
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">{title}</h6>
        </div>
        {/* Card Body */}
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
}
