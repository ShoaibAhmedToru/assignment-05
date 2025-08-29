
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
answer:
getElementById:we can access a element by its unique id.it returns only one elements and if id not found then it will return null.
getElementsByClassName:we can access many elements by one class.This is a live collection, meaning the collection also updates whenever the page is refreshed.
querrySelector/querrySelectorAll: these are used to select an element using a CSS selector.Like CSS selectors, we can use #id, .class, and tag.

2. How do you **create and insert a new element into the DOM**?
answer:
 at first we have to use createElement then, set content/attributes and lastly insert into the DOM using appendChild, prepend, or insertBefore.

3. What is **Event Bubbling** and how does it work?
answer:
When an event occurs on a child element, the event is firstly handled on the child element and then gradually spreads toward the parent element until it reaches the root of the document. This process is called Event Bubbling.


4. What is **Event Delegation** in JavaScript? Why is it useful?
answer:
Event Delegation is a JavaScript technique where instead of attaching separate event listeners to each child element, we attach a single listener to the parent element and then check the source  the event.
advantages:
Efficiency,Dynamic elements,Code simplicity..

5. What is the difference between **preventDefault() and stopPropagation()** methods?
answer:
preventDefault():it stop event's default browser action.
Prevents the event's default browser action.
stopPropagation(): stop event's bubbling/capturing

