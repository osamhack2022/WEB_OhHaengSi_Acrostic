import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropsWithChildren } from "react";
import mergeStyles from "../../../../lib/helpers/mergeStyles";

export type SummaryCardThemeName =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "danger"
  | "light"
  | "dark";

export interface ISummaryCardProps extends PropsWithChildren {
  title?: string;
  icon?: IconDefinition;
  themeName?: SummaryCardThemeName;
  className?: string;
}

export const SummaryCardTheme: {
  [k in SummaryCardThemeName]: {
    title: string;
    border: string;
  };
} = {
  primary: {
    title: "text-primary",
    border: "border-left-primary",
  },
  secondary: {
    title: "text-secondary",
    border: "border-left-secondary",
  },
  info: {
    title: "text-info",
    border: "border-left-info",
  },
  success: {
    title: "text-success",
    border: "border-left-success",
  },
  warning: {
    title: "text-warning",
    border: "border-left-warning",
  },
  danger: {
    title: "text-danger",
    border: "border-left-danger",
  },
  light: {
    title: "text-light",
    border: "border-left-light",
  },
  dark: {
    title: "text-dark",
    border: "border-left-dark",
  },
};

export default function SummaryCard({
  title,
  children,
  icon,
  themeName = "primary",
  className = "col-xl-3 col-md-6 mb-4",
}: ISummaryCardProps) {
  const theme = SummaryCardTheme[themeName];

  return (
    <div className={className}>
      <div className={mergeStyles("card shadow h-100 py-2", theme.border)}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              {title && (
                <div
                  className={mergeStyles(
                    "text-xs font-weight-bold text-uppercase mb-1",
                    theme.title
                  )}
                >
                  {title}
                </div>
              )}
              {children &&
                (typeof children == "string" ? (
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {children}
                  </div>
                ) : (
                  children
                ))}
            </div>
            {icon && (
              <div className="col-auto">
                <FontAwesomeIcon
                  icon={icon}
                  size="2x"
                  className="text-gray-300"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
