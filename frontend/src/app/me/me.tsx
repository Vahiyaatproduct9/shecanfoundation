import React, { useEffect, useState } from 'react'
import css from './css.module.css'
import { motion } from 'framer-motion'
interface datainterface {
    code: string,
    amount: number
}

export default function () {
    const [data, setData] = useState<datainterface>()
    const [name, setName] = useState<string>('Intern')
    useEffect(() => {
        const n = localStorage.getItem('name')
        setName(n || 'Intern')
    }, [])
    let greeting = () => {
        let time = new Date().getHours()
        if (time > 20) {
            return "Great Night!"
        }
        else if (time > 16) {
            return "Good Evening!"
        }
        else if (time > 12) {
            return "Good Afternoon!"
        }
        else if (time > 5) {
            return "Good Morning!"

        }
    }
    const fetchData = async () => {
        const res = await fetch('https://shecanfoundation-production.up.railway.app/data')
        const data = res.json()
        return data
    }
    useEffect(() => {
        fetchData().then(data => setData(data));
    }, []);
    const parentVariant = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
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
            y: 0,
            transition: {
                duration: 0.1,
                staggerChildren: 0.1
            }
        }
    }
    const grandChildVariant = {
        hidden: {
            opacity: 0,
            y: 10
        },
        visible: {
            opacity: 1,
            y: 0,
            // transition: {
            //     duration: 0.1,
            //     delay: 1,
            // }
        }
    }
    return (
        <motion.div variants={parentVariant} initial='hidden' animate='visible' className={css.container}>
            <motion.div key={'head'} variants={childVariant} initial='hidden' animate='visible' className={css.container1}>
                <motion.div variants={grandChildVariant} className={css.container1first}>
                    <h1>{greeting()} {name}</h1>
                    <span>Referal Code: <b>{data ? data.code : 'loading..'}</b></span>
                </motion.div>
                <motion.div variants={grandChildVariant} key='amount' className={css.container1sec}>
                    <div className={css.amount}>
                        <span>Total Donations: </span>
                        <h1>₹{data ? data.amount : 'loading..'}</h1>
                    </div>
                </motion.div>
            </motion.div>
            <motion.div variants={childVariant} initial='hidden' animate='visible' key='body' className={css.container2}>
                <motion.div variants={grandChildVariant} className={css.container2head}>
                    <h1>Rewards</h1>
                </motion.div>
                <motion.div variants={childVariant} key='rew' initial='hidden' animate='visible' className={css.container2body}>

                    <motion.div variants={grandChildVariant} className={css.bronze}>
                        <img src={'/bronze-badge.png'} />
                        <span>Bronze</span>
                    </motion.div>
                    <motion.div variants={grandChildVariant} className={css.silver}>
                        <img src={'/silver-badge.png'} />
                        <span>Silver</span>
                    </motion.div>
                    <motion.div variants={grandChildVariant} className={css.gold}>
                        <img src={'/gold-badge.png'} />
                        <span>Gold</span>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}