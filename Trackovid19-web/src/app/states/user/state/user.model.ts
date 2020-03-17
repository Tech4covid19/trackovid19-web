import { Network } from 'src/app/models/network/network.model';
import { Case } from '../../case/state/case.model';

export interface User {
    id: number | string;
    fbId: string;
    url: string;
    cases: Case[];
    network: Network;
}

export function createUser(params: Partial<User>) {
    return { ...params } as User;
}
