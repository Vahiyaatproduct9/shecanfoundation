import React from 'react'
import css from './css.module.css'
// import data from '@/app/data/data.js'
import { motion } from 'framer-motion'
const data = Array(100).fill(null).map((_, i) => ({
    id: i + 1,
    name: `Name ${i + 1}`,
    amount: Math.floor(Math.random() * (50000 - 10000 + 1)) + 10000
}))

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

function Leaderboard() {
    const slotItems = data.sort((a, b) => b.amount - a.amount).map((item, i) => {
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