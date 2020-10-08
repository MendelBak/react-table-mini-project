This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Text truncation using ellipses.

The best way to do text truncation is using the 'line-clamp' css property. However, it is not officially part of the CSS spec, so no browsers (other than Opera, I think) support it. I found a way to use it anyway, using -webkit. There are also some NPM packages which perform text truncation. I initially thought to truncate and expand individual cells in the table, but realized this was a bad idea. To expand an individual cell would make the rest of the table look really bad, with lots of empty space and a very confused UI. So, I decided to rethink how to display cell data, but kept my text truncation feature as a small card on top of the page. I could add more features to it, like a "read more" / "read less" button, but decided to focus on other tasks.

## Semantic UI

I spent most of my time working with plain HTML and React, and only added Semantic UI towards the end. I realized that I really wanted some features it had, to display cell/row data more intuitively. Building those features from scratch (like a sidebar) would take longer and not look as good.

Semantic UI has some issues with its documentation (for example, sidebars pushers were not explained well and were tricky to figure out), but it is a very nice framework.

## react-table

I spent a majority of my time figuring out how react-table works. It was trick to understand at first, but I have gained a much better understanding of it, after working with it for a day. I liked some of their Hooks useful, like the rowState Hook, which adds a state object to a row, although I ended up not using it after all.

One thing I didn't like so much about the library is that, due to its heavy usage of Hooks, I'm required to use a lot of function components versus stateful components. This caused me a lot of issues when state management became more necessary. I didn't want to fiddle with a state management library like Redux or Mobix, so I had to deal with it.

## Data Display

I spent a lot of time thinking of how to display cell and row data nicely. I found some nice resources like https://medium.com/nextux/design-better-data-tables-4ecc99d23356 and https://medium.com/design-with-figma/the-ultimate-guide-to-designing-data-tables-7db29713a85a which helped me think of different strategies to design a solution.
I decided, as I mentioned above, to avoid individual cell expansion (even though I spent a fair bit of time on it) and instead brought in Semantic UI to help. I thought of two solutions, 1: A sidebar which would display the data from a single cell (if the application has very large amounts of data in a single cell). Users would be able to modify or delete the data in that sidebar. 2: An accordion dropdown underneath each row (master/detail component) that would present the row in more detail.

I spent some time fiddling with the Accordion component from SUI, trying to use that as a dropdown for the row detail expansion, but realized that it really isn't designed for that. I would need to replace the table rows with Accordion components and have the table live inside a large Accordion component, which is really not optimal. So I moved on, even though I didn't delete the component (TableAccordion).

I built a sidebar with a transition that allows the user to see the entire table, even when the sidebar is open. I didn't have implement data deletion or modification in the sidebar, mostly due to issues managing state. So, the data displays, but no actions can be taken on it, now. I nearly got the row data deletion working, but ran out of time fiddling with setState() trying to update my data object.

## Misc.

There are some small things I could do to clean up the app, like extract EditableCell from the Table component, to its own component, but I wanted to submit this before too much time had passed.

There are also a few small errors (unique key for a list and a DOM error) that would be easy to fix.

There is an icon on the left side of each cell which was intended to use to trigger the TableAccordion component (display row data in detail). Since I removed that component, the button is now useless. I left it because it demonstrates my vision of the UI.
