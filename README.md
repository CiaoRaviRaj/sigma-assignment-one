# Todos-List

A Todo List Application. A simple CRUD application using React and Firebase realtime database

# Deployment link

<a href="https://sigma-first-assignment.web.app/" >React App</a>

# Tech Stack

- React
- React Hooks
- Firebase
- Node.js

# Assignment Question

 <h3>Q 1 . How do you find a duplicate integer in a given array?(Code require)?</h3>
 ans:
    Problem Explanation : we are trying to find duplicate integer in a given array.

    Applied methologies :
            1.firstly we need to declare and initialize an array.
            2.Duplicate elements can be found using   two loops. The outer loop will iterate through the array from 0 to length of the array.
                The outer loop will select an element. The inner loop will be
                used to compare the selected element with the rest of the
                elements of the array.
            3.If a match is found which means the duplicate element is found then, display the element.
    Code :
        //Initialize var arr = [1, 2, 3, 4, 2, 7, 8, 8, 3];
        print("Duplicate elements in given array: ");
        //Searches for duplicate element
            for (let i = 0; i <length(arr); i++ ) {
                for (let j = i + 1; j <length(arr);j++) {
                    if(arr[i] == arr[j]){
                        console.lo(arr[j]);
                    }
                }
            }


<h3>Q2.  Explain how a binary search tree is implemented.(Write in document)?</h3>
ans: 
    binary search tree is method of implemented tree. Tree has nodes.
    Only one is parent node and rest of all are childs or child of child of roots node.

Key rules of binary search tree : 1. left child node of a parent node must be lesser then parent value and right child node.
2.right child node of a parent node must be larger then parent node value and left child node value.
3.every subtree(left or right) must also be a binary tree .

    implementation
        1.take the given Array.
        2. take first value and make it root of BST.
        2.take next index value of array and make it a new node.
        3.A new node in BST is always add at the leaf.
        4.To add an element in BST, we have to start searching from the root node;
        5.if the node to be inserted is less than the root node, then search for an empty location in the left subtree.
        6.Else, search for the empty location in the right subtree and add the data.
        7. Insert in BST is similar to searching of node in BST.
        8. Note.we always have to maintain the rule that the left subtree is smaller than the root, and right subtree is larger than the root.

<h3>Q3. How will you check if two strings are anagrams of each other ? (Code required)?</h3>

ans:
Problem-Statement : Two strings given let string "a" and Sting "b", we are going to check if they are anagrams of each other or not.
anagrams - string "b" contains all the characters in the string "a"

    methologies
    1.Take Input two strings "a" and "b".

    2. A function checkStringAnagrams(string a, string b) which will return true if they are anagram of each other otherwise false.

    3.Find the length of both strings and check if they are the same.

    4.Now sort both strings in lexicographically order and check if they are equal or not.

    5.Return true or false accordingly.

code:
//function ToCheck Anagram of two String
function checkStringsAnagram(a, b) {
//changing weather it has same lenght or not
let len1 = a.length;
let len2 = b.length;
if(len1 !== len2){
console.log('Invalid Input');
return
}

        //sort strings
        let str1 = a.split('').sort().join('');
        let str2 = b.split('').sort().join('');

        //comparing the sorted array
        if(str1 === str2){
            console.log("True");
        } else {
            console.log("False");
        }
    }
    //Input Statement
    checkStringsAnagram("indian","ndiani")

<h3>Q4. What is polymorphism and why is it required ? Provide examples(Write in document)?</h3>

ans: Simplest way Explain polymorphism is that polymorphism is a way of doing same thing in various ways.
In other words, Existence of same thing in the various concept and various ways.
according to OOPS concept ,Polymorphism is the ability of an object to take on many forms. The most common use of polymorphism in OOP occurs when a parent class reference is used to refer to a child class object.

examples
In our general life, a man can be a father in the Home, as well as a husband as well as brother.

In opps concept ,
class interface Vegetarian{}
class Animal{}
class Deer extends Animal implements Vegetarian{}

    now what we say about Deer
        1.A Deer IS-A Animal
        2.A Deer IS-A Vegetarian
        3.A Deer IS-A Deer
        4.A Deer IS-A Object
