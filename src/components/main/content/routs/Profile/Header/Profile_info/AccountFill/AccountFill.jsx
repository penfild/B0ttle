import React from 'react';
import classes from './AccountFill.module.css';
import { Link } from 'react-router-dom';


const AccountFill = () => {
    return (
        <div className={classes.fill}>
            <Link to="/friends" id={classes.first_link} className={classes.fill_item}> <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><g clip-rule="evenodd" fill-rule="evenodd"><path d="M6.25 3.5a3 3 0 100 6 3 3 0 000-6zm-1.5 3a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM2.69 11.57c.96-.55 2.22-.82 3.56-.82s2.6.27 3.56.82c.98.56 1.69 1.47 1.69 2.68 0 .7-.28 1.3-.78 1.71-.48.39-1.1.54-1.72.54H3.5c-.61 0-1.24-.15-1.72-.54-.5-.4-.78-1-.78-1.71 0-1.21.71-2.12 1.69-2.68zm.75 1.3c-.65.37-.94.84-.94 1.38 0 .3.1.44.22.54.14.11.4.21.78.21H9c.39 0 .64-.1.78-.21.12-.1.22-.25.22-.54 0-.54-.29-1-.94-1.38-.66-.39-1.65-.62-2.81-.62s-2.15.23-2.81.62zM13.75 3.5a3 3 0 100 6 3 3 0 000-6zm-1.5 3a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z"></path></g><path d="M13.75 12.25c-.23 0-.45.01-.68.03a.75.75 0 11-.14-1.49c.27-.03.54-.04.82-.04 1.34 0 2.6.27 3.56.82.98.56 1.69 1.47 1.69 2.68 0 .7-.28 1.3-.78 1.71-.48.39-1.1.54-1.72.54h-3a.75.75 0 010-1.5h3c.39 0 .64-.1.78-.21.12-.1.22-.25.22-.54 0-.54-.29-1-.94-1.38a5.77 5.77 0 00-2.81-.62z"></path></g></svg> Друзья        </Link>
            <a href="#" className={classes.fill_item}>  <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M5.5 11a.75.75 0 01.75.75v1a.75.75 0 01-.75.75.75.75 0 01-.75-.75v-1A.75.75 0 015.5 11zm3.75-.25a.75.75 0 00-1.5 0v2.75a.75.75 0 001.5 0v-2.75zM14.5 10a.75.75 0 01.75.76v2.8a.75.75 0 01-1.5-.01v-2.8a.75.75 0 01.75-.75zm-2.25-.74a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0v-4.5z"></path><path fill="currentColor" fill-rule="evenodd" d="M7.92 2c-.88 0-1.6 0-2.17.05a4.1 4.1 0 00-1.57.39 4 4 0 00-1.74 1.74 4.1 4.1 0 00-.4 1.57C2 6.33 2 7.04 2 7.92v4.16c0 .88 0 1.6.05 2.17.04.58.15 1.1.39 1.57a4 4 0 001.74 1.74c.48.24.99.35 1.57.4.58.04 1.29.04 2.17.04h4.16c.88 0 1.6 0 2.17-.05a4.1 4.1 0 001.57-.39 4 4 0 001.74-1.74c.24-.47.35-.99.4-1.57.04-.58.04-1.29.04-2.17V7.92c0-.88 0-1.6-.05-2.17a4.1 4.1 0 00-.39-1.57 4 4 0 00-1.74-1.74 4.1 4.1 0 00-1.57-.4C13.67 2 12.96 2 12.08 2H7.92zM4.87 3.77c.22-.11.51-.19 1-.23.51-.04 1.16-.04 2.08-.04h4.1c.92 0 1.57 0 2.07.04.5.04.8.12 1.02.23a2.5 2.5 0 011.09 1.1c.11.22.19.51.23 1 .03.42.04.93.04 1.6-.38-.28-.85-.6-1.35-.9-1.04-.65-2.4-1.32-3.65-1.32-1.43 0-2.53.64-3.54 1.23l-.42.25A8.5 8.5 0 013.5 7.99v-.04c0-.92 0-1.57.04-2.07.04-.5.12-.8.23-1.01a2.5 2.5 0 011.1-1.1zM3.5 9.5v2.55c0 .92 0 1.57.04 2.07.04.5.12.8.23 1.02a2.5 2.5 0 001.1 1.09c.22.11.51.19 1 .23.51.04 1.16.04 2.08.04h4.1c.92 0 1.57 0 2.07-.04.5-.04.8-.12 1.02-.23a2.5 2.5 0 001.09-1.1c.11-.22.19-.51.23-1 .04-.51.04-1.16.04-2.08V9.36a30.58 30.58 0 01-.17-.13c-.43-.33-1.14-.88-1.96-1.39a6.19 6.19 0 00-2.87-1.09c-1 0-1.73.42-2.77 1.02a70.79 70.79 0 01-.45.26A9.97 9.97 0 013.5 9.5z" clip-rule="evenodd"></path></svg> Музыка </a>
            <a href="#" className={classes.fill_item}> <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M10 7.75a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM7.25 6.5a2.75 2.75 0 115.5 0 2.75 2.75 0 01-5.5 0zm-.5 7.25c0-.42.23-.83.8-1.17A4.81 4.81 0 0110 12c1.03 0 1.88.23 2.45.58.57.34.8.75.8 1.17 0 .3-.1.44-.22.54-.14.11-.4.21-.78.21h-4.5c-.39 0-.64-.1-.78-.21-.12-.1-.22-.25-.22-.54zM10 10.5c-1.22 0-2.37.27-3.23.8-.88.53-1.52 1.37-1.52 2.45 0 .7.28 1.3.78 1.71.48.39 1.1.54 1.72.54h4.5c.61 0 1.24-.15 1.72-.54.5-.4.78-1 .78-1.71 0-1.08-.64-1.92-1.52-2.45-.86-.53-2-.8-3.23-.8zm4-5.59c.06-.4.44-.7.85-.64a2.5 2.5 0 01-.35 4.98.75.75 0 010-1.5 1 1 0 00.14-1.99.75.75 0 01-.63-.85zM15.76 10a.75.75 0 000 1.5c1.16 0 1.75.67 1.75 1.25 0 .22-.07.41-.19.55-.1.12-.24.2-.46.2a.75.75 0 000 1.5c1.43 0 2.15-1.21 2.15-2.25 0-1.71-1.6-2.75-3.25-2.75zM5 10.75a.75.75 0 00-.75-.75C2.61 10 1 11.04 1 12.75 1 13.79 1.72 15 3.15 15a.75.75 0 000-1.5.57.57 0 01-.47-.2.86.86 0 01-.18-.55c0-.58.6-1.25 1.75-1.25.41 0 .75-.34.75-.75zm.14-6.47a.75.75 0 01.22 1.48 1 1 0 00.14 1.99.75.75 0 110 1.5 2.5 2.5 0 01-.36-4.97z" fill="currentColor" fill-rule="evenodd"></path></svg> Подписчики </a>
            <a href="#" className={classes.fill_item}> <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M6.84 16.44c.76.06 1.74.06 3.16.06 1.42 0 2.4 0 3.16-.06a3.75 3.75 0 001.43-.32 3.5 3.5 0 001.53-1.53c.15-.29.26-.69.32-1.43l.03-.63-1.3-1.3c-.3-.3-.5-.5-.67-.64a.86.86 0 00-.27-.18.75.75 0 00-.46 0 .86.86 0 00-.27.18c-.16.13-.36.33-.67.64l-2.3 2.3a.75.75 0 01-1.06 0l-.3-.3c-.3-.3-.5-.5-.67-.64a.86.86 0 00-.27-.18.75.75 0 00-.46 0 .86.86 0 00-.27.18c-.16.13-.36.33-.67.64L4.56 15.5c.25.24.53.45.85.6.29.16.69.27 1.43.33zm9.39-6.27l.27.27V10c0-1.42 0-2.4-.06-3.16a3.75 3.75 0 00-.32-1.43 3.5 3.5 0 00-1.53-1.53 3.75 3.75 0 00-1.43-.32A43.2 43.2 0 0010 3.5c-1.42 0-2.4 0-3.16.06-.74.06-1.14.17-1.43.32a3.5 3.5 0 00-1.53 1.53c-.15.29-.26.69-.32 1.43A43.2 43.2 0 003.5 10c0 1.42 0 2.4.06 3.16.04.47.1.8.17 1.05l2.04-2.04.02-.02c.28-.28.52-.52.74-.7.23-.2.47-.37.77-.47.46-.15.94-.15 1.4 0 .3.1.54.27.77.46.16.14.34.3.53.5l1.77-1.77.02-.02c.28-.28.52-.52.74-.7.23-.2.47-.37.77-.47.46-.15.94-.15 1.4 0 .3.1.54.27.77.46.22.19.46.43.74.7zM2.54 4.73C2 5.8 2 7.2 2 10c0 2.8 0 4.2.54 5.27a5 5 0 002.19 2.19C5.8 18 7.2 18 10 18c2.8 0 4.2 0 5.27-.54a5 5 0 002.19-2.19C18 14.2 18 12.8 18 10c0-2.8 0-4.2-.55-5.27a5 5 0 00-2.18-2.19C14.2 2 12.8 2 10 2c-2.8 0-4.2 0-5.27.54a5 5 0 00-2.19 2.19zM7.25 6a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" fill="currentColor" fill-rule="evenodd"></path></svg>Фотографии </a>
            <a href="#" id={classes.last_link} className={classes.fill_item}><svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><g clip-rule="evenodd" fill="currentColor" fill-rule="evenodd"><path d="M5.7 7.97a1.48 1.48 0 011.95-1.13c1.25.45 2.39 1.15 3.35 2.03.67.6.67 1.66 0 2.26-.96.88-2.1 1.58-3.34 2.03a1.48 1.48 0 01-1.96-1.13 10.49 10.49 0 010-4.06zm1.47.29A8.54 8.54 0 0110 10.02h-.01a8.54 8.54 0 01-2.82 1.72 8.99 8.99 0 010-3.48z"></path><path d="M7.08 18h5.84c1.77 0 2.42-.18 3.07-.53A3.57 3.57 0 0017.47 16c.35-.65.53-1.3.53-3.07V7.08c0-1.77-.18-2.42-.53-3.07A3.57 3.57 0 0016 2.53c-.65-.35-1.3-.53-3.07-.53H7.08c-1.77 0-2.42.18-3.07.53-.64.34-1.14.84-1.48 1.48-.35.65-.53 1.3-.53 3.07v5.84c0 1.77.18 2.42.53 3.07.34.64.84 1.14 1.48 1.48.65.35 1.3.53 3.07.53zm4.04-14.46c-.5-.04-1.15-.04-2.07-.04H7.08c-1.66 0-2.02.17-2.36.35-.38.2-.67.5-.87.87-.18.34-.35.7-.35 2.36v5.84c0 1.66.17 2.02.35 2.36.2.38.5.67.87.87.34.18.7.35 2.36.35h1.97c.92 0 1.57 0 2.07-.04.5-.04.8-.12 1.01-.23a2.5 2.5 0 001.1-1.1c.11-.22.19-.51.23-1 .04-.51.04-1.16.04-2.08v-4.1c0-.92 0-1.57-.04-2.07-.04-.5-.12-.8-.23-1.01a2.5 2.5 0 00-1.1-1.1 2.65 2.65 0 00-1-.23zm4.16 12.61c-.23.12-.47.24-1.12.3a4 4 0 00.4-.63c.24-.47.35-.99.4-1.57.04-.58.04-1.28.04-2.17V7.92c0-.88 0-1.6-.05-2.17a4.1 4.1 0 00-.39-1.57 4 4 0 00-.4-.63c.65.06.89.18 1.12.3.38.2.67.5.87.87.18.34.35.7.35 2.36v5.84c0 1.66-.17 2.02-.35 2.36-.2.38-.5.67-.87.87z"></path></g></svg>Видео </a>
        </div >
    )
}

export default AccountFill
