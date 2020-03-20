export interface ConfinementState {
  id: number | string;
  state: string;
  description: string;
}

export function createConfinementState(params: Partial<ConfinementState>) {
  return { ...params } as ConfinementState;
}
