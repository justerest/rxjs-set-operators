import { from, ObservableInput, OperatorFunction } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

export function mergeSet<T, R, K extends string | symbol>(key: K, fn: (a1: T) => ObservableInput<R>): OperatorFunction<T, { [P in keyof (T & { [F in K]: R; })]: (T & { [F in K]: R; })[P]; }>;
export function mergeSet(key: string, fn?: any) {
    return mergeMap((data: any) => from(fn(data)).pipe(map((response) => ({ ...data, [key]: response }))));
}
