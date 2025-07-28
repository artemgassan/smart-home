import response from './mock-data.json';
import type { DashboardType } from '@/app/interfaces/tabs.interface';

export const responseData: DashboardType = JSON.parse(JSON.stringify(response));
