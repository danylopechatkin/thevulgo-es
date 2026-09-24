export type RevenueOrder = { status: string; total: number; paidAmount?: number | null };
export function revenueSummary(orders: RevenueOrder[]) {
  const booked = orders.filter(o => ["confirmed","in_progress","completed","done"].includes(o.status));
  const completed = orders.filter(o => ["completed","done"].includes(o.status));
  return { bookedRevenue: booked.reduce((s,o)=>s+Number(o.total||0),0), completedRevenue: completed.reduce((s,o)=>s+Number(o.total||0),0), collectedRevenue: orders.reduce((s,o)=>s+Number(o.paidAmount||0),0) };
}
