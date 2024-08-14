let balance = 0;

function deposit() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0) {
        displayMessage("გთხოვთ, შეიყვანოთ სწორი თანხა");
        return;
    }
    balance += amount;
    updateBalance();
    displayMessage("შეტანა წარმატებით დასრულდა", true);
}

function withdraw() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0) {
        displayMessage("გთხოვთ, შეიყვანოთ სწორი თანხა");
        return;
    }
    if (amount > balance) {
        displayMessage("ბალანსი არასაკმარისია");
        return;
    }
    balance -= amount;
    updateBalance();
    displayMessage("განაღდება წარმატებით დასრულდა", true);
}

function updateBalance() {
    document.getElementById('balance').textContent = balance.toFixed(2);
}

function displayMessage(msg, success = false) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = msg;
    messageElement.style.color = success ? '#4CAF50' : '#ff0000';
}
