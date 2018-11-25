import { of } from 'rxjs';
import { delay, tap, toArray } from 'rxjs/operators';
import { scanSet, setAll } from '../src';

test('base', (complete) => {
    of(1, 2, 3)
        .pipe(
            setAll('foo'),
            scanSet('bar', (acc, { foo }) => acc + foo, 0),
            delay(100),
            tap(() => void 0), // $ExpectType MonoTypeOperatorFunction<{ foo: number; bar: number; }>
            toArray(),
        )
        .subscribe((value) => expect(value).toEqual([{ foo: 1, bar: 1 }, { foo: 2, bar: 3 }, { foo: 3, bar: 6 }]), void 0, complete);
});
