import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import { UrlObject } from "url";
import mergeClassNames from "../../../lib/helpers/mergeClassNames";

export interface IMenuItemProps {
  name: string;
  icon: IconDefinition;
  href: string | UrlObject;
}

export default function MenuItem({ name, icon, href }: IMenuItemProps) {
  const router = useRouter();
  const pathname = typeof href == "string" ? href : href.pathname;
  const active = router.pathname == pathname;

  return (
    <li className={mergeClassNames("nav-item", active ? "active" : "")}>
      <Link href={href}>
        <a className="nav-link">
          <FontAwesomeIcon icon={icon} className="mr-2" />
          <span>{name}</span>
        </a>
      </Link>
    </li>
  );
}
