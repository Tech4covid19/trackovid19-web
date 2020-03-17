import { Geo } from 'src/app/models/geo/geo.model';

export interface Case {
    id: number | string;
    postalCode: string;
    geo: Geo;
    condition: number;
    symptoms: number;
    timestamp: string;
}

export function createCase(params: Partial<Case>) {
    return { ...params } as Case;
}
