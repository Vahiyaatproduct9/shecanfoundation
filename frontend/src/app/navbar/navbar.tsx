'use client'
import { motion } from 'framer-motion'
import React, { useRef, useState, useEffect } from 'react'
import css from './css.module.css'
interface props {
    setActive: (item: string) => void
    active: string
}
function Navbar(props: props) {
    const [mobile, setMobile] = useState<boolean | null>(null);
    const [menuShown, setMenuShown] = useState<boolean>(true)

    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth < 768;
            setMobile(isMobile);
            setMenuShown(!isMobile); // Show menu only on desktop
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const navItems = ["Home", "Collaboration", "Leaderboard", "Me"]
    const parentVariant = {
        hidden: {},
        visible: {
            transition: {
                delay: 1,
                duration: 0.1,
                staggerChildren: 0.1
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
                duration: 0.1
            }
        }

    }
    const options = navItems.map((item, i) => {
        return <motion.span
            variants={childVariant}
            onClick={() => {
                props.setActive(item);
                mobile && setMenuShown(false);
            }}

            className={`${props.active === item ? css.active : ''} ${mobile ? css.shown : ''}`} key={i}>{item}</motion.span>
    })

    return (
        <motion.div transition={{ duration: 0.2 }} className={css.container}>
            <div className={css.containerHead}>
                <motion.img
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                        opacity: 1, y: 0, transition: {
                            delay: 1,
                            duration: 0.2
                        }
                    }}
                    src={'./logo.avif'} />
                {mobile && <img onClick={() => setMenuShown(!menuShown)} className={css.menu} src='/menu.png' />}
            </div>
            <motion.div variants={parentVariant} initial='hidden' animate='visible' className={css.options}>
                {menuShown && (
                    <>
                        {options}
                        {!mobile && <motion.img variants={childVariant} key='img' src={'./user.jpg'} />}
                    </>
                )}

            </motion.div>
        </motion.div>
    )
}

export default Navbar