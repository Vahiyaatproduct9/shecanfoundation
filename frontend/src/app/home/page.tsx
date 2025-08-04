'use client'
import React, { useState } from 'react'
import Navbar from '../navbar/navbar'
import css from './css.module.css'
import { motion } from 'framer-motion'
import Leaderboard from '../leaderboard/leaderboard'
import Me from '@/app/me/me'

function Home() {

    const block = () => {
        if (active === 'Home') {
            return 'Work in Progress...'
        }
        else if (active === 'Collaboration') {
            return 'Work in Progress...'
        }
        else if (active === 'Leaderboard') {
            return <Leaderboard />
        }
        else if (active === 'Me') {
            return <Me />
        }
    }
    const [active, setActive] = useState('Me')
    return (
        <div className={css.container}>
            <motion.div
                initial={{ y: 0 }}
                animate={{
                    y: '-100%',
                }}
                transition={{
                    duration: 0.4,
                    delay: 0.2
                }}
                className={css.curtain}>
                <h1>She Can Foundation</h1>
                <span>Your Trust is Safe with Us</span>
            </motion.div>
            <Navbar setActive={setActive} active={active} />
            <div className={css.blockContainer}>
                {block()}
            </div>
        </div>
    )
}

export default Home