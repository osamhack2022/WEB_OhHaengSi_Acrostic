import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { useState } from "react";
import mergeClassNames from "../../../lib/helpers/mergeClassNames";
import styles from "./AccordionMenuItem.module.css";

interface IAccordionLinkItem {
  name: string;
  path: string;
}

export interface IMenuItemProps {
  name: string;
  icon: IconDefinition;
  parentPath: string;
  subPaths: IAccordionLinkItem[];
}

export default function AccordionMenuItem({
  name,
  icon,
  parentPath,
  subPaths,
}: IMenuItemProps) {
  const router = useRouter();
  const onPath = router.pathname.startsWith(parentPath);
  const [active, setActive] = useState(onPath);
  const indicator = active ? solid("angle-down") : solid("angle-right");

  return (
    <li className={mergeClassNames("nav-item", onPath ? "active" : "")}>
      <a
        className="nav-link"
        onClick={() => {
          setActive((value) => !value);
        }}
      >
        <FontAwesomeIcon icon={icon} className="mr-2" />
        <span>{name}</span>
        <FontAwesomeIcon
          icon={indicator}
          className={styles.collapseIndicator}
        />
      </a>
      <div
        id="collapseTwo"
        className={mergeClassNames("collapse", active ? "show" : "")}
        aria-labelledby="headingTwo"
        data-parent="#accordionSidebar"
      >
        <div className="bg-white py-2 collapse-inner rounded">
          <h6 className="collapse-header">Custom Components:</h6>
          {subPaths.map((subPath) => (
            <a
              key={subPath.path}
              className={mergeClassNames(
                "collapse-item",
                subPath.path == router.pathname ? "active" : ""
              )}
              href={subPath.path}
            >
              {subPath.name}
            </a>
          ))}
        </div>
      </div>
    </li>
  );
}
