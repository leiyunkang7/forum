import { defaultToString } from '../util'

export default class Dictionary {
  toStrFn: (item: any) => string
  table: Record<string, any>
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }

  hasKey(key: any) {
    return this.table[this.toStrFn(key)] != null
  }

  set(key: any, value: any) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key)
      this.table[tableKey] = new ValuePair(key, value)
      return true
    }
    return false
  }
}

class ValuePair {
  key: any
  value: any
  constructor(key: any, value: any) {
    this.key = key
    this.value = value
  }

  toString() {
    return `[#${this.key}: ${this.value}]`
  }
}
