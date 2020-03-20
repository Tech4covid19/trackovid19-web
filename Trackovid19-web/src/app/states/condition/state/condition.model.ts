export interface Condition {
  id: number | string;
  status: string;
}

export function createCondition(params: Partial<Condition>) {
  return { ...params } as Condition;
}
