import { ObservableInput, OperatorFunction } from 'rxjs';
export declare function mergeTap<T, R>(project: (value: T, index: number) => ObservableInput<R>): OperatorFunction<T, T>;
