import { IndexSpec } from '../public/types/index-spec';

export function createIndexSpec(
  name: string,
  keyPath: string | string[],
  unique: boolean,
  multi: boolean,
  auto: boolean,
  compound: boolean,
  isPrimKey: boolean,
  type?: string
): IndexSpec {
  return {
    name,
    keyPath,
    unique,
    multi,
    auto,
    compound,
    src: (unique && !isPrimKey ? '&' : '') + (multi ? '*' : '') + (auto ? "++" : "") + nameFromKeyPath(keyPath),
    type
  }
}

export function nameFromKeyPath (keyPath?: string | string[]): string {
  return typeof keyPath === 'string' ?
    keyPath :
    keyPath ? ('[' + [].join.call(keyPath, '+') + ']') : "";
}
