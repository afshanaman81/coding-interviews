{
	//https://khan4019.github.io/front-end-Interview-Questions/bst.html
	class Node{
	constructor(value){
		this.data = value
		this.left = null
		this.right= null
	}
	}

	class BinaryTree{
		constructor(value){
			this.root = null
			this.depth = 1
			this.insert(value)
		}

		insert(value){
			let newNode = new Node(value)
			if (this.root == null){
				this.root = newNode
				return this
			}else{
				// traverse the tree to find the parent to insert this new value as child of

				let currNode = this.root
				while (currNode){
					if (value < currNode.data){
						if(!currNode.left){
							currNode.left = newNode;
							break;
						}else{							
							currNode = currNode.left;
						}
					}else{
						if(!currNode.right){
				            currNode.right = newNode;
				            break;
				        }else{				        	
				            currNode = currNode.right;
				        }
					}
				}
				
			}

			// TODO: this.depth++
			
			return this
		}

		// delete

		// traverse
		traverseBreadthFirst(){

		}

	}

	// Test


	let btree = new BinaryTree(6)
	btree.insert(1)
	btree.insert(2)
	btree.insert(3)
	btree.insert(8)
	btree.insert(6)

}
