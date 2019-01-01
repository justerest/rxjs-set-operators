import { OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

export function setAll<T, K extends string | symbol>(key: K): OperatorFunction<T, { [S in K]: { [P in keyof T]: T[P]; } }>;
export function setAll(key: string) {
    return map((value: any) => ({ [key]: value }));
}
