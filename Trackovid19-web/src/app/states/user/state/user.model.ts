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
  showOnboarding: boolean;
  optin_download_use: boolean;
  optin_privacy: boolean;
  optin_health_geo: boolean;
  optin_push: boolean;
}

export function createUser(params: Partial<User>) {
  return { ...params } as User;
}
