export interface Symptom {
  id: number | string;
  value: string;
}

export function createSymptom(params: Partial<Symptom>) {
  return { ...params } as Symptom;
}
