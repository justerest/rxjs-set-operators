import { OperatorFunction } from 'rxjs';
import { scan } from 'rxjs/operators';

export function scanSet<T, R, K extends string | symbol>(key: K, fn: (a1: R, a2: T) => R, seed: R): OperatorFunction<T, { [P in keyof (T & { [F in K]: R; })]: (T & { [F in K]: R; })[P]; }>;
export function scanSet(key: string, fn: any, seed: any) {
    return scan((res: any, data: any) => ({ ...data, [key]: fn(res[key], data) }), { [key]: seed });
}
