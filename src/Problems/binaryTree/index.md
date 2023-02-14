# Binary tree and Binary search tree

definition: A binary tree is a type of data structure in computer science. It is a tree-like structure that has a root node, and each node in the tree has at most two children, which are referred to as the left child and the right child.

The binary search tree has several important properties, such as:

1. Each node has at most two children
2. The left subtree of a node contains only nodes with values less than the node's value
3. The right subtree of a node contains only nodes with values greater than the node's value

An example of a valid BST: [4,2,6,1,3,5,7]  
An example of an invalid BST: [4,2,6,1,3,5,8] => 5 is smaller than 6, but it is in the right subtree of 6

## Big O

**not guaranteed!!May vary bc of the edge case!!**

| Method type | Big O    |
| ----------- | -------- |
| insertion   | O(log n) |
| access      | O(log n) |
| search      | O(log n) |
| remove      | O(log n) |

Space complexity is usually O(h) where h is the height of the tree. In the worst case, the tree is completely unbalanced (like a linked list) and the space complexity is O(n).
