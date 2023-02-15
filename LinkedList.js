class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    // Inserft first node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }
    // Insert last node
    insertLast(data) {
        let node = new Node(data);
        let current;
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    // Insert at index
    insertAtIndex(data, index) {
        if (index > 0 && index > this.size) return;
        if (index === 0) {
            this.insertFirst(data);
            return;
        }
        let current, prev;
        current = this.head;
        let listIndex = 0;
        while (listIndex !== index) {
            prev = current;
            current = current.next;
            listIndex++;
        }
        let node = new Node(data, current)
        current = node;
        prev.next = current;
        this.size++;
    }
    // Get at index
    getAtIndex(index) {
        if (index > 0 && index > this.size) return;
        let current;
        current = this.head;
        let listIndex = 0;
        while (listIndex !== index) {
            current = current.next;
            listIndex++;
        }
        return current
    }

    // Remove at index
    removeAtIndex(index) {
        if (index > 0 && index > this.size) return;
        let current, prev;
        current = this.head;
        let listIndex = 0;
        while (listIndex !== index) {
            prev = current;
            current = current.next;
            listIndex++;
        }
        prev.next = current.next
        this.size--;
    }

    // Clear list
    clearList() {
        this.head = null;
        this.size = 0;
    }

    // Print list data
    printListData() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();

ll.insertFirst(1);
ll.insertFirst(2);
ll.insertFirst(3);
ll.insertLast(0);
ll.insertAtIndex(0, 0);
ll.insertAtIndex('300', 2);
console.log(ll.getAtIndex(2));
ll.removeAtIndex(2)
ll.clearList()

ll.printListData();
