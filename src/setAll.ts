import { OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

export function setAll<T, K extends string | symbol>(key: K): OperatorFunction<T, { [P in K]: T; }>;
export function setAll(key: string) {
    return map((data: any) => ({ [key]: data }));
}
