import LinkedList from './LinkedList'
import { defaultEquals } from '../util'
import { DoublyNode } from './models/linked-list-models'

export default class DoublyLinkedList<T> extends LinkedList<T> {
  head?: DoublyNode<T>
  tail?: DoublyNode<T>
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
    this.tail = undefined
  }

  insert(element: T, index: number) {
    if (index >= 0 && index <= this.size()) {
      const node = new DoublyNode(element)
      let current: DoublyNode<T> | undefined = this.head
      if (index === 0) {
        if (this.isEmpty()) {
          this.head = node
          this.tail = node
        } else {
          node.next = this.head
          if (current) {
            current.prev = node
          }
          this.head = node
        }
      } else if (index === this.size()) {
        current = this.tail
        if (current) {
          current.next = node
        }
        node.prev = current
        this.tail = node
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous?.next
        node.next = current
        if (previous) {
          previous.next = node
        }
        if (current) {
          current.prev = node
        }
        if (node) {
          node.prev = previous
        }
      }

      this.count++
      return true
    }
    return false
  }
  removeAt(index: number) {
    if (index >= 0 && index < this.size()) {
      let current = this.head
      if (index === 0) {
        this.head = current?.next
        if (this.size() === 1) {
          this.tail = undefined
        } else {
          const head: DoublyNode<T> | undefined = this.head
          if (head) {
            head.prev = undefined
          }
        }
      } else if (index === this.size() - 1) {
        current = this.tail
        this.tail = current?.next
        if (this.tail) {
          this.tail.next = undefined
        }
      } else {
        current = this.getElementAt(index)
        const previous = current?.next
        if (previous) {
          previous.next = current?.next
        }
        if (current?.next) {
          const next: DoublyNode<T> = current.next
          next.prev = previous
        }
      }
      this.count--
      return current?.element
    }

    return undefined
  }
}
