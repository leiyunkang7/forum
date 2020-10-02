export class Node<T = any> {
  element: T
  next?: Node<T>
  constructor(element: T, next?: Node<T>) {
    this.element = element
    this.next = next
  }
}

export class DoublyNode<T> extends Node {
  prev?: DoublyNode<T>
  constructor(element: T, next?: DoublyNode<T>, prev?: DoublyNode<T>) {
    super(element, next)
    this.prev = prev
  }
}
