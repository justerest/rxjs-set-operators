import { OperatorFunction } from 'rxjs';
export declare function setAll<T, K extends string | symbol>(key: K): OperatorFunction<T, {
    [S in K]: {
        [P in keyof T]: T[P];
    };
}>;
