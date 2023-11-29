import { ClassValue } from 'clsx';
import { cn } from '@/lib/utils';

export const cnLarge = (...inputs: ClassValue[]) => cn('text-lg font-semibold', inputs);
