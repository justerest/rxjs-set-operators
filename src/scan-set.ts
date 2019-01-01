import { OperatorFunction } from 'rxjs';
import { scan } from 'rxjs/operators';

export function scanSet<T, R, K extends string | symbol>(key: K, accumulator: (acc: R, value: T, index: number) => R, seed: R): OperatorFunction<T, { [P in keyof (T & { [F in K]: R; })]: (T & { [F in K]: R; })[P]; }>;
export function scanSet(key: string, accumulator: any, seed: any) {
    return scan((acc: any, value: any, index) => ({ ...value, [key]: accumulator(acc[key], value, index) }), { [key]: seed });
}
