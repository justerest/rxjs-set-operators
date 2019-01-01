import { OperatorFunction } from 'rxjs';
export declare function scanSet<T, R, K extends string | symbol>(key: K, accumulator: (acc: R, value: T, index: number) => R, seed: R): OperatorFunction<T, {
    [P in keyof (T & {
        [F in K]: R;
    })]: (T & {
        [F in K]: R;
    })[P];
}>;
