# rxjs-set-operators

RxJS pipeable operators for object stream.

## Motivation

Since RxJS v6.x the `resultSelector` argument is deprecated.

## Stream scheme

`a -> { foo: a } -> { foo: a, bar: b  } -> { foo: a, bar: b, baz: a + b }`

## Example

https://github.com/justerest/up-ng/blob/master/src/index.ts

```ts
from(['./foo', './bar/*.ts', './baz.html'])
    .pipe(
        setAll('pattern'),
        mergeSet('filePath', ({ pattern }) => getFileList(pattern)),
        set('outFilePath', ({ filePath }) => resolve(filePath)),
        mergeSet('isSuccess', ({ filePath, outFilePath }) => upgradeFile(filePath, outFilePath)),
        scanSet('counter', (acc, { pattern }) => {
            const index = acc[pattern] || 0;
            return ({ ...acc, [pattern]: index + 1 });
        }, {} as Record<string, number>),
    )
    .subscribe(({ pattern, filePath, outFilePath, isSuccess, counter }) => {
        // ...
    });
```

## Operators

* mergeSet
* mergeTap
* scanSet
* set
* setAll
