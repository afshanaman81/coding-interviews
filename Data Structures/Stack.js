class Node{
	constructor(value){
		this.data = value
		this.next = null
	}
}

class Stack{
	constructor(value){
		this.top  = null
		this.height = 0
		this.push(value)
	}

	// add to the Top
	push(value){
		const newNode = new Node(value)
		newNode.next = this.top
		this.top = newNode
		this.height++
		return this
	}

	// remove from the Top
	pop(){
		if (this.top === null)	return -1


		this.top = this.top.next
		this.height--
		return this
	}

	// reverse Stack
	reverse(){
		let prevNode = this.top
		let currNode = prevNode.next
	
		while (currNode){
			let nextNode 	= currNode.next

			currNode.next 	= prevNode		// reverse 
			prevNode 		= currNode		// move prev Node
			currNode 		= nextNode	// move curr Node
		}

		this.top = prevNode
		return this
	}
}

// initialize Stack
const stack = new Stack(1)
// Operations
stack.push(2)
stack.push(3)
//stack.pop()
stack.push(4)
stack.reverse()