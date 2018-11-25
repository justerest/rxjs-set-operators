import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { set } from '../src';

test('base', (complete) => {
    expect.assertions(2);
    of({}, { foo: 'initValue' })
        .pipe(
            tap(() => void 0), // $ExpectType MonoTypeOperatorFunction<{} | { foo: string; }>
            set('foo', () => 1),
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
            set('foo', ({ foo }) => 1), // $ExpectError
            set('foo', () => 3),
            tap(() => void 0), // $ExpectType MonoTypeOperatorFunction<{ foo: number; }>
        )
        .subscribe((value) => expect(value).toEqual({ foo: 3 }), void 0, complete);
});

test('with generic type', (complete) => {
    expect.assertions(2);
    of<{ foo?: number; bar?: number; }>({ foo: 0 }, { bar: 0 })
        .pipe(
            tap(() => void 0), // $ExpectType MonoTypeOperatorFunction<{ foo?: number | undefined; bar?: number | undefined; }>
            set('foo', ({ bar = 0 }) => bar + 3),
            set('bar', () => 3),
            tap(() => void 0), // $ExpectType MonoTypeOperatorFunction<{ foo: number; bar: number; }>
        )
        .subscribe((value) => expect(value).toEqual({ foo: 3, bar: 3 }), void 0, complete);
});
