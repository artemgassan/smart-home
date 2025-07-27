import response from './mock-data.json';
import type { DashboardType } from '@/app/components/dashboard/dashboard.model';

export const responseData: DashboardType = JSON.parse(JSON.stringify(response));
