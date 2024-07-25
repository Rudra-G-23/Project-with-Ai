
<p align= "center">
  <img src="https://media1.giphy.com/media/STThOmSL9X8jpaEqfE/giphy.gif" alt="GIF" width="400" height="300" style="zoom: 1; margin-left: 20px;">
</p>

These steps outline helps you to build and enhance the game app in a structured, descriptive format.

### Step-by-Step Guide for Developing the App

#### Step 1: Plan the User Interface

**Objective**: Design a user-friendly layout that resembles an Android app.

**Components**:
- A grid of 90 numbered boxes.
- Clickable boxes that toggle selection with smooth transition effects.
- A "Copy Selected Numbers" button.
- A "Restart" button.
- A display area showing the currently selected numbers in a large box.
- Attribution text at the bottom ("Made by Rudra (F23-48)").

#### Step 2: Choose a Platform

**Recommendation**: Use a framework like React Native or Flutter to create an Android-like layout. These platforms allow you to create cross-platform apps with native-like performance and appearance.

#### Step 3: Develop the User Interface

**UI Layout**:
- Use a grid layout to display 90 boxes.
- Design the buttons and the selected numbers display area.
- Add attribution text at the bottom of the screen.

#### Step 4: Implement User Interaction

**Functionality**:
- Toggle selection state when a box is clicked.
- Display selected numbers in a larger box without affecting the grid layout.
- Update the selected numbers display area in real-time.
- Implement smooth transitions and hover effects.

#### Step 5: Add Copy Functionality

**Clipboard API**:
- Implement functionality to copy the selected numbers to the clipboard.
- Provide visual feedback (e.g., a flash animation) when the copy operation is successful.

#### Step 6: Implement Restart Functionality

**Restart Button**:
- Add a button to clear all selections and reset the grid.
- Ensure that the selected numbers display area is also cleared.

#### Step 7: Adjust for Mobile Layout

**Mobile-Friendly Adjustments**:
- Optimize text size and button size for a mobile phone display.
- Adjust the size of the entire grid to fit comfortably on a mobile screen.
- Ensure that the layout is responsive and looks good on different screen sizes.

#### Step 8: Style the Application

**Styling**:
- Use CSS transitions for smooth color changes and scaling effects.
- Add hover effects for better user feedback.
- Apply a flash animation for the copy button when numbers are copied.
- Style the selected numbers display area with a light purple background and a border.

#### Step 9: Test the Application

**Testing**:
- Ensure that all functionalities (box selection, copying, restarting) work smoothly.
- Test the app on different devices and screen sizes to ensure a consistent user experience.

#### Step 10: Deployment

**Deployment Options**:
- **For Web**: Host on a web server or use services like GitHub Pages, Netlify, or Vercel.
- **For Mobile**: Deploy through App Store and Google Play.

### Summary of Implementation

1. **Grid Layout**:
   - 90 numbered boxes in a grid.
   - Labels: 1-70, L1-L9, Y1, B1-B5.

2. **Buttons**:
   - "Copy Selected Numbers" button.
   - "Restart" button.

3. **Selected Numbers Display**:
   - Larger box to display selected numbers.
   - Real-time updates as boxes are selected/deselected.

4. **Attribution**:
   - "Made by Rudra (F23-48)" at the bottom.

5. **Styling**:
   - Smooth transitions, hover effects, flash animation.
   - Mobile-friendly layout adjustments.

By following these steps, you can create a functional and aesthetically pleasing app that meets the specified requirements.
