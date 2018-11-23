import { OperatorFunction } from 'rxjs';
export declare function setAll<T, K extends string | symbol>(key: K): OperatorFunction<T, {
    [P in K]: T;
}>;
