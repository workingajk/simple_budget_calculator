*Question*: Create a Simple Budget Calculator with Login and Registration

*Objective*: Build a web application with basic login, registration, and a budget calculator using JavaScript.

*Requirements:*

# Registration Page:

Create a registration form with:
- Username
- Password
Store the user's details (use localStorage for simplicity).
Display a success message after registration.

### Login Page:

Create a login form with:
- Username
- Password
Check if the login credentials match the stored user details.
If successful, allow the user to access the budget calculator. If unsuccessful, show an error message.

### Budget Calculator (Accessible after login):

Include input fields for:
- Total Income (₹)
- Rent (₹)
- Groceries (₹)
- Transportation (₹)
- Entertainment (₹)
- Other Expenses (₹)
Calculate and display the balance (Total Income - Total Expenses).
Show:
- Positive balance: "You have saved ₹X."
- Negative balance: "You have overspent by ₹X."

#### Logout:
Provide a button to log out and return to the login page.
