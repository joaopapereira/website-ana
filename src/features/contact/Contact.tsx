import React, { FormEvent, useState } from 'react';
import './Contact.module.css';
import { contactPost, contactState, ContactData } from './contactSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';


export function Contact() {
    const currentState = useAppSelector(contactState);
    const dispatch = useAppDispatch();
    const [contact, setContact] = useState<ContactData>({} as ContactData);

    type Touched = Partial<Record<keyof ContactData, boolean>>
    const [touched, setTouched] = useState<Touched>({})
    var isFormValid = true

    const validate = (contactInfo: ContactData): Errors => {
        const newErrors: Errors = {}
        const emailRegex  = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

        if (contactInfo.name === undefined || contactInfo.name === "") {
            newErrors.name = "Name field is required"
            isFormValid = false
        }
        if (contactInfo.email === undefined || contactInfo.email === "") {
            newErrors.email = "Email field is required"
            isFormValid = false
        } else if (!emailRegex.test(contactInfo.email)) {
            newErrors.email = "Please enter a valid email (ex: yournam@domain.com)."
            isFormValid = false
        }
        if (contactInfo.topic === undefined || contactInfo.topic === "") {
            newErrors.topic = "Topic field is required"
            isFormValid = false
        }
        if (contactInfo.message === undefined || contactInfo.message === "") {
            newErrors.message = "Message field is required"
            isFormValid = false
        }
        return newErrors
    }

    type Errors = Partial<Record<keyof ContactData, string>>
    const [errors, setErrors] = useState<Errors>(validate(contact))

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(contactPost(contact))
    }

    const form = () => {
        if (currentState !== 'not') {
            return null
        }
        if (errors)
        var submitPossible = false
        return (<form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
            </div>
            <div>
                <input type="text" id="name" name="name" value={contact.name || ""} required
                    onBlur={() => setTouched({ ...touched, name: true })}
                    onChange={(e) => {
                        setContact({ ...contact, name: e.target.value })
                        setErrors(validate({ ...contact, name: e.target.value }))
                    }} />
                {errors.name && touched.name ? <p className='error'>{errors.name}</p> : null}
            </div>
            <div>
                <label htmlFor="email">Email</label>
            </div>
            <div>
                <input type="text" id="email" name="email" value={contact.email || ""} required
                    onBlur={() => setTouched({ ...touched, email: true })}
                    onChange={(e) => {
                        setContact({ ...contact, email: e.target.value })
                        setErrors(validate({ ...contact, email: e.target.value }))
                    }} />
                {errors.email && touched.email ? <p className='error'>{errors.email}</p> : null}
            </div>
            <div>
                <label htmlFor="topic">Topic</label>
            </div>
            <div>
                <input type="text" id="topic" name="topic" value={contact.topic || ""} required
                    onBlur={() => setTouched({ ...touched, topic: true })}
                    onChange={(e) => {
                        setContact({ ...contact, topic: e.target.value })
                        setErrors(validate({ ...contact, topic: e.target.value }))
                    }} />
                {errors.topic && touched.topic ? <p className='error'>{errors.topic}</p> : null}
            </div>
            <div>
                <label htmlFor="message">Message</label>
            </div>
            <div>
                <textarea id="message" name="message" value={contact.message || ""}
                    onBlur={() => setTouched({ ...touched, message: true })}
                    onChange={(e) => {
                        setContact({ ...contact, message: e.target.value })
                        setErrors(validate({ ...contact, message: e.target.value }))
                    }}></textarea>
                {errors.message && touched.message ? <p className='error'>{errors.message}</p> : null}
            </div>
            <button type="submit" disabled={!isFormValid}>Save Contact</button>
        </form>)
    }
    const error = () => {
        if (currentState !== 'failed') {
            return null
        }
        return (<div>Failed to save contact!</div>)
    }
    const sentMessage = () => {
        if (currentState !== 'sent') {
            return null
        }
        return (<div>Contact saved, will check back as soon as possible.</div>)
    }
    const sending = () => {
        if (currentState !== 'sending') {
            return null
        }
        return (<div>Saving contact information...</div>)
    }


    return (<section id="contact" className="contact">
        <div className="container">
            <div className="section-title">
                <h2>Contact</h2>
            </div>
            <div className="row">
                <div className="col-lg-8 pt-4 pt-lg-0 content" >
                    {error()}
                    {form()}
                    {sentMessage()}
                    {sending()}
                </div>
            </div>
        </div>
    </section>)
}

