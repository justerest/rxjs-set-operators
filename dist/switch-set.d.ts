import { ObservableInput, OperatorFunction } from 'rxjs';
export declare function switchSet<T, R, K extends string | symbol>(key: K, project: (value: T, index: number) => ObservableInput<R>): OperatorFunction<T, {
    [P in keyof (T & {
        [F in K]: R;
    })]: (T & {
        [F in K]: R;
    })[P];
}>;
