import React from 'react'
import css from './css.module.css'
// import data from '@/app/data/data.js'
import { motion } from 'framer-motion'

const parentVariant = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.05
        }
    }
}
const childVariant = {
    hidden: {
        opacity: 0,
        y: 10
    },
    visible: {
        opacity: 1,
        y: 0
    }
}
const fetchData = async () => {
    const res = await fetch('http://localhost:8080/leaderboard/data')
    const data = await res.json()
    return data
}
interface datainterface {
    id: number,
    name: string,
    amount: number
}

function Leaderboard() {
    const [leaderboardData, setLeaderboardData] = React.useState<datainterface[]>([]);
    React.useEffect(() => {
 fetchData().then(data => setLeaderboardData(data));
    }, []);
    const slotItems = leaderboardData.sort((a, b) => b.amount - a.amount).map((item, i) => {
        return (
            <motion.div variants={childVariant} key={item.id} className={css.slot}>
                <div className={css.rank}>{i + 1}.</div>
                <div className={css.name}>{item.name}</div>
                <div className={css.amount}>₹{Math.round(item.amount)}</div>
            </motion.div>
        )
    })
    return (
        <div className={css.container}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={css.containerHeader}>
                <h1>Leaderboard</h1>
            </motion.div>
            <motion.div variants={parentVariant} initial="hidden" animate="visible" className={css.containerBody}>
                <motion.div key={'head'} variants={childVariant} className={css.containerBodyHead}>
                    <div className={css.headRank}>Rank</div>
                    <div className={css.headName}>Name</div>
                    <div className={css.headAmount}>Amount</div>
                </motion.div>
                {slotItems}
            </motion.div>
        </div>
    )
}

export default Leaderboard