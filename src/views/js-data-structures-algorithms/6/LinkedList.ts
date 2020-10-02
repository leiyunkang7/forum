import { defaultEquals } from '../util'
import { Node } from './models/linked-list-models'

export default class LinkedList<T = any> {
  count: number
  head?: Node<T>
  equalsFn: (a: T, b: T) => boolean
  constructor(equalsFn = defaultEquals) {
    this.count = 0
    this.head = undefined
    this.equalsFn = equalsFn
  }

  push(element: T) {
    const node = new Node<T>(element)
    let current
    if (this.head == null) {
      this.head = node
    } else {
      current = this.head
      while (current.next != null) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }

  removeAt(index: number) {
    if (index >= 0 && index < this.count) {
      let current = this.head

      if (index === 0) {
        this.head = current?.next
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous?.next
        if (previous) {
          previous.next = current?.next
        }
      }

      this.count--
      return current?.element
    }

    return undefined
  }

  getElementAt(index: number) {
    if (index >= 0 && index <= this.count) {
      let node = this.head
      for (let i = 0; i < index && node != null; i++) {
        node = node.next
      }
      return node
    }

    return undefined
  }

  insert(element: T, index: number) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element)
      if (index === 0) {
        const current = this.head
        node.next = current
        this.head = node
      } else {
        const previous = this.getElementAt(index - 1)
        const current = previous?.next
        node.next = current
        if (previous) {
          previous.next = node
        }
      }
      this.count++
      return true
    }

    return false
  }

  indexOf(element: T) {
    let current = this.head

    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i
      }

      current = current.next
    }

    return -1
  }

  remove(element: T) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.size() === 0
  }

  getHead() {
    return this.head
  }

  toString() {
    if (this.isEmpty()) {
      return ''
    }

    let objString = `${this.head?.element}`
    let current = this.head?.next
    for (let i = 0; i < this.size() && current != null; i++) {
      objString = `${objString},${current.element}`
      current = current.next
    }
    return objString
  }
}
