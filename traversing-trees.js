class BinaryTreeNode {
    constructor(value, left, right) {
        Object.assign(this, { value, left, right })
    }
}

let root = new BinaryTreeNode(
    4,
    new BinaryTreeNode(6, new BinaryTreeNode(2), new BinaryTreeNode(1)),
    new BinaryTreeNode(3)
)

let inOrder = (root) => {
    let results = ''
    traverse(root)
    return results
    function traverse(root) {
        if (!root) {
            return
        }
        root.left && traverse(root.left)
        results += `${root.value} `
        root.right && traverse(root.right)
    }
}

console.log(inOrder(root))

let preOrder = (root) => {
    let results = ''
    traverse(root)
    return results
    function traverse(root) {
        if (!root) {
            return
        }
        results += `${root.value} `
        root.left && traverse(root.left)

        root.right && traverse(root.right)
    }
}

console.log(preOrder(root))

let postOrder = (root) => {
    let results = ''
    traversePostOrder(root)
    return results
    function traversePostOrder(root) {
        if (!root) {
            return
        }
        root.left && traversePostOrder(root.left)
        root.right && traversePostOrder(root.right)
        results += `${root.value} `
    }
}

console.log(postOrder(root))
