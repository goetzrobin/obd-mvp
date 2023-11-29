import { ClassValue } from 'clsx';
import { cn } from '@/lib/utils';

export const cnH4 = (...inputs: ClassValue[]) => cn('scroll-m-20 text-xl font-semibold tracking-tight', inputs);
