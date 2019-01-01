import { from, ObservableInput, OperatorFunction } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

export function mergeSet<T, R, K extends string | symbol>(key: K, project: (value: T, index: number) => ObservableInput<R>): OperatorFunction<T, { [P in keyof (T & { [F in K]: R; })]: (T & { [F in K]: R; })[P]; }>;
export function mergeSet(key: string, project: any) {
    return mergeMap((outerValue: any, index) => from(project(outerValue, index)).pipe(map((innerValue) => ({ ...outerValue, [key]: innerValue }))));
}
