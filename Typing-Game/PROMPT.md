
<p align= "center">
  <img src="https://cdn.dribbble.com/users/2147021/screenshots/4704853/managertyping.gif" alt="GIF" width="400" height="300" style="zoom: 1; margin-left: 20px;">
</p>

These steps outline how to build and enhance the typing game app in a structured, descriptive format.

## Step-by-Step Descriptive Prompt for Building the App

### 1. Website
1.1 Create a responsive website app for a typing game where random letters fall from the top of the screen.
1.2 Ensure the website works well on different screen sizes, including mobile devices.
1.3 Include a start screen.
1.4 Add a pause button to temporarily stop the game.
1.5 Incorporate an end screen with the user's score and options to restart or quit.

### 2. Boxes
2.1 Display the letters in rectangle boxes with a background color different from the main background.
2.2 Ensure the boxes have smooth animations and transitions as they fall from the top of the screen.
2.3 Design the boxes to be visually appealing and distinct from the background for clear visibility.

### 3. Rules
3.1 Random letters, including uppercase [A-Z], lowercase [a-z], numbers [0-9], and essential punctuation (comma, full stop, etc.), will fall from the top of the screen.
3.2 The user must type the displayed letter on their keyboard within 3 seconds.
3.3 If the user types the letter correctly within the time limit, it is counted towards their score.
3.4 If the user fails to type the letter within 3 seconds, the letter is stored in a 'danger' lower rectangle.
3.5 The game should track the user's score and display it at the end.

### 4. Lower Rectangle (Danger)
4.1 If the user fails to type a displayed letter within 3 seconds, the letter should be stored in a lower rectangle, referred to as the 'danger' zone.
4.2 The lower rectangle can store a maximum of 10 letters.
4.3 Design the danger rectangle to be distinct and clearly indicate that these are the letters the user missed.

### 5. Settings
5.1 Include a start screen with a button to start the game.
5.2 Add a pause button to temporarily stop the game.
5.3 Incorporate an end screen displaying the user's score and options to restart or quit the game.
5.4 Ensure smooth animations and transitions for falling letters.
5.5 Use different background colors for the main background and the rectangle boxes for better visibility.
5.6 Make the game responsive and ensure it works well on various screen sizes, including mobile devices.

## Updated Descriptive Prompt for App Enhancements

### General Updates
1. Ensure all options are in the color `#caf0f8`.
2. If a user selects any option, it should become `#48cae4`.
3. The "Start Game" button should be in the color `#0077b6`.
4. Remove the background color of the screen and make it white.

### Typing Game Window
1. In the practice question option, allow the user to choose "All" to select all options.
2. If the user chooses `[a-z]`, `[A-Z]`, or `[0-9]`, then all other options should be deselected.
3. In the speed level option, the user can choose only one option.
4. Negative marking options should be in an ON/OFF style.
5. If the user types the right letter, they get +1; if they miss or type the wrong letter, they get -1.

### Playing Area
1. The pause button should work properly and be in the color `#0077b6`.
2. Random letter boxes should be in the color `#caf0f8`.
3. When the user crosses the target number from the total score, a celebration should occur for 5 seconds and for each multiple of the target number.
4. Do not change the danger zone letters' box color.
5. When the user pauses the game, letters should stop in place and resume from the same position.
6. Danger zone letters should be placed in the middle, not from the right side.
7. When the user types the right letter, the letter should blast into small pieces of different colors for 20 milliseconds.

### Sound
1. Background music should play in a loop when the user starts the game and stop when the game is over.
2. Tapping sound should play when the user clicks any option.
3. During playtime, if the user types the right answer, a blast sound should play.
4. If any letter is added to the danger zone, a danger sound should play.
5. A game over sound should play when the user fills the danger zone.
6. A celebration sound should play when the user reaches the total score.
7. Ensure all MP3 files are named (click, blast, danger, celebration, bg) and placed in the public folder.

### Specific Interface Changes
1. **Starting Window:**
   1.1 Place "By Rudra" in the middle.
   1.2 Format all options in a row style (e.g., "Speed Level: [Easy][Medium][Hard]").
   1.3 When clicking any option, a slight highlight should indicate the user's selection.
   1.4 "Your Target" and user input should be in the same row.
   1.5 The "Start Game" button should be in the middle.

2. **During Gameplay:**
   2.1 Only one-time celebration when the user crosses their target.
   2.2 When the total score crosses -20, the game should be over.
   2.3 The total score should be in the right top with some gap from the border.
   2.4 Total score numbers should be in a different color.
   2.5 Follow the rules for the danger zone as previously specified.

3. **Game Over Screen:**
   3.1 Problem keys should be shown in boxes (maximum 10 keys).
   3.2 "Made by Rudra" should be in the middle.
   3.3 Remove the quit option from this screen.

### Additional Gameplay Enhancements
1. Ensure letters fall in a scattered pattern covering the full screen.
2. Use different colors for numbers, capital letters, and small letters from the blue palette.
3. Show a practice level selector on the start screen allowing users to choose the type of characters they want to practice.
4. The end screen should display the missed keys as "problem keys" for the user to practice.
5. The start screen should also show all options.
6. Ensure all letters are displayed in boxes.
7. When users pause the game, letters should stop in place.
8. Make the start page window smaller.
9. Place the pause button at the right top, and it should also have a quit option.
10. Mention the total score at the left top.
11. Ensure the software works on a desktop with a proper desktop size.
12. The resume and quit options should work properly at the right top of the screen.
13. Decrease the size of the practice questions option to only show the letters without names, adding all options in the practice options.
14. Add another option "Speed level: [Easy] [Medium] [Hard]" in the starting window.
15. When a letter appears, the box should blur for a few milliseconds and then show.
16. Adjust the speed of falling letters according to the option chosen by the user.
17. If the user types the letter, show a blast transition and animation.
18. If the letter is near the danger zone, the box should shake (left-right transition and animation).
19. Add an on/off option for negative marking in the starting window. If the user turns this on, missing a letter should deduct 2 points from the total score.
20. Increase the size of "Your Score:" on the game over screen.
21. Add another option in the starting window "Your Target: " with an input for the user to add a number.
22. When the mentioned number is equal to or greater than "Your Score," a celebration effect should trigger for 3 seconds.
23. Place the "Restart" and "Quit" buttons in one row.
24. All letter boxes should be very light blue.
25. Mention "By Rudra" below the typing game on the starting window.
26. Add "Made By Rudra" on the game over the window.
27. Provide more comments in the code for better understanding by the coder.

Thank You for your time By Rudra
