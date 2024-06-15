import React from "react";

const page = ({ params }) => {
  console.log(params.id);

  const { title, author, content, date, tags } = blogs.find(
    (blog) => blog.id === params.id
  );

  return (
    <div className="h-screen">
      <h3>Blog Details</h3>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p>author: {author}</p>
        <p>Description: {content}</p>
        <p>Publish date: {date}</p>
        <p className="flex gap-2">
          tags:
          <span className="flex gap-3">
            {" "}
            {tags.map((tag) => (
              <p key={tag}>#{tag}</p>
            ))}
          </span>
        </p>
      </div>
    </div>
  );
};

const blogs = [
  {
    id: "1",
    title: "Understanding JavaScript Closures",
    author: "Jane Doe",
    date: "2024-06-11",
    content: `
      JavaScript closures are a fundamental concept that every JavaScript developer should understand.
      A closure is the combination of a function and the lexical environment within which that function was declared.
      This means that a closure gives you access to an outer function's scope from an inner function.
      In JavaScript, closures are created every time a function is created, at function creation time.
    `,
    tags: ["JavaScript", "Closures", "Programming"],
  },
  {
    id: "2",
    title: "A Guide to Asynchronous JavaScript",
    author: "John Smith",
    date: "2024-05-22",
    content: `
      Asynchronous JavaScript can be a bit tricky to understand at first. 
      However, mastering it is crucial for creating efficient web applications. 
      This guide will cover callbacks, promises, and async/await, explaining how each works and when to use them.
    `,
    tags: ["JavaScript", "Asynchronous", "Promises", "Async/Await"],
  },
  {
    id: "3",
    title: "Exploring the New Features in ES2024",
    author: "Alice Johnson",
    date: "2024-04-15",
    content: `
      The ES2024 specification introduces several exciting new features to JavaScript.
      These include improved pattern matching, new array methods, and more robust error handling mechanisms.
      This post will explore these new features and how they can improve your code.
    `,
    tags: ["JavaScript", "ES2024", "New Features"],
  },
  {
    id: "4",
    title: "How to Optimize JavaScript Performance",
    author: "Bob Brown",
    date: "2024-03-30",
    content: `
      Performance is a critical aspect of web development. 
      Optimizing your JavaScript code can lead to a significant improvement in your web application's performance.
      This post provides tips and techniques for optimizing JavaScript, including minimizing DOM access, using efficient loops, and more.
    `,
    tags: ["JavaScript", "Performance", "Optimization"],
  },
  {
    id: "5",
    title: "Introduction to TypeScript",
    author: "Clara White",
    date: "2024-02-20",
    content: `
      TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
      It offers static typing, classes, and interfaces, which can help you write more robust and maintainable code.
      This introduction will cover the basics of TypeScript and how to get started with it.
    `,
    tags: ["JavaScript", "TypeScript", "Programming"],
  },
];

export default page;
