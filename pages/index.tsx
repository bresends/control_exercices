import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import { BiReset } from 'react-icons/bi';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    const [totalAmount, setTotalAmount] = useState(0);
    const [wrongAmount, setWrongAmount] = useState(0);

    return (
        <div className={styles.container}>
            <Head>
                <title>Controle de Exercícios</title>
                <meta name="description" content="Created by bruno Resende" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={styles.header}>
                <Image src="/Vector.svg" alt="My Logo" width={48} height={48} />
                <h1 className={styles.title}>Controle de Questões</h1>
            </header>

            <main className={styles.main}>
                <div className={styles.card_grid}>
                    <div className={styles.card_grid__title}>
                        <p>Questões</p>
                        <p className={styles.card_grid__result}>
                            {totalAmount}
                        </p>
                    </div>
                    <div className={styles.card_grid__title_right}>
                        <IconContext.Provider
                            value={{
                                className: styles.reset_button,
                            }}
                        >
                            <BiReset
                                onClick={() => {
                                    setTotalAmount(0);
                                    setWrongAmount(0);
                                }}
                            />
                        </IconContext.Provider>
                        <p>Erros</p>
                        <p className={styles.card_grid__result_right}>
                            {wrongAmount}
                        </p>
                    </div>
                </div>

                <div className={styles.card_grid}>
                    <p
                        className={styles.card_grid__button}
                        onClick={() => setTotalAmount(totalAmount + 1)}
                    >
                        <IconContext.Provider
                            value={{
                                className: styles.card_icon_right,
                            }}
                        >
                            <AiOutlineCheckCircle />
                        </IconContext.Provider>
                    </p>
                    <p
                        className={styles.card_grid__button_right}
                        onClick={() => {
                            setTotalAmount(totalAmount + 1);
                            setWrongAmount(wrongAmount + 1);
                        }}
                    >
                        <IconContext.Provider
                            value={{
                                className: styles.card_icon_wrong,
                            }}
                        >
                            <AiOutlineCloseCircle />
                        </IconContext.Provider>
                    </p>
                </div>
            </main>

            <footer className={styles.footer}>
                {' '}
                &copy; Devisio - {new Date().getFullYear()}{' '}
            </footer>
        </div>
    );
};

export default Home;
