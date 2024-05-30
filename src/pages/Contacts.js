import React from 'react';   
import { FaTelegram, FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';   
import { motion } from 'framer-motion';   
import detectDarkMode from '../utils/detectDarkMode';
import {useLocalStorage} from "../utils/useLocalStorage";

const Contacts = () => {   
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode() === 'dark');

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
  
    const socialIcons = [  
        { icon: FaTelegram, onClick: openTelegramChat, className: 'fatelegram' },  
        { icon: FaWhatsapp, onClick: openWhatsappChat, className: 'fawhatsapp' },  
        { icon: FaFacebook, onClick: openFacebook, className: 'fafacebook' },  
        { icon: FaInstagram, onClick: openInstagram, className: 'fainstagram' },  
        { icon: FaTwitter, onClick: openTwitter, className: 'fatwitter' }  
    ];  
  
    return (   
        <main className="section">   
            <div className="container">   
                <h1 className="title-1">Контакты</h1>   
                <h2 className="otstup">Если остались вопросы:</h2>   
  
                <div className="social-icons-container">   
                    {socialIcons.map((social, index) => (  
                        <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.3 }}>  
                            <motion.div   
                                whileHover={{ scale: 1.2 }}   
                                onHoverStart={e => {}}   
                                onHoverEnd={e => {}}  
                            >  
                                <social.icon className={`icon ${social.className} ${darkMode ? '' : 'icon_dark'}`} onClick={social.onClick} />

                            </motion.div>  
                        </motion.div>  
                    ))}  
                </div>   
            </div>   
        </main>   
    );   
};   
  
export default Contacts;
