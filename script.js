// Задача 1
// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:
// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

console.log('Задача 1: Book -------------------');

class Book {
    constructor(tittle, author, pages) {
        this.title = tittle;
        this.author = author;
        this.pages  = pages;
    }
    displayInfo() { 
        console.log(`Книга "${this.title}" автор ${this.author},  стр. ${this.pages}`); 
    }
}

const book1 = new Book('Обитаемый остров', 'Стругацкие А и Б.', 400);
book1.displayInfo();

const book2 = new Book('Красное колесо', 'Солжениц А. И.', 3000);
book2.displayInfo();


// Задача 2
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:
// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).

console.log('Задача 2: Student -------------------');

class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade  = grade;
    }
    displayInfo() { 
        console.log(`Name: ${this.name}
Age: ${this.age}
Grade: ${this.grade}`); 
    }
}

const student1 = new Student('John Smith', 16, '10th grade');
student1.displayInfo();

const student2 = new Student('Jane Doe', 17, '11th grade');
student2.displayInfo();

// Задача 3
// Создайте класс "Банк", который будет иметь следующие свойства: название банка, список клиентов и список счетов. Класс должен иметь методы для добавления нового клиента,  открытия нового счета для клиента, пополнения счета, снятия денег со счета и проверки баланса.

console.log('Задача 3: Bank -------------------');

class Client {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class BankAccount {
    constructor (client, accoountNumber, balance) {
        this.client = client;
        this.accountNumber = accoountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Добавлено ${amount} на счет ${this.accountNumber} клиента ${this.client.name}. Баланс: ${this.balance}`);
    }

    withdraw (amount) {
        if (amount > this.balance) {
            console.log(`Недостачно средств на счета ${this.accountNumber} клиента ${this.client.name}. Запрошено:  ${amount}. Баланс: ${this.balance}`);
        } else {
            this.balance -= amount;
            console.log(`Снято ${amount} со счета ${this.accountNumber} клиента ${this.client.name}. Баланс: ${this.balance}`);
        }
    }
}

class Bank {
    constructor(name) {
        this.name = name;
        this.clients = [];
        this.bankAcoounts = [];
    }

    addClient(client) {
        if (!this.clients.includes(client)) {
            this.clients.push(client);
            console.log(`Клиент ${client.name} стал клиентом банка "${this.name}"`);
        } else {
            console.log(`Клиент ${client.name} уже явлется клиентом банка "${this.name}"`);
        }
    }

    openAccount(client, accountNumber, balance) {
        if (!this.bankAcoounts.find(el => el.accountNumber === accountNumber)) {
            const bankAccount = new BankAccount(client, accountNumber, balance);
            this.bankAcoounts.push(bankAccount);
            console.log(`Счет ${accountNumber} с балансом ${balance} открыт на клиента ${client.name} банка "${this.name}"`);
        } else {
            console.log(`Счет ${accountNumber} уже открыт в банке "${this.name}"`);
        }
    }

    checkBalance (accountNumber) {
        const bankAccount = this.bankAcoounts.find(el => el.accountNumber === accountNumber);
        if (bankAccount) {
            console.log(`Баланс ${bankAccount.balance} счета ${accountNumber} клиента ${bankAccount.client.name} банка "${this.name}"`);
        } else {
            console.log(`Счет ${accountNumber} не найден в банке "${this.name}"`);
        }
    }

    deposit (accountNumber, amount) {
        const bankAccount = this.bankAcoounts.find(el => el.accountNumber === accountNumber);
        if (bankAccount) {
            bankAccount.deposit(amount);
        } else {
            console.log(`Счет ${accountNumber} не найден в банке "${this.name}"`);
        }
    }    

    withdraw (accountNumber, amount) {
        const bankAccount = this.bankAcoounts.find(el => el.accountNumber === accountNumber);
        if (bankAccount) {
            bankAccount.withdraw(amount);
        } else {
            console.log(`Счет ${accountNumber} не найден в банке "${this.name}"`);
        }
    }        
}

const bank = new Bank('Мой Банк');

const client1 = new Client('Иван', 25);
const client2 = new Client('Мария', 30);

bank.addClient(client1);
bank.addClient(client2);
bank.addClient(client1);
bank.addClient(client2);

bank.openAccount(client1, '123456789', 1000);
bank.openAccount(client2, '987654321', 500);
bank.openAccount(client1, '123456789', 1000);
bank.openAccount(client2, '987654321', 500);

bank.checkBalance('123456789');
bank.checkBalance('987654321');
bank.checkBalance('000');

bank.deposit('123456789', 200);
bank.withdraw('987654321', 100);
bank.withdraw('987654321', 500);

bank.checkBalance('123456789');
bank.checkBalance('987654321');





