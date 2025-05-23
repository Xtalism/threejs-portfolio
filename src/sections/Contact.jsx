import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            await emailjs.send('threejs-portfolio-email',
                'template_t0wlf6l',
                {
                    from_name: form.name,
                    to_name: 'Manuel Piña Olivas',
                    from_email: form.email,
                    to_email: 'manuel.pina.olivas@gmail.com',
                    message: form.message
                }, '0A7ZkCSnmgY50vH73');

            setLoading(false);
            alert('Your message has been sent!')

        } catch (error) {
            console.log(error);
            alert('Something went wrong, please try again later!')
        }

    }

    return (
        <section className='c-space my-20' id="contact">
            <div className='relative min-h-screen flex items-center 
        justify-center flex-col'>
                {/* <img src='/assets/terminal.png' alt='terminal background'
                    className='absolute inset-0 min-h-screen' /> */}
                <div className='contact-container'>
                    <h3 className='head-text '>Let's Talk</h3>
                    <p className='text-lg text-white-600 mt-3'>
                        Let's keep in touch. Let me know if you have any questions or if you want to work together.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}
                        className='mt-12 flex flex-col space-y-7'>
                        <label className='space-y-3'>
                            <span className='field-label'>
                                Full Name
                            </span>
                            <input
                                type='text'
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                                required
                                className='field-input'
                                placeholder='Manuel Piña Olivas' />
                        </label>
                        <label className='space-y-3'>
                            <span className='field-label'>
                                Email
                            </span>
                            <input
                                type='email'
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                                required
                                className='field-input'
                                placeholder='manuel.pina.olivas@gmail.com' />
                        </label>
                        <label className='space-y-3'>
                            <span className='field-label'>
                                Your message
                            </span>
                            <textarea
                                name='message'
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className='field-input'
                                placeholder="Hi, I'm in interested in..." />
                        </label>
                        <button className='field-btn' type='submit' disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src='/assets/arrow-up.png' alt='arrow-up'
                                className='field-btn_arrow' />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact