import fs from 'fs';
import path from 'path';

export function createComponent(name: string) {
  const dir = path.join(process.cwd(), name);
  fs.mkdirSync(dir, { recursive: true });

  fs.writeFileSync(
    path.join(dir, `${name}.tsx`),
    `export const ${name} = () => <div>${name}</div>;`
  );
}

