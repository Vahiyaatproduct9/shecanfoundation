const names = ["Prerna", "Aarav", "Ishita", "Dev", "Riya", "Kabir", "Tanya", "Vivaan", "Meera", "Zara"]

const data = names.map((name, index) => ({
    id: index + 1,
    name,
    amount: Math.floor(Math.random() * (50000 - 10000 + 1)) + 10000
}))

export default data;