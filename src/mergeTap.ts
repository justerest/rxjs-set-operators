import { from, ObservableInput, OperatorFunction } from 'rxjs';
import { mapTo, mergeMap } from 'rxjs/operators';

export function mergeTap<T, R>(fn: (state: T) => ObservableInput<R>): OperatorFunction<T, T>;
export function mergeTap(fn?: any) {
    return mergeMap((data: any) => from(fn(data)).pipe(mapTo(data)));
}
