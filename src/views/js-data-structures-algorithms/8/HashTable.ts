import { defaultToString } from '../util'

export default class HashTable {
  toStrFn: (item: any) => string
  table: Record<string, any>
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }
}
