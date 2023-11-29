import { ClassValue } from 'clsx';
import { cn } from '@/lib/utils';

export const cnBlockquote = (...inputs: ClassValue[]) => cn('mt-6 border-l-2 pl-6 italic', inputs);
