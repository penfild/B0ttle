import React from 'react'
import classes from './Message.module.css'
import store from '../../../../../../redux/state'






const MessangerPage = () => {


    const drawMessages = store._state.user_id_1.map(s => (
        <div className={classes.lol_wrap}>
            <div className={classes.message_item}>
                <p className={classes.no_my_message}>{s.message_1}</p>
            </div>
            <div className={classes.message_item}>
                <p className={classes.my_message}>{s.message_2}</p>
            </div>
        </div>
    ));
    let addMessage = React.createRef();

    let sendSomeMessage = () => {
        let messageSomeText = addMessage.current.value;
        store.dispatch({type: 'SEND_MESSAGE', messageText: messageSomeText});
        addMessage.current.value = ''
    }
    return (
        <div className={classes.chat}>
            <div className={classes.chat_header}>
                <div className={classes.chat_header_wrapper}>
                    <img src="https://sun9-3.userapi.com/impf/Io15qMmNTW37h0kRly1A0gWhLyaT5P2iL-R2Ww/6OA9x8oiQ-4.jpg?size=600x600&quality=96&sign=46ab6354c7668edda51498b6b1200c51&type=album" alt="ava" />
                    <div className={classes.chat_info_container}>
                        <p className={classes.sender_name}>Альберт Фазлинуров</p>
                        <p className={classes.connect_status}>online</p>
                    </div>
                </div>
            </div>
            <div className={classes.message_page_wrapper}>
                <div className={classes.chat_container}>
                    {drawMessages}
                </div>
            </div>
            <div className={classes.chat_inputs}>
                <div className={classes.chat_inputs_wrapper}>
                    <input type="text" placeholder='Напишите сообщение...' ref={addMessage} />
                    <button className={classes.send_button} onClick={sendSomeMessage} >Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default MessangerPage;