import { from, ObservableInput, OperatorFunction } from 'rxjs';
import { mapTo, mergeMap } from 'rxjs/operators';

export function mergeTap<T, R>(project: (value: T, index: number) => ObservableInput<R>): OperatorFunction<T, T>;
export function mergeTap(project?: any) {
    return mergeMap((outerValue: any) => from(project(outerValue)).pipe(mapTo(outerValue)));
}
