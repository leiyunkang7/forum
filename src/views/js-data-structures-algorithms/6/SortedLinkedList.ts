import { defaultEquals } from '../util'
import LinkedList from './LinkedList'

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1
}

function defaultCompare<T>(a: T, b: T) {
  if (a === b) {
    return 0
  }

  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}
export default class SortedLinkedList<T> extends LinkedList<T> {
  compareFn: (a: T, b: T) => number

  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn)
    this.compareFn = compareFn
  }

  insert(element: T, index = 0) {
    if (this.isEmpty()) {
      return super.insert(element, 0)
    }

    const pos = this.getIndexNextSortedElement(element)
    return super.insert(element, pos)
  }
  getIndexNextSortedElement(element: T) {
    const current = this.head
    let i = 0
    for (; i < this.size() && current; i++) {
      const comp = this.compareFn(element, current.element)
      if (comp === Compare.LESS_THAN) {
        return i
      }
    }
    return i
  }
}
