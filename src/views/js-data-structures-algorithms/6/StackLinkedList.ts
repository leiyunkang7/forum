import DoublyLinkedList from './DoublyLinkedList'

export default class StackLinkedList<T> {
  items: DoublyLinkedList<T>
  constructor() {
    this.items = new DoublyLinkedList()
  }

  push(element: T) {
    this.items.push(element)
  }

  pop() {
    if (this.items.isEmpty()) {
      return undefined
    }

    return this.items.removeAt(this.items.size() - 1)
  }
}
