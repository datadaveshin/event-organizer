# Code along for first assignment:
-See file here: [First OOP project](https://github.com/Techtonica/curriculum/blob/master/javascript/first-js-oop-project.md)

# Code and notes

## Step 1
- Start project at 3:30pm
```bash
mkdir event-organizer
cd event-organizer
git init
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

## Step 5
- Add additional objects according to instructions
- Add some tests
- Check in console in the developer tools
- Commit

## Steps 6-8
- Combined steps as we can test at step 7
- Step 6: Added array instance
- Step 7: Created the event objects and tested
*note* here I deviated by only pushing `eventObj2` and `eventObj3` in the second step.
- Commit

## Step 9-10
- Combined steps as step 10 is a test
- Test if jQuery is loaded in the developer tools console with following code:
```
if (typeof $ == 'undefined') {
  console.log("jQuery is NOT loaded");
} else {
  console.log("jQuery IS loaded");
}
```
Modified from [css-tricks](https://css-tricks.com/snippets/jquery/check-if-jquery-is-loaded/)
- Step 9
  - Remove previous console.log statements for clarity
  - Add jQuery code
- Step 10
  - Reload page and check output
  - Update jQuery code to use arrow function, as using "const", "let"
  - Reload page and check output
- Commit 
