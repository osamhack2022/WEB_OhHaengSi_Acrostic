import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar: React.FC = () => {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* Sidebar - Brand */}
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <FontAwesomeIcon icon={solid("laugh-wink")} />
        </div>
        <div className="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup>
        </div>
      </a>
      {/* Divider */}
      <hr className="sidebar-divider my-0" />
      {/* Nav Item - Dashboard */}
      <li className="nav-item active">
        <a className="nav-link" href="index.html">
          <FontAwesomeIcon icon={solid("tachometer-alt")} />
          <span>Dashboard</span>
        </a>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider" />
      {/* Heading */}
      <div className="sidebar-heading">Interface</div>
      {/* Nav Item - Pages Collapse Menu */}
      <li className="nav-item">
        <a className="nav-link ">
          <FontAwesomeIcon icon={solid("cog")} className="fas fa-fw fa-cog" />
          <span>Components</span>
        </a>
      </li>

      {/* Divider */}
      <hr className="sidebar-divider" />
      {/* Heading */}
      <div className="sidebar-heading">Addons</div>
      <li className="nav-item">
        <a className="nav-link" href="tables.html">
          <FontAwesomeIcon
            icon={solid("table")}
            className="fas fa-fw fa-table"
          />
          <span>Tables</span>
        </a>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider d-none d-md-block" />
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
