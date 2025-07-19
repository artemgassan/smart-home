import response from './mock-data.json';
import type { DashboardType } from '@/widgets/dashboard';

export const responseData: DashboardType = JSON.parse(JSON.stringify(response));
