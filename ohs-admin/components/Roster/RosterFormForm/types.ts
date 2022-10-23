import { IRosterWorkForm, IRosterForm } from "../../../lib/api/roster";

export interface ITmpRosterWorkForm extends IRosterWorkForm {
  id?: string;
}

export interface ITmpRosterForm extends IRosterForm {
  id?: string;
  works: ITmpRosterWorkForm[];
}
