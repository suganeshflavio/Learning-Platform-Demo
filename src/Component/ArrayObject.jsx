import React from 'react'

const ArrayObject = () => {
    // Define an array of topics for a computer science course
const courseSyllabus = [
    {
      topic: "Introduction to Computer Science",
      subtopics: ["History of Computing", "Data Representation", "Algorithms and Problem Solving"]
    },
    {
      topic: "Programming Fundamentals",
      subtopics: ["Variables and Data Types", "Control Structures", "Functions"]
    },
    {
      topic: "Object-Oriented Programming",
      subtopics: ["Classes and Objects", "Inheritance", "Polymorphism"]
    },
    {
      topic: "Data Structures and Algorithms",
      subtopics: ["Arrays and Linked Lists", "Stacks and Queues", "Sorting and Searching"]
    }
  ];
  
  // Accessing an element in the array
  console.log(courseSyllabus[0].topic); // "Introduction to Computer Science"
  
  // Looping through the array
  courseSyllabus.forEach(topic => {
    console.log(topic.topic);
    console.log(topic.subtopics);
  });
  
  // Filtering the array
  const programmingFundamentals = courseSyllabus.filter(topic => {
    return topic.topic === "Programming Fundamentals";
  });
  console.log(programmingFundamentals); 
  // [{ topic: "Programming Fundamentals", subtopics: ["Variables and Data Types", "Control Structures", "Functions"] }]
  return (
    <div>
        
    </div>
  )
}

export default ArrayObject