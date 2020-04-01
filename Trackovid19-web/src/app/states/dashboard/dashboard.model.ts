export interface Dashboard {
  id: number | string;
  conditions: any[];
  confinements: any[];
}

export function createDashboard(params: Partial<Dashboard>) {
  return {} as Dashboard;
}
