# Monorepo demo

## Quick Start

加载所有依赖

```bash
$ pnpm install
```

### Apps

Preview:

- CRA
- Umi App
- Dumi App

### React App

```bash
# Start React App
$ pnpm --filter "react-app" start
```

#### Dumi App

```bash
$ pnpm --filter "dumi-app..." --parallel start

```

#### umi App

```bash
$ pnpm --filter "umi-app..." --parallel start

```

### packages/shared

公共工具包

```bash
$ pnpm --filter "@base/shared" dev
```

### packages/ui

公共 ui 包

```bash
$ pnpm --filter "@base/ui" dev
```
