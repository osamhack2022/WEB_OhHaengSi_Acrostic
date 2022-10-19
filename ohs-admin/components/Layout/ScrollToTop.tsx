import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ScrollToTop() {
  return (
    <a className="scroll-to-top rounded" href="#page-top">
      <FontAwesomeIcon icon={solid("angle-up")} className="fas fa-angle-up" />
    </a>
  );
}
