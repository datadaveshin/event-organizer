# Code along for first assignment:
-See file here: [First OOP project](https://github.com/Techtonica/curriculum/blob/master/javascript/first-js-oop-project.md)

# Code and notes

## Step 1
- Start project at 3:30pm
```bash
mkdir event-organizer
cd event-organizer
touch index.html
```
- Fill in content into index.html
- Add .gitignore & fill in contents
- Test with:
```bash
open index.html
```
- Commit

## Steps 2-4
Combined these because we can test at step 4 with a simple console.log statement.
- Add a README.md file
- Step 2: Add js file
`touch event.js`
- Step 3: Manually type in contents
- Step 4:
  - Make class instance
  - Make simple test
  ```js
  const eventObj1 = new Event("KLOS Golden Gala", "An Evening with hollywood vampires");
  console.log("eventObj1:", eventObj1);
  ```
  - Test by opening developer tools and checking contents of eventObj1
  - Commit
