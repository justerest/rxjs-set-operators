import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { setAll } from '../src';

test('base', (complete) => {
    expect.assertions(3);
    of(0, 1, '2')
        .pipe(
            tap(() => void 0), // $ExpectType MonoTypeOperatorFunction<string | number>
            setAll('foo'),
            tap(() => void 0), // $ExpectType MonoTypeOperatorFunction<{ foo: string | number; }>
        )
        .subscribe((value) => expect(value).toHaveProperty('foo'), void 0, complete);
});

test('double', (complete) => {
    expect.assertions(3);
    of(0, 1, '2')
        .pipe(
            tap(() => void 0), // $ExpectType MonoTypeOperatorFunction<string | number>
            setAll('foo'),
            tap(() => void 0), // $ExpectType MonoTypeOperatorFunction<{ foo: string | number; }>
            setAll('bar'),
            tap(() => void 0), // $ExpectType MonoTypeOperatorFunction<{ bar: { foo: string | number; }; }>
        )
        .subscribe((value) => expect(value.bar).toHaveProperty('foo'), void 0, complete);
});
