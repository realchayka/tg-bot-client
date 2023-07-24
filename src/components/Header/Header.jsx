import React from 'react';
import Button from "../Button/Button";

const tg = window.Telegram.WebApp;

const Header = () => {


    const onClose = () => {
        tg.close()
    }

    return (
        <header className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>{tg.initDataUnsafe?.user?.username}</span>
        </header>
    );
};

export default Header;