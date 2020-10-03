export default class Set<T = any> {
  items: Record<string, T>
  constructor() {
    this.items = {}
  }

  has(element: string) {
    return Reflect.has(this.items, element)
  }
}
