import React, { useState } from 'react'
import { Container, SectionDevider, SectionTitle } from '../components'
import { HiOutlineMail } from 'react-icons/hi'
import { GiSmartphone } from 'react-icons/gi'
import { client } from '../client'

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { name, email, message } = formData;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const contact = {
            _type: 'contact',
            name: formData.name,
            email: formData.email,
            message: formData.message,
        };

        client.create(contact)
            .then(() => {
                setLoading(false);
                setIsFormSubmitted(true);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div id='contact' className='scroll-smooth'>
            <Container>
                <SectionDevider />
                <SectionTitle title='Contact' />
                <div className='w-9/12 mx-auto'>
                    <div className='flex items-center justify-center gap-4'>
                        <div className='flex items-center gap-4 rounded-lg bg-alfan-darkBlue px-5 py-3 w-80'>
                            <HiOutlineMail size={32} color='white' />
                            <a href="mailto:altiansyahfanny21@gmail.com" className="text-alfan-white">
                                altiansyahfanny21@gmail.com
                            </a>
                        </div>
                        <div className='flex items-center gap-4 rounded-lg bg-alfan-darkBlue px-5 py-3 w-80'>
                            <GiSmartphone size={32} color='white' />
                            <a href='https://api.whatsapp.com/send/?phone=%2B6281292856047&text=Klik+Lanjutkan+untuk+melanjutkan&app_absent=0' target='_blank' rel='noreferrer' className='text-alfan-white'>
                                +62-812-9285-6047
                            </a>
                        </div>
                    </div>
                    {!isFormSubmitted ? (
                        <form onSubmit={handleSubmit} className='flex items-center flex-col mt-16 gap-4 w-[36rem] mx-auto'>
                            <input
                                type="text"
                                name='name'
                                id="name"
                                className="text-sm rounded-lg  block w-full px-5 py-3 bg-gray-700 placeholder-gray-400 text-white focus:outline-none"
                                placeholder="Your Name"
                                autoComplete='off'
                                value={name}
                                onChange={(e) => handleChangeInput(e)}
                            />
                            <input
                                type="text"
                                name='email'
                                id="email"
                                className="text-sm rounded-lg  block w-full px-5 py-3 bg-gray-700 placeholder-gray-400 text-white focus:outline-none"
                                placeholder="Your Email"
                                autoComplete='off'
                                value={email}
                                onChange={(e) => handleChangeInput(e)}
                            />
                            <textarea
                                type="text"
                                name='message'
                                id="message"
                                className="text-sm rounded-lg  block w-full px-5 py-3 bg-gray-700 placeholder-gray-400 text-white focus:outline-none h-64"
                                placeholder="Your Message"
                                value={message}
                                onChange={(e) => handleChangeInput(e)}
                            />
                            <button type='submit' className='px-5 py-3 rounded-lg text-alfan-white bg-gradient-to-r from-purple-500 to-cyan-500'>{!loading ? 'Send Message' : 'Sending...'}</button>
                        </form>
                    ) : (
                        <div className='mt-8'>
                            <h3 className="text-alfan-white font-bold text-3xl text-center">
                                Thank you for getting in touch!
                            </h3>
                        </div>
                    )}
                </div>
            </Container>
        </div>
    )
}

export default Contact