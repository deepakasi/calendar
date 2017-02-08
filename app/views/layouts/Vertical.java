import java.io.*;
import java.util.*;
class Vertical
{
	class Node{
		int item;
		Node left,right;
		public Node(int data)
		{
			item=data;
			left=right=null;
		}
		public static Node root;
	}
	public static void main(String []args)
	{
		Vertical tree=new Vertical();
		tree.root=new Node(1);
		tree.root.left=new Node(2);
		tree.root.right=new Node(3);
		tree.root.left.left=new Node(4);
		tree.root.left.right=new Node(5);
		tree.root.right.left=new Node(6);
		tree.root.right.right=new Node(7);
		tree.root.right.left.right=new Node(8);
		tree.root.right.right.right=new Node(9);


	}
}