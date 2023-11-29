import { ClassValue } from 'clsx';
import { cn } from '@/lib/utils';

export const cnLead = (...inputs: ClassValue[]) => cn('text-xl text-muted-foreground', inputs);
