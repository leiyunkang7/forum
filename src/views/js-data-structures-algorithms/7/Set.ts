type SetType = string | number

export default class Set {
  items: Record<SetType, SetType>
  constructor() {
    this.items = {}
  }

  has(element: SetType) {
    return Reflect.has(this.items, element)
  }

  add(element: SetType) {
    if (!this.has(element)) {
      this.items[element] = element
      return true
    }

    return false
  }
}
