import { Network } from 'src/app/models/network/network.model';
import { Case } from '../../case/state/case.model';

export interface User {
  id: number | string;
  year: string;
  facebook_id: string;
  url: string;
  latitude: string;
  longitude: string;
  cases: Case[];
  info: any;
  networks: Network[];
  postalcode: string;
  county: string;
  patientToken: string;
  confinement_state: number;
  has_symptoms_text: string;
  has_symptoms: boolean;
}

export function createUser(params: Partial<User>) {
  return { ...params } as User;
}
