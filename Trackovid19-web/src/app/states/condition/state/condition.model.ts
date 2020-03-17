export interface Condition {
  id: number | string;
  value: string;
}

export function createCondition(params: Partial<Condition>) {
  return { ...params } as Condition;
}
