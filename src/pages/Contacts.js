import React from 'react';
import { FaTelegram, FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Contacts = () => {
    const openTelegramChat = () => {
        window.open('https://t.me/ssssnya', '_blank');
    };

    const openWhatsappChat = () => {
        window.open('https://wa.me/79234843779', '_blank');
    };

    const openFacebook = () => {
        window.open('https://www.facebook.com/example', '_blank');
    };

    const openInstagram = () => {
        window.open('https://www.instagram.com/example', '_blank');
    };

    const openTwitter = () => {
        window.open('https://twitter.com/example', '_blank');
    };

    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Контакты</h1>
                <h2 className="otstup">Если остались вопросы:</h2>

                <div className="social-icons-container">
                    <FaTelegram className="icon" onClick={openTelegramChat} />
                    <FaWhatsapp className="icon" onClick={openWhatsappChat} />
                    <FaFacebook className="icon" onClick={openFacebook} />
                    <FaInstagram className="icon" onClick={openInstagram} />
                    <FaTwitter className="icon" onClick={openTwitter} />
                </div>
            </div>
        </main>
    );
};

export default Contacts;