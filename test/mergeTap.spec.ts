import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { mergeTap } from '../src';

test('base', (complete) => {
    expect.assertions(6);
    const source = {};
    of(source, source)
        .pipe(
            mergeTap(() => of(1, 2, 3).pipe(delay(100))),
            tap(() => void 0), // $ExpectType MonoTypeOperatorFunction<{}>
        )
        .subscribe((value) => expect(value).toBe(source), void 0, complete);
});
