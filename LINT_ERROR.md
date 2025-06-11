AN@DESKTOP-IKPTNP9 MINGW64 /c/Projects/OFlow/oflow-interface (main)
$ bun run lint
$ eslint --fix .

oflow-interface\LINT_ERROR.md
282:37 error Label reference 'key' not found markdown/no-missing-label-refs
288:37 error Label reference 'path[i' not found markdown/no-missing-label-refs
289:37 error Label reference 'path[path.length - 1' not found markdown/no-missing-label-refs

oflow-interface\src\api\service\main\file\local\accept-mime.ts
6:8 error ES2015 module syntax is preferred over namespaces @typescript-eslint/no-namespace  
163:9 error 'unknown' overrides all other types in this union type @typescript-eslint/no-redundant-type-constituents

oflow-interface\src\api\service\target\attribute\t-attributes-service-api.ts
19:7 error Type parameter T is used only once in the function signature @typescript-eslint/no-unnecessary-type-parameters

oflow-interface\src\api\service\target\step\t-step-service-api.ts
19:7 error Type parameter T is used only once in the function signature @typescript-eslint/no-unnecessary-type-parameters

oflow-interface\src\index.ts
93:8 warning Using exported name 'AcceptMime' as identifier for default export import-x/no-named-as-default

oflow-interface\src\utils\crypto-utils.ts
1:1 error ES2015 module syntax is preferred over namespaces @typescript-eslint/no-namespace

oflow-interface\src\utils\data-utils.ts
5:1 error ES2015 module syntax is preferred over namespaces @typescript-eslint/no-namespace

oflow-interface\src\utils\file-utils.ts
3:1 error ES2015 module syntax is preferred over namespaces @typescript-eslint/no-namespace

oflow-interface\src\utils\math-utils.ts
1:1 error ES2015 module syntax is preferred over namespaces @typescript-eslint/no-namespace

oflow-interface\src\utils\native-event-utils.ts
14:1 error ES2015 module syntax is preferred over namespaces @typescript-eslint/no-namespace

oflow-interface\src\utils\network-utils.ts
1:1 error ES2015 module syntax is preferred over namespaces @typescript-eslint/no-namespace

oflow-interface\src\utils\number-utils.ts
1:1 error ES2015 module syntax is preferred over namespaces @typescript-eslint/no-namespace

oflow-interface\src\utils\page-utils.ts
3:1 error ES2015 module syntax is preferred over namespaces @typescript-eslint/no-namespace

oflow-interface\src\utils\rv-utils.ts
3:1 error ES2015 module syntax is preferred over namespaces @typescript-eslint/no-namespace
35:31 error Type parameter T is used only once in the function signature @typescript-eslint/no-unnecessary-type-parameters
47:31 error Type parameter T is used only once in the function signature @typescript-eslint/no-unnecessary-type-parameters

oflow-interface\src\utils\throttle-utils.ts
27:5 error Unsafe assignment of an `any` value @typescript-eslint/no-unsafe-assignment

oflow-interface\src\utils\time-utils.ts
1:1 error ES2015 module syntax is preferred over namespaces @typescript-eslint/no-namespace

oflow-interface\src\utils\url-utils.ts
4:1 error ES2015 module syntax is preferred over namespaces @typescript-eslint/no-namespace

oflow-interface\src\utils\vector-utils.ts
7:1 error ES2015 module syntax is preferred over namespaces @typescript-eslint/no-namespace

✖ 23 problems (22 errors, 1 warning)
