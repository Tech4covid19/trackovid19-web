import { Network } from 'src/app/models/network/network.model';
import { Case } from '../../case/state/case.model';

export interface User {
  postalcode: string;
  name: string;
  email: string;
  county: string;
  confinement_state: string;
  patientToken: string;
  has_symptoms_text: string;
  has_symptoms: boolean;
  phone: string;
  show_onboarding: boolean;
  personal_hash: string;
  health_hash: string;
  id: string;
  year: string;
  postalcode1: string;
  postalcode2: string;
  latest_status: {
    timestamp: string;
  };
  latitude: string;
  longitude: string;
  info: {
    version: number;
    name: string;
    email: string;
    phone: string;
  };
  optin_download_use: boolean;
  optin_privacy: boolean;
  optin_health_geo: boolean;
  optin_push: boolean;
  created_at: string;
  updated_at: string;
  cases: Case[];
  networks: Network[];
}

export function createUser(params: Partial<User>) {
  return { ...params } as User;
}
