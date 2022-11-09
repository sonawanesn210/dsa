/* function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
 }


var invertTree = function(root) {
    if(root){
     [root.left,root.right]=[invertTree(root.right),invertTree(root.left)]
    }
     return root
   };

   console.log(invertTree([4,2,7,1,3,6,9])); */