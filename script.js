function register() {
    let customer = {
        name: uname.value,
        email: email.value,
        pswd: password.value,
        balance: 0,
        transactions: [],
    };
    console.log(customer);
    if (customer.name == "" || customer.email == "" || customer.pswd == "") {
        alert("Fill the form first");
    } else {
        if (customer.email in localStorage) {
            alert("Account already exists");
        } else {
            localStorage.setItem(customer.email, JSON.stringify(customer));
            alert("Registered Successfully");
            window.location.href = "./login.html";
        }
    }
}

function login() {
    let customer = {
        email: email.value,
        pswd: password.value,
    };
    console.log(customer);
    if (customer.email == "" || customer.pswd == "") {
        alert("Fill the form first");
    } else {
        if (customer.email in localStorage) {
            let obj = JSON.parse(localStorage.getItem(customer.email));
            if (obj.email == customer.email && obj.pswd == customer.pswd) {
                alert("Login Successfull");
                window.location.href = "./dashboard.html";
                localStorage.setItem("currUser", customer.email);
            } else {
                alert("Incorrect Password");
            }
        } else {
            alert("User Not Found, Create an Account First");
        }
    }
}

function addIncome() {
    let income = document.getElementById("income");

    if (income_type.value == "") {
        alert("fill the form first");
    } else {
        let email = localStorage.getItem("currUser");
        let customer = JSON.parse(localStorage.getItem(email));

        console.log(customer);
        customer.balance = Number(customer.balance) + Number(income.value);

        customer.transactions.push([
            income_type.value,
            Number(income.value),
            customer.balance,
        ]);
        localStorage.setItem(customer.email, JSON.stringify(customer));

        // if (Number(customer.balance) >= 0) {
        //     summary.textContent = `Positive balance: "You have saved ₹${customer.balance}."`;
        // } else {
        //     summary.textContent = `Negative balance: "You have overspent by ₹${Math.abs(customer.balance)}."`;
        // }

        updateTable();

        balance.innerHTML = customer.balance;
    }
}

function addExpense() {
    // let withdraw = document.getElementById("withdraw");

    if (expense_type.value == "") {
        alert("choose expense type");
    } else {
        let email = localStorage.getItem("currUser");
        let customer = JSON.parse(localStorage.getItem(email));
        customer.balance -= expense.value;
        balance.innerHTML = customer.balance;
        customer.transactions.push([
            expense_type.value,
            Number(expense.value),
            customer.balance,
        ]);

        localStorage.setItem(customer.email, JSON.stringify(customer));

        // if (Number(customer.balance) >= 0) {
        //     summary.textContent = `Positive balance: "You have saved ₹${customer.balance}."`;
        // } else {
        //     summary.textContent = `Negative balance: "You have overspent by ₹${Math.abs(customer.balance)}."`;
        // }
        updateTable();
    }
}

function updateTable() {
    let income_table = document.getElementById("income_table");
    let expense_table = document.getElementById("expense_table");
    let email = localStorage.getItem("currUser");
    let customer = JSON.parse(localStorage.getItem(email));
    income_table.innerHTML = ``;
    expense_table.innerHTML = ``;
    for (let index = customer.transactions.length - 1; index > -1; index--) {
        if (
            
            ["Salary", "Freelance", "Business", "Investments", "Other"].includes(customer.transactions[index][0] )
        ) {
            income_table.innerHTML += `
            <tr>
                <td scope="row">${customer.transactions[index][0]}</td>
                <td>${customer.transactions[index][1]}</td>
                <td>${customer.transactions[index][2]}</td>
            </tr>
            `;
        } else {
            expense_table.innerHTML += `
            <tr>
                <td scope="row">${customer.transactions[index][0]}</td>
                <td>${customer.transactions[index][1]}</td>
                <td>${customer.transactions[index][2]}</td>
            </tr>
            `;
        }
    }

    if (Number(customer.balance) >= 0) {
        summary.textContent = `Positive balance: "You have saved ₹${customer.balance}."`;
    } else {
        summary.textContent = `Negative balance: "You have overspent by ₹${Math.abs(customer.balance)}."`;
    }
    balance.textContent = customer.balance;
}

function logout() {
    localStorage.setItem("currUser", "");
    window.location.href = "./login.html";
}
