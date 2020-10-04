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

  delete(element: SetType) {
    if (this.has(element)) {
      delete this.items[element]
      return true
    }
    return false
  }

  clear() {
    this.items = {}
  }

  size() {
    return Object.keys(this.items).length
  }

  values() {
    return Object.values(this.items)
  }

  union(otherSet: Set) {
    const unionSet = new Set()
    this.values().forEach(value => unionSet.add(value))
    otherSet.values().forEach(value => unionSet.add(value))
    return unionSet
  }

  intersection(otherSet: Set) {
    const intersectionSet = new Set()
    const values = this.values()
    const otherValues = otherSet.values()
    let biggerSet = values
    let smallerSet = otherValues
    if (otherValues.length - values.length > 0) {
      biggerSet = otherValues
      smallerSet = values
    }

    smallerSet.forEach(value => {
      if (biggerSet.includes(value)) {
        intersectionSet.add(value)
      }
    })
    return intersectionSet
  }
}
