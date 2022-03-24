import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8rgsaxg', 'template_je71u29', form.current, 'bY-NWdrTL4kVCBkLQ')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>nitales703@gmail.com</h5>
            <a href="mailto:nitales703@gmail.com" target="_blank">Send a Message</a>
          </article>

          <article className="contact__option">
          <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Daviloper</h5>
            <a href="https://www.facebook.com/" target="_blank">Send a Message</a>
          </article>

          <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsAppp</h4>
            <h5>+57123456789</h5>
            <a href="http://api.whatsapp.com/send?+573508093412" target="_blank">Send a Message</a>
          </article>

        </div>
        {/*END CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Mail' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
