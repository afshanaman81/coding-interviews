class Node{
	// Properties:
	// some data
	// pointer to the next Node

	// Constructor
	constructor(value){
		this.data = value	// some data
		this.next = null	// pointer to the next Node
	}		
}

class LinkedList{
	// Properties:
	// length
	// pointer to the head Node
	
	constructor(value){
		this.head = null
		this.length = 0
		this.prepend(value)
	}
	
	
	// Add new node to the end
	append(value){
		const newNode = new Node(value)

		// if the list is empty
		if (this.head === null){
			this.head = newNode
			return
		}

		// else  ...
		let currentNode = this.head
		// traverse to the end
		while (currentNode.next != null){
			currentNode = currentNode.next	
		}		
		currentNode.next = newNode
		this.length++
		return this
	}

	// Add new node to the start
	prepend(value){
		const newNode = new Node(value)
		newNode.next = this.head
		this.head = newNode
		this.length++
		return this
	}

	// Delete node with a certain value
	delete(value){
		// if the list is empty
		if (this.head === null){
			return
		}
		// if the value is in the head ..
		if (this.head.data === value){
			this.head = this.head.next
		}else{
			let currentNode = this.head
			let nextNode = currentNode.next

			// Traverse till we find the node with value in a subsequent node
			while (currentNode.next != null){
				if (nextNode.data == value){
					currentNode.next = nextNode.next
				}
				currentNode = currentNode.next
				nextNode = currentNode.next
			}
		}
		
		this.length--
		return this
	}

	// TODO: reverse
	reverse(){	
		if (!this.head.next) {
        return;
	    }

	    var prevNode = this.head;
	    var currNode = prevNode.next;
	    // Traverse till end
	    while (currNode) {
	        var nextNode = currNode.next;
	        currNode.next = prevNode;
	        prevNode = currNode;
	        currNode = nextNode;
	    }
	    this.head = prevNode;
		return this	
	}
}

// Initialize LinkedList
const linkedList = new LinkedList(1)
// Operations
linkedList.append(2)
linkedList.append(3)
linkedList.prepend(0)
linkedList.append(4)
linkedList.delete(0)

//linkedList.reverse()
