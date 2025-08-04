const data = Array(100).fill(null).map((_, i) => ({
    id: i + 1,
    name: `Name ${i + 1}`,
    amount: Math.floor(Math.random() * (50000 - 10000 + 1)) + 10000
}))
export default data