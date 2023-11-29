import { ClassValue } from 'clsx';
import { cn } from '@/lib/utils';

export const cnH3 = (...inputs: ClassValue[]) => cn('scroll-m-20 text-2xl font-semibold tracking-tight', inputs);
