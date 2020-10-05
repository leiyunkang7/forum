import { defaultToString } from '../util'

export default class Dictionary {
  toStrFn: (item: any) => string
  table: Record<string, ValuePair>
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

  remove(key: any) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)]
      return true
    }
    return false
  }

  get(key: any) {
    const valuePair = this.table[this.toStrFn(key)]
    return valuePair == null ? undefined : valuePair.value
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
