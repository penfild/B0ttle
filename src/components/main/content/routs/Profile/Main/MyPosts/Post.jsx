import React from 'react'
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.post_wrapper}>
            <header className={classes.post_header}>
                <img className={classes.post_ava} src="https://i.ytimg.com/vi/rxumDo4Z6PY/maxresdefault.jpg" alt="img" />
                <div className={classes.post_name}>
                    <p className={classes.post_name_item}> Ванек Тронец</p>
                    <p className={classes.post_time}>3 янв в 13:24</p>
                    <div className={classes.post_move}>
                        <div className={classes.circle}></div>
                        <div className={classes.circle}></div>
                        <div className={classes.circle}></div>
                    </div>
                </div>
            </header>
            <div className={classes.post_content}>
                <img className={classes.post_content_img} src={props.img} alt="img" />
                <div className={classes.post_audio}>
                    <div className={classes.post_play}>
                        <img className={classes.post_audio_play} src="https://image.flaticon.com/icons/png/512/1250/1250997.png" alt="img" />
                    </div>
                    <div className={classes.post_audio_name}>
                        <a href="#"> <span>drowsyy</span>- outro prod. by 302</a>
                    </div>
                </div>
            </div>
            <div className={classes.post_reactions}>
                <img className={classes.post_like} src="https://image.flaticon.com/icons/png/512/1237/1237966.png" alt="" />
                {/* сердечко при лайке https://image.flaticon.com/icons/png/128/356/356376.png */}
                <img className={classes.post_comment} src="https://image.flaticon.com/icons/png/128/134/134704.png" alt="" />
                <img className={classes.post_send} src="https://image.flaticon.com/icons/png/512/60/60525.png" alt="" />
            </div>
            <span className={classes.views}> <img src="https://image.flaticon.com/icons/png/512/1215/1215227.png" alt="" /> 33</span>
        </div>
    )
}

export default Post