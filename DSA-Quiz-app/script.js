const answers = [
  {
    question: "Which data structure uses LIFO (Last-In-First-Out)?",
    options: ["Queue", "Stack", "Tree", "Graph"],
    answer: "Stack",
  },
  {
    question: "What is the time complexity of binary search in a sorted array?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    answer: "O(log n)",
  },
  {
    question:
      "Which sorting algorithm is considered the fastest in average case?",
    options: ["Bubble Sort", "Quick Sort", "Insertion Sort", "Selection Sort"],
    answer: "Quick Sort",
  },
  {
    question: "Which data structure is used for implementing recursion?",
    options: ["Queue", "Stack", "Heap", "Graph"],
    answer: "Stack",
  },
  {
    question:
      "Which algorithm is used to find the shortest path in a weighted graph?",
    options: ["DFS", "BFS", "Dijkstra's Algorithm", "Prim's Algorithm"],
    answer: "Dijkstra's Algorithm",
  },
  {
    question: "What is the worst-case time complexity of Merge Sort?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(n^2)"],
    answer: "O(n log n)",
  },
  {
    question: "In which traversal is the root node visited first?",
    options: ["Inorder", "Preorder", "Postorder", "Level Order"],
    answer: "Preorder",
  },
  {
    question: "Which data structure is used in Breadth First Search (BFS)?",
    options: ["Stack", "Queue", "Heap", "Tree"],
    answer: "Queue",
  },
  {
    question: "Which data structure provides fast access using keys?",
    options: ["Queue", "Array", "Stack", "Hash Table"],
    answer: "Hash Table",
  },
  {
    question: "Which of the following is not a stable sorting algorithm?",
    options: ["Bubble Sort", "Insertion Sort", "Quick Sort", "Merge Sort"],
    answer: "Quick Sort",
  },
  {
    question: "Which traversal of BST results in sorted order?",
    options: ["Preorder", "Postorder", "Level Order", "Inorder"],
    answer: "Inorder",
  },
  {
    question: "Which heap is used in priority queues?",
    options: ["Binary Heap", "Binomial Heap", "Fibonacci Heap", "All of these"],
    answer: "All of these",
  },
  {
    question: "Which algorithm is used in minimum spanning tree?",
    options: [
      "Kruskal's Algorithm",
      "Dijkstra's Algorithm",
      "DFS",
      "Binary Search",
    ],
    answer: "Kruskal's Algorithm",
  },
  {
    question:
      "Which data structure allows insertion and deletion from both ends?",
    options: ["Stack", "Queue", "Deque", "List"],
    answer: "Deque",
  },
  {
    question: "Which of the following data structure is non-linear?",
    options: ["Array", "Linked List", "Stack", "Graph"],
    answer: "Graph",
  },
  {
    question: "Which algorithm uses divide and conquer strategy?",
    options: ["Merge Sort", "Linear Search", "DFS", "BFS"],
    answer: "Merge Sort",
  },
  {
    question:
      "Which data structure supports O(1) insertion and deletion from front and rear?",
    options: ["Stack", "Queue", "Deque", "Heap"],
    answer: "Deque",
  },
  {
    question: "Which tree traversal is best for copying a tree?",
    options: ["Inorder", "Preorder", "Postorder", "Level Order"],
    answer: "Preorder",
  },
  {
    question: "Which searching algorithm is suitable for unsorted data?",
    options: ["Binary Search", "Jump Search", "Linear Search", "None"],
    answer: "Linear Search",
  },
  {
    question: "What is the space complexity of Depth First Search?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    answer: "O(n)",
  },
  {
    question: "Which algorithm is used for cycle detection in a graph?",
    options: ["Dijkstra", "Bellman-Ford", "Union-Find", "Prim"],
    answer: "Union-Find",
  },
  {
    question: "Which traversal is used to delete a binary tree?",
    options: ["Preorder", "Inorder", "Postorder", "Level Order"],
    answer: "Postorder",
  },
  {
    question:
      "Which is the most efficient data structure for implementing LRU cache?",
    options: ["Array", "Hash Map + Linked List", "Stack", "Queue"],
    answer: "Hash Map + Linked List",
  },
  {
    question: "Which operation is costly in a singly linked list?",
    options: [
      "Insert at beginning",
      "Insert at end",
      "Delete from beginning",
      "Traversal",
    ],
    answer: "Insert at end",
  },
  {
    question: "Which notation describes the best case complexity?",
    options: ["Big O", "Big Omega", "Theta", "None"],
    answer: "Big Omega",
  },
  {
    question: "What is the height of a complete binary tree with n nodes?",
    options: ["log n", "n", "n/2", "sqrt(n)"],
    answer: "log n",
  },
  {
    question: "Which algorithm is used for Topological Sorting?",
    options: ["DFS", "BFS", "Dijkstra", "Bellman-Ford"],
    answer: "DFS",
  },
  {
    question: "Which structure is used to implement function calls?",
    options: ["Stack", "Queue", "Array", "Heap"],
    answer: "Stack",
  },
  {
    question: "Which data structure uses hashing technique?",
    options: ["Stack", "Queue", "Hash Table", "Tree"],
    answer: "Hash Table",
  },
  {
    question: "Which algorithm finds shortest path even with negative weights?",
    options: ["Dijkstra", "Bellman-Ford", "Floyd-Warshall", "DFS"],
    answer: "Bellman-Ford",
  },
];

function randomQuestions() {
  // const data = new Set();
  // while (data.size !== 5) {
  //   const idx = Math.floor(Math.random() * answers.length);
  //   data.add(answers[idx]);
  // }
  // return [...data];

//  const shuffledQuestions = answers.sort(() => 0.5 - Math.random()).slice(0, 5);
//  return shuffledQuestions;


// best approach ( dsa mind)
  const arr=[];
  let length = answers.length;
  console.log(length)
  for(let i=0;i<10;i++){
    let randNum = Math.floor(Math.random()*length);
    arr.push(answers[randNum]);

    // swap in original answers array
    [answers[randNum],answers[length-1]] = [answers[length-1],answers[randNum]];
    length--;
  }
  return arr;
}

const form = document.querySelector("form");
const problem = randomQuestions();



// Create questions
problem.forEach((obj, index) => {
  const div = document.createElement("div");
  div.className = "question";

  const para = document.createElement("p");
  para.textContent = `${index + 1}. ${obj.question}`;
  div.appendChild(para);

  obj.options.forEach((val) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = `q${index + 1}`; // Important fix
    input.value = val;
    label.appendChild(input);
    label.append(` ${val}`);
    label.style.display = "block";
    div.appendChild(label);
  });

  form.appendChild(div);
});

const note = document.createElement("p");
note.className = "note";
note.textContent = "Note: You will get 0 marks for any questions you leave unanswered.";
note.style.color = "red";
form.appendChild(note);

// Submit button
const submit = document.createElement("button");
submit.textContent = "Submit";
submit.type = "submit";

form.appendChild(submit);

// Reset button
const reset = document.createElement("button");
reset.textContent = "Reset Form";
reset.type = "button";
reset.className='reset'
form.appendChild(reset);

// Create result element (hidden initially)
const res = document.createElement("p");
res.className = "result";
res.style.display = "none";
form.appendChild(res);

// Handle submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let score = 0;
  const corrAns = {}
  problem.forEach((obj, idx) => {
    const selected = document.querySelector(`input[name="q${idx + 1}"]:checked`);
    if (selected && selected.value === obj.answer) {
      score++;
    }
    else if(selected && selected.value !== obj.answer){
      corrAns[idx + 1] = obj.answer; 
    }
    // else{
    //   alert(`Alert: You will get 0 marks for any question ${idx + 1}`);
    //   return; 
    // }
  });

  res.textContent = `✅ You scored ${score} out of ${problem.length}`;
  res.style.display = "block"; 

  for (const [qNum, ans] of Object.entries(corrAns)) {
    let correct = document.createElement('p');
    correct.className = 'correct-answer';
    correct.style.color = 'blue';
    correct.style.fontWeight = 'bold';
    correct.style.margin = '5px 0';
    correct.innerHTML = `🤷‍♂️Correct Answer: <strong>${qNum}) ${ans}</strong>`;
    form.appendChild(correct);
  }
})

// Handle reset
reset.addEventListener("click", () => {
  location.reload(); 
});
