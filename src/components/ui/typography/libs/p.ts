import { ClassValue } from 'clsx';
import { cn } from '@/lib/utils';

export const cnP = (...inputs: ClassValue[]) => cn('leading-7 [&:not(:first-child)]:mt-6', inputs);
