'use client'
import React, { useState } from 'react'
import css from './css.module.css'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

const parentVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            duration: 0.2
        }
    }
}
const childVariant = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3
        }
    }
}

function Auth() {
    const [logged, setLogged] = useState<boolean | 'logging'>(false)
    const app = useRouter()
    function handleSubmit(e: HTMLFormElement) {
        const formData = new FormData(e);
        const name = formData.get('name');
        localStorage.setItem('name', name as string)
        setTimeout(() => {
            setLogged(true)
            app.push('/home')
        }, Math.random() * 3000)
    }
    return (
        <motion.section variants={parentVariant} initial='hidden' animate='visible' className={css.container}>

            <motion.div
                initial={{ y: '100%' }}
                animate={{
                    y: logged === true ? 0 : '100%',
                }}
                transition={{
                    duration: 0.4,
                    delay: 0.2
                }}
                className={css.curtain}>
                <h1>She Can Foundation</h1>
                <span>Your Trust is Safe with Us</span>
            </motion.div>
            <img className={css.poster} alt={'poster'} src={'./poster2.109Z.png'} />
            <motion.form variants={parentVariant} initial='hidden' animate='visible'
                onSubmit={(e) => {
                    setLogged('logging')
                    e.preventDefault();
                    handleSubmit(e.currentTarget);
                }}>
                <motion.div key={'div1'} variants={childVariant} className={css.imgContainer}><img src={'/logo.avif'} /></motion.div>
                <motion.label key={'div2'} variants={childVariant} htmlFor='name'>Name</motion.label>
                <motion.input key={'div3'} variants={childVariant} id='name' type='text' name='name' placeholder='Name' autoFocus required />
                <motion.label key={'div4'} variants={childVariant} htmlFor='password'>Password</motion.label>
                <motion.input key={'div5'} variants={childVariant} id='password' type='password' placeholder='Password' name='password' required />
                <motion.div key={'div6'} variants={childVariant} className={css.button}><button>{logged === false ? 'Login' : (logged === true ? 'Logged!' : 'Logging in...')}</button></motion.div>
            </motion.form>
        </motion.section>
    )
}

export default Auth