import React from 'react';

const Contacts = () => {
    const openTelegramChat = () => {
        window.open('https://t.me/ssssnya', '_blank');
    };

    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Контакты</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Местоположение</h2>
                        <p className="sochi">г. Сочи</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p>
                            <a className='sochi' href="tel:+79234843779" onClick={openTelegramChat}>+7 (923) 484-37-79</a>
                        </p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p>
                            <a className='sochi' href="mailto:arseniyshag762@gmail.com">
                                arseniyshag762@gmail.com
                            </a>
                        </p>
                    </li>
                </ul>
            </div>
        </main>
    );
};

export default Contacts;