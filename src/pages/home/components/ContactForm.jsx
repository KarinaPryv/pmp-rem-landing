import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';

import AppLink from '../../../components/AppLink/AppLink';
import Button from '../../../components/Button/Button';
import ArrowIcon from '../../../assets/icons/ArrowIcon';

const contactSchema = z.object({
    first_name: z.string().trim().min(1, 'Введіть ім’я'),
    last_name: z.string().trim().min(1, 'Введіть прізвище'),
    email: z
        .string()
        .trim()
        .min(1, 'Введіть email')
        .email('Введіть коректний email'),
    company: z.string().optional(),
    message: z
        .string()
        .trim()
        .min(10, 'Повідомлення має містити щонайменше 10 символів'),
});

function ContactForm() {
    const form = useRef();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(contactSchema),
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        shouldFocusError: true,
        defaultValues: {
            first_name: '',
            last_name: '',
            email: '',
            company: '',
            message: '',
        },
    });

    const onSubmit = async () => {
        try {
            await toast.promise(
                // emailjs.sendForm(
                //     import.meta.env.VITE_EMAILJS_SERVICE_ID,
                //     import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                //     form.current,
                //     import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                // ),
                new Promise((resolve, reject) => setTimeout(resolve, 2000)),
                {
                    loading: 'Надсилаємо повідомлення...',
                    success: (
                        <div className='toast-content'>
                            <strong className='toast-title'>
                                Повідомлення успішно надіслано
                            </strong>

                            <span className='toast-description'>
                                Дякуємо за ваше звернення.
                                <br />
                                Ми зв’яжемося з вами найближчим часом.
                            </span>
                        </div>
                    ),
                    error: 'Не вдалося надіслати повідомлення',
                },
            );

            reset();
        } catch (err) {
            console.error('EmailJS error:', err);
        }
    };

    return (
        <div className='form-card'>
            <h3>Надішліть нам повідомлення</h3>

            <form
                id='contact-form'
                ref={form}
                onSubmit={handleSubmit(onSubmit)}
            >
                <fieldset>
                    <div className='form-row-2'>
                        <div className='form-group'>
                            <label htmlFor='last_name'>Прізвище *</label>
                            <input
                                {...register('last_name')}
                                type='text'
                                placeholder='Ваше прізвище'
                                className={
                                    errors.last_name ? 'input-error' : ''
                                }
                            />
                            {errors.last_name && (
                                <span className='error-message'>
                                    {errors.last_name.message}
                                </span>
                            )}
                        </div>

                        <div className='form-group'>
                            <label htmlFor='first_name'>Ім'я *</label>
                            <input
                                {...register('first_name')}
                                type='text'
                                placeholder="Ваше ім'я"
                                className={
                                    errors.first_name ? 'input-error' : ''
                                }
                            />
                            {errors.first_name && (
                                <span className='error-message'>
                                    {errors.first_name.message}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='email'>Email Address *</label>
                        <input
                            {...register('email')}
                            type='email'
                            placeholder='your@email.com'
                            className={errors.email ? 'input-error' : ''}
                        />
                        {errors.email && (
                            <span className='error-message'>
                                {errors.email.message}
                            </span>
                        )}
                    </div>

                    <div className='form-group'>
                        <label htmlFor='company'>Організація</label>
                        <input
                            {...register('company')}
                            type='text'
                            placeholder="Назва організації (необов'язково)"
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='message'>Повідомлення *</label>
                        <textarea
                            {...register('message')}
                            placeholder="Коротко опишіть ваш проєкт, об'єкт або питання..."
                            className={errors.message ? 'input-error' : ''}
                        />
                        {errors.message && (
                            <span className='error-message'>
                                {errors.message.message}
                            </span>
                        )}
                    </div>

                    <Button
                        type='submit'
                        icon={isSubmitting ? null : <ArrowIcon />}
                        disabled={isSubmitting}
                        className='form-submit-button'
                    >
                        {isSubmitting ? 'Надсилання...' : 'Надіслати'}
                    </Button>
                </fieldset>
            </form>
        </div>
    );
}

export default ContactForm;
