import { ClassValue } from 'clsx';
import { cn } from '@/lib/utils';

export const cnH2 = (...inputs: ClassValue[]) =>
  cn('scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0', inputs);
