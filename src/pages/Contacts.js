import React from 'react'; 
import { FaTelegram, FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; 
import { motion } from 'framer-motion'; 

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

    const socialIcons = [
        { icon: FaTelegram, onClick: openTelegramChat },
        { icon: FaWhatsapp, onClick: openWhatsappChat },
        { icon: FaFacebook, onClick: openFacebook },
        { icon: FaInstagram, onClick: openInstagram },
        { icon: FaTwitter, onClick: openTwitter }
    ];

    return ( 
        <main className="section"> 
            <div className="container"> 
                <h1 className="title-1">Контакты</h1> 
                <h2 className="otstup">Если остались вопросы:</h2> 

                <div className="social-icons-container"> 
                    {socialIcons.map((social, index) => (
                        <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.3 }}>
                            <social.icon className="icon" onClick={social.onClick} />
                        </motion.div>
                    ))}
                </div> 
            </div> 
        </main> 
    ); 
}; 

export default Contacts;