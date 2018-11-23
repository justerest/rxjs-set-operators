import { ObservableInput, OperatorFunction } from 'rxjs';
export declare function mergeTap<T, R>(fn: (state: T) => ObservableInput<R>): OperatorFunction<T, T>;
