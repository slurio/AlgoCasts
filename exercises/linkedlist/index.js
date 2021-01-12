// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    //create new node
    //break head ref with existing head
    //new node assign to head prop of link list
    // new node link to old node
    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }

        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        //return entire node
        //handle case where no nodes are associated with linked list
        let node = this.head;

            if (!node) {
                return null;
            }

            while(node.next) {
                node = this.head.next;
            }
       
        return node;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        // second node to be first instead of first
        if(!this.head) {
            return;
        }
        this.head = this.head.next;

    }

    removeLast() {
        // previous looks first node
        // node looks at second
        // iterate through linked list and move forward to the right
        // when node.next === null remove that node
        // to remove node go ot previous node and make that next === null
        // edge cases to know: linked list is one or empty linked list

        //edge case if linked list is length of 1
        
        if (!this.head) {
            return;
        } else if(!this.head.next) {
            this.head = null;
        } else {
            let previous = this.head;
            let node = this.head.next;

            while(node.next) {
                previous = node;
                node = node.next;
            }

            previous.next = null;
        }
    }
}


module.exports = { Node, LinkedList };
