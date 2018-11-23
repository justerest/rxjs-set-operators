import { OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

export function set<T, R, K extends string | symbol>(key: K, fn: (a1: T) => R): OperatorFunction<T, { [P in keyof (T & { [F in K]: R; })]: (T & { [F in K]: R; })[P]; }>;
export function set(key: string, fn: any) {
    return map((data: any) => ({ ...data, [key]: fn(data) }));
}
