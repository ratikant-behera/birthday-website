HAPPY BIRTHDAY WEBSITE — UPDATED BUILD
========================================

WHAT'S NEW
----------
1. Real knife cake-cutting animation
   - Clicking "Cut The Cake" now swipes an animated knife down
     through the cake, the cake visually splits into two halves
     that slide apart, then rejoins before the celebration
     continues.

2. Confetti burst
   - The moment the cake is cut, ~90 colourful confetti pieces
     rain down across the screen (pure CSS/JS, no external
     library needed).

3. "Happy Birthday <Name>!" pop-up
   - A big animated, glowing, gradient-coloured headline pops up
     right as the cake is cut — just like someone shouting the
     wish out loud at a real party.

4. One place to change the name
   - Open index.html and edit:
         <body data-name="Kavya">
     That single value now drives every "Kavya" mention on the
     page (the pop-up AND the final written message), so you can
     reuse this site for anyone by changing one word.

5. Bug fixes
   - Removed a duplicate "Cut Cake" button that shared the same
     id="cake_cut" as the real one (invalid HTML, could cause
     double-firing).
   - Rewrote the closing "story" message sequence — it used to
     select paragraphs with a fragile global "p:nth-child(i)"
     selector that could break if the paragraph count changed.
     It now walks through the .message paragraphs directly and
     in order, and automatically adapts to however many lines
     you write.

6. Visual polish
   - Frosted-glass bottom navbar, pill-shaped buttons with hover
     lift, emoji icons on every button for quicker scanning.

7. Envelope + letter message viewer (replaces the old
   flash-one-line-at-a-time message)
   - Clicking "Open Your Letter" reveals a sealed envelope with
     a wax-seal-style seal in the middle.
   - Tapping the envelope folds the flap open and a letter
     slides out and expands into a readable paper card, with
     each line gently fading in one after another.
   - The letter is scrollable if it doesn't fit the screen, has
     a script-style "Dear <Name>," heading and sign-off, and a
     ✕ close button (or tap the dimmed background) to fold it
     back up and return to the cake.

MISSING IMAGE FILES
--------------------
Your original upload was missing a few image files referenced in
stylesheet.css (there's a 5-file attachment limit, so a few didn't
come through):
  - bulb_yellow.png, bulb_red.png, bulb_pink.png
  - b3.png, b5.png, b6.png, b7.png

The site still runs fine without them — those bulbs/balloons will
just be invisible (no error, they simply won't render). Drop the
missing files into this same folder (same names) and everything
will light up / show balloons for every letter as originally
designed.

HOW TO USE
----------
Just open index.html in a browser, or upload the whole folder to
any static web host (Netlify, GitHub Pages, etc.) — no build step
needed.
