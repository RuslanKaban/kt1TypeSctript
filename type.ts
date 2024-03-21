class User {
    public static count: number = 0;

    protected _name: string;
    protected _login: string;
    protected _password: string;
    protected _grade: number;

    constructor(name: string, login: string, password: string, grade: number) {
        this._name = name;
        this._login = login;
        this._password = password;
        this._grade = grade;
        User.count++;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get login(): string {
        return this._login;
    }

    set login(value: string) {
        console.log("Невозможно изменить логин!");
    }

    get password(): string {
        return '****';
    }

    get grade(): number {
        return this._grade;
    }

    eq(user: User): boolean {
        return this._grade === user._grade;
    }

    lt(user: User): boolean {
        return this._grade < user._grade;
    }

    gt(user: User): boolean {
        return this._grade > user._grade;
    }
}

class SuperUser extends User {
    public static count: number = 0;

    private _role: string;

    constructor(name: string, login: string, password: string, role: string, grade: number) {
        super(name, login, password, grade);
        this._role = role;
        SuperUser.count++;
    }

    get role(): string {
        return this._role;
    }

    set role(value: string) {
        this._role = value;
    }
}

const user1 = new User('Paul McCartney', 'paul', '1234', 3);
const user2 = new User('George Harrison', 'george', '5678', 2);
const user3 = new User('Richard Starkey', 'ringo', '8523', 3);
const admin = new SuperUser('John Lennon', 'john', '0000', 'admin', 5);

console.log(`Всего обычных пользователей: ${User.count}`);
console.log(`Всего супер-пользователей: ${SuperUser.count}`);

console.log(user1.lt(user2));
console.log(admin.gt(user3));
console.log(user1.eq(user3));
console.log(user3.name);
console.log(user2.password);
console.log(user2.login);
console.log(user3.grade);
console.log(user3.grade);
