import React from 'react'
import classes from './Main_info.module.css'

const Main_info = () => {
    return (
        <section className={classes.Main_info_wrapper}>
            <a href='https://vk.com/chrevougodnechek' data-tooltip="Текст подсказки" target='_blank' className={classes.FIO}>Ванек Тронец <span className={classes.emoji}>👾</span></a>
            <p className={classes.status}>Кто бы мог подумать?</p>
            <section className={classes.info_wrapper}>
                <article className={classes.property}>
                    <h4 className={classes.info}>День рождения :</h4>
                    <h4 className={classes.info}>Город:</h4>
                    <h4 className={classes.info}>Семейное пололжение:</h4>
                </article>
                <article className={classes.value}>
                    <h4 className={classes.info}>19 января 2003г.</h4>
                    <h4 className={classes.info}>Toronto</h4>
                    <h4 className={classes.info}>влюблен</h4>
                </article>
                <article className={classes.acc_info}>
                    <h4>12 друзей</h4>
                    <h4>101 подписчик</h4>
                    <h4>121 фотография</h4>
                </article>
            </section>

        </section>

    )
}

export default Main_info;