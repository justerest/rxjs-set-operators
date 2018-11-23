import { OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

export function set<T, R, K extends string | symbol>(key: K, project: (value: T) => R): OperatorFunction<T, { [P in keyof (T & { [F in K]: R; })]: (T & { [F in K]: R; })[P]; }>;
export function set(key: string, project: any) {
    return map((value: any) => ({ ...value, [key]: project(value) }));
}
