export interface Dashboard {
  id: number | string;
  hits: string;
}

export function createDashboard(params: Partial<Dashboard>) {
  return {} as Dashboard;
}
