export interface Symptom {
  id: number | string;
  symptom: string;
}

export function createSymptom(params: Partial<Symptom>) {
  return { ...params } as Symptom;
}
