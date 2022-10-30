import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropsWithChildren } from "react";
import mergeClassNames from "../../../lib/helpers/mergeClassNames";
import AccordionMenuItem from "./AccordionMenuItem";
import MenuItem from "./MenuItem";

function SidebarDivider({ className }: { className?: string }) {
  return <hr className={mergeClassNames("sidebar-divider", className)} />;
}

function SidebarHeading({ children }: PropsWithChildren) {
  return <div className="sidebar-heading">{children}</div>;
}

const Sidebar: React.FC = () => {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="/"
      >
        <div className="sidebar-brand-icon ">
          <FontAwesomeIcon icon={solid("user-group")} />
        </div>
        <div className="sidebar-brand-text mx-3">오행시 관리자</div>
      </a>
      <SidebarDivider />
      <SidebarHeading>병영 관리</SidebarHeading>
      <AccordionMenuItem
        name="병사 관리"
        parentPath="/soldier"
        icon={solid("users")}
        subPaths={[
          {
            name: "병사 목록",
            path: "/soldier",
          },
          {
            name: "병사 추가",
            path: "/soldier/create",
          },
        ]}
      />
      <MenuItem
        name="생활관 관리"
        href="/room"
        icon={solid("person-shelter")}
      />
      <AccordionMenuItem
        name="근무표 관리"
        parentPath="/roster"
        icon={solid("clipboard-list")}
        subPaths={[
          {
            name: "근무표 목록",
            path: "/roster",
          },
          {
            name: "근무표 양식",
            path: "/roster/form",
          },
        ]}
      />
      <MenuItem name="임무분담제 관리" href="/cleaning" icon={solid("broom")} />
      <MenuItem name="전파사항 관리" href="/notice" icon={solid("bullhorn")} />
      <SidebarDivider />
      <SidebarHeading>기타</SidebarHeading>
      <MenuItem
        name="긴급 관리"
        href="/emergency"
        icon={solid("triangle-exclamation")}
      />
      <SidebarDivider className="" />
      {/* Sidebar Toggler (Sidebar) */}
      {/* <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle">
          <FontAwesomeIcon icon={solid("arrow-left")} />
        </button>
      </div> */}
      {/* Sidebar Message */}
      <div className="sidebar-card d-none d-lg-flex">
        <p className="text-center mb-2">
          <strong>문의사항</strong>
          suyoung154@gmail.com
        </p>
      </div>
    </ul>
  );
};

export default Sidebar;
