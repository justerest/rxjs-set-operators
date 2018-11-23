import { ObservableInput, OperatorFunction } from 'rxjs';
export declare function mergeSet<T, R, K extends string | symbol>(key: K, fn: (a1: T) => ObservableInput<R>): OperatorFunction<T, {
    [P in keyof (T & {
        [F in K]: R;
    })]: (T & {
        [F in K]: R;
    })[P];
}>;
