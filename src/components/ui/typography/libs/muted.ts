import { ClassValue } from 'clsx';
import { cn } from '@/lib/utils';

export const cnMuted = (...inputs: ClassValue[]) => cn('text-sm text-muted-foreground', inputs);
