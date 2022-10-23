import {
  IRosterWorkForm,
  IRosterForm,
  IOrganizedRoster,
  IRosterResponse,
} from "../../../lib/api/roster";

export type ITmpOrganizedRoster = IOrganizedRoster & {
  id?: string;
};

export type RosterFormData = IRosterResponse;
