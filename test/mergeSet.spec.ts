import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { mergeSet } from '../src';

test('base', (complete) => {
    expect.assertions(2);
    of({}, { foo: 'initValue' })
        .pipe(
            tap(() => void 0), // $ExpectType MonoTypeOperatorFunction<{} | { foo: string; }>
            mergeSet('foo', () => of(1)),
            delay(100),
            tap(() => void 0), // $ExpectType MonoTypeOperatorFunction<{ foo: number; }>
        )
        .subscribe((value) => expect(value).toEqual({ foo: 1 }), void 0, complete);
});

test('without interface', (complete) => {
    expect.assertions(2);
    of({ foo: 0 }, {})
        .pipe(
            tap(() => void 0), // $ExpectType MonoTypeOperatorFunction<{ foo: number; } | {}>
            mergeSet('foo', ({ foo }) => of(1)), // $ExpectError
            mergeSet('foo', () => of(3)),
            tap(() => void 0), // $ExpectType MonoTypeOperatorFunction<{ foo: number; }>
        )
        .subscribe((value) => expect(value).toEqual({ foo: 3 }), void 0, complete);
});

test('with generic type', (complete) => {
    expect.assertions(2);
    of<{ foo?: number; bar?: number; }>({ foo: 0 }, { bar: 0 })
        .pipe(
            tap(() => void 0), // $ExpectType MonoTypeOperatorFunction<{ foo?: number | undefined; bar?: number | undefined; }>
            mergeSet('foo', ({ bar = 0 }) => of(bar + 3)),
            mergeSet('bar', () => of(3)),
            tap(() => void 0), // $ExpectType MonoTypeOperatorFunction<{ foo: number; bar: number; }>
        )
        .subscribe((value) => expect(value).toEqual({ foo: 3, bar: 3 }), void 0, complete);
});
