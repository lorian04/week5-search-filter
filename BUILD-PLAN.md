Feature Description
Add a search bar and category filter buttons to the product card page. Users can type to search products by name, click buttons to filter by category, and see results update instantly. A "no results" message shows when nothing matches.
Step-by-Step Breakdown
Step 1: Add the search bar HTML
Add a search input field above the product grid. Include a container div, a text input with placeholder text, and a search icon. No functionality yet — just the HTML structure.

Test: Page loads, search bar is visible above the cards, typing does nothing yet.

Step 2: Style the search bar
Add CSS to make the search bar look clean and modern — centered, rounded corners, proper spacing, subtle border. Make it responsive on mobile.

Test: Search bar looks good on desktop and mobile. Still no functionality.

Step 3: Add category filter buttons
Add a row of buttons below the search bar: "All", "Electronics", "Clothing", "Home", "Sports". Just the HTML and CSS — no click functionality yet.

Test: Buttons are visible, styled nicely in a row, responsive on mobile.

Step 4: Make the search bar filter products by name
Write JavaScript so that when the user types in the search bar, only products whose name contains the typed text are shown. Others are hidden.

Test: Type "head" → only Wireless Headphones shows. Clear the box → all cards return.

Step 5: Make the category buttons filter products
Write JavaScript so clicking a category button shows only products in that category. "All" shows everything. The active button should look highlighted.

Test: Click "Electronics" → only 3 electronics cards show. Click "All" → all 12 return.

Step 6: Make search and category filters work together
Combine both filters so they work at the same time. If "Electronics" is selected and user types "blue", only electronics with "blue" in the name show.

Test: Select "Electronics" + type "blue" → only Bluetooth Speaker shows.

Step 7: Add a "no results" message
When no products match the current search + filter combination, show a friendly "No products found" message instead of a blank page.

Test: Select "Sports" + type "zzz" → "No products found" message appears. Clear search → products return.
