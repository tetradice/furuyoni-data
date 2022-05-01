/** 対象オブジェクトのキー一覧を取得する。Object.keysの型付け版 */
export function typedObjectKeys<T extends object>(obj: T): (keyof T)[] {
  return Object.keys(obj) as unknown as (keyof T)[];
}
