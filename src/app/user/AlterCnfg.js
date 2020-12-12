// Add a class
el.classList.add("open");

// Add many classes
el.classList.add("this", "little", "piggy");
let classes = ["is-message", "is-warning"];
el.classList.add(...classes);

// Remove a class
el.classList.remove("open");

// Remove multiple classes
el.classList.remove("this", "little", "piggy");

// Loop over each class
el.classList; // DOMTokenList (pretty much an array)
el.classList.forEach((className) => {
  // don't use "class" as that's a reserved word
  console.log(className);
});
for (let className of $0.classList) {
  console.log(className);
}

el.classList.length; // integer of how many classes there are

// Replace a class (replaces first with second)
el.classList.replace("is-big", "is-small");

// Toggle a class (if it's there, remove it, if it's not there, add it)
el.classList.toggle("open");
// Remove the class
el.classList.toggle("open", false);
// Add the class
el.classList.toggle("open", true);
// Add the class with logic
el.classList.toggle("raining", weather === "raining");

// Check if element has class (returns true or false)
el.classList.contains("open");

// Look at individual classes <div class="hot dog">
el.classList.item(0); // hot
el.classList.item(1); // dog
el.classList.item(2); // null
el.classList[1]; // dog
