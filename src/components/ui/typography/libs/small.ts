import { ClassValue } from 'clsx';
import { cn } from '@/lib/utils';

export const cnSmall = (...inputs: ClassValue[]) => cn('text-sm font-medium leading-none', inputs);
