Process Reflection
What Did I Build?

This week I built a search and filter feature for a product card page that displays 12 products in a grid. The search bar lets users type in a product name and instantly narrow down results. It ignores capital letters and extra spaces, so even if someone types messy, it still works. I also added category buttons that filter the products by type. When you click one, only that category shows. If nothing matches the search or filter, the grid just hides all the cards instead of glitching or breaking the layout.

How Micro-Iteration Felt

Honestly, working one iteration at a time felt slower at first — but in a good way. I normally want to jump ahead and finish everything quickly, but breaking it into small iterations forced me to understand what each line was doing. My favorite moment was during the iteration where I added .trim() and .toLowerCase() and realized why they mattered. It made the search feel way more polished. The only annoying part was resisting the urge to skip ahead.

What the Self-Review Caught (That I Would’ve Missed)

The review process actually helped a lot. In iteration 4, it caught that I needed .trim() and .toLowerCase() for proper matching. In iteration 1, it pointed out that my search input was missing an aria-label and that emoji icons weren’t hidden from screen readers. Those are small things I probably wouldn’t have double-checked on my own.

Patterns I Noticed

It was really good at catching accessibility issues and edge cases. But it didn’t mention a small spacing issue that I ended up fixing myself.

Web Tool vs. CLI

I used Claude Code in the browser and it felt very beginner-friendly. I liked that I didn’t have to install anything and could preview everything easily. I haven’t tried the CLI version yet.

Would I Use This Again?

Yes — especially for JavaScript features where logic matters. I probably wouldn’t use micro-iteration for simple CSS tweaks. For complex features though, it definitely helps reduce mistakes.