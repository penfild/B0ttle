import React from 'react'
import classes from './Photos.module.css'

const Photos = () => {
    return (
        <section className={classes.wrapper}>
            <div className={classes.photos}>
                <div className={classes.photos_wrapper}>
                    <img className={classes.photo} src="https://sun9-35.userapi.com/impg/FUOz_G8mQOAMrcK0IX31Dd4j652pVCchqmyk3A/miD-JnC-4Jc.jpg?size=1080x1021&quality=96&sign=54a8f4a48a3823b1ecc7e0350ee48af7&type=album" alt="img" />
                    <img className={classes.photo} src="https://sun9-82.userapi.com/impg/zOjUp38lfDyqXLiskMpq4VLJOfaUvl_axCb6nw/SDB7rck5A90.jpg?size=1179x1600&quality=96&sign=786841fbb6e63729974b9a8d5b4fb107&type=album" alt="img" />
                    <img className={classes.photo} src="https://sun9-15.userapi.com/impg/bDwk5zWhToQY9hpubMHxGN-8XpKKgbYWyFyQwg/cTupBsaWQJE.jpg?size=1080x1080&quality=95&sign=35c1d321fbf1dade4c0cf2d3b23fa349&type=album" alt="img" />
                    <img className={classes.photo} src="https://sun9-36.userapi.com/impg/5y4lt1dHtrLwGxmPGkHg7PSNDXcG9Ws2U1QZ9w/cvjzN9xcBdQ.jpg?size=570x722&quality=96&sign=baf24824ee74504e1a2d92b7dbaa956d&type=album" alt="img" />
                    <img className={classes.photo} src="https://sun9-33.userapi.com/impg/MLb6u88BGspKKILoRPgfVYR6RXSt_eR_En94AA/Gb8kgvFxPgc.jpg?size=1105x1600&quality=96&sign=882a24891e6b4ff2c9959e61193a874f&type=album" alt="img" />
                    <img className={classes.photo} src="https://sun9-50.userapi.com/impg/K-sRHPenXcfsCXv_68aZf-K1DrvFJFC_W-YuPg/Thdzfw1XZqU.jpg?size=1080x1080&quality=96&sign=5bad98245b999e792aabed579314919f&type=album" alt="img" />
                    <img className={classes.photo} src="https://sun9-84.userapi.com/impg/H32KipFB7nadOPmciGkU_i9KjSTdhvSNjkfYqQ/CaSQMzMWyMU.jpg?size=530x848&quality=96&sign=b5ddb22f293c932b4fa41809e306d14f&type=album" alt="img" />
                </div>
                <span className={classes.plus}>+</span>
            </div>
        </section>
    )
}

export default Photos

