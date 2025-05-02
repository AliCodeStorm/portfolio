'use client';

import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faClock, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter, faDribbble } from '@fortawesome/free-brands-svg-icons';
import { gsap } from "gsap";
import { Button, Card, CardBody, CardFooter, CardHeader } from "@traken-ui/react";

function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const contactRef = useRef(null);
    const formRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(contactRef.current, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" });
        gsap.fromTo(formRef.current, { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.3 });
    }, []);

    interface FormState {
        name: string;
        email: string;
        subject: string;
        message: string;
    }

    interface ChangeEvent {
        target: {
            name: string;
            value: string;
        };
    }

    const handleChange = (e: ChangeEvent) => {
        const { name, value } = e.target;
        setFormState((prev: FormState) => ({ ...prev, [name]: value }));
    };

    interface SubmitEvent {
        preventDefault: () => void;
    }

    const handleSubmit = (e: SubmitEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formState);
        setFormState({ name: "", email: "", subject: "", message: "" });
    };

    const contactInfo = [
        {
            icon: faEnvelope,
            title: "Email",
            value: "alex.chen@example.com",
            link: "mailto:alex.chen@example.com",
        },
        {
            icon: faPhone,
            title: "Phone",
            value: "+1 (555) 123-4567",
            link: "tel:+15551234567",
        },
        {
            icon: faMapMarkerAlt,
            title: "Location",
            value: "Lahore,Pakistan",
        },
        {
            icon: faClock,
            title: "Working Hours",
            value: "Mon-Fri: 9AM - 6PM",
        },
    ];

    return (

        <section id="contact" className="text-white py-16 md:py-4 lg:py-8 overflow-hidden">
            <div className="max-w-[768px] w-full xl:max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center space-x-3 mb-6">
                        <div className="h-1 w-10 bg-indigo-500" />
                        <span className="text-indigo-400 uppercase text-sm tracking-widest font-medium">
                            Contact Me
                        </span>
                        <div className="h-1 w-10 bg-indigo-500" />
                    </div>
                    <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Have a project in mind or just want to say hello? Feel free to reach out.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-stretch">
                    <div ref={contactRef} className="w-full md:w-1/2">
                        <Card className="bg-white/5 border border-gray-600 backdrop-blur-md text-white rounded-2xl p-6 md:p-8 h-full">
                            <CardHeader className="p-0">
                                <h3 className="text-gray-50 text-2xl font-bold mb-6">Contact Information</h3>
                                <p className="text-gray-300 mb-8">Let's turn your ideas into reality.</p>
                            </CardHeader>

                            <CardBody className="space-y-6 p-0">
                                {contactInfo.map((item, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="bg-indigo-500/20 text-indigo-300 p-3 rounded-lg">
                                            <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm text-gray-400 mb-1">{item.title}</h4>
                                            {item.link ? (
                                                <a href={item.link} className="text-white hover:text-indigo-400 transition-colors">
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="text-white">{item.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </CardBody>

                            <CardFooter className="mt-10 p-0">
                                <h4 className="text-white text-lg font-semibold mb-4">Connect With Me</h4>
                                <div className="flex gap-4">
                                    {[faLinkedin, faTwitter, faDribbble].map((icon, idx) => (
                                        <a
                                            key={idx}
                                            href="#"
                                            aria-label="Social link"
                                            className="w-10 h-10 bg-gray-700 hover:bg-indigo-600 rounded-full flex items-center justify-center transition-colors"
                                        >
                                            <FontAwesomeIcon icon={icon} />
                                        </a>
                                    ))}
                                </div>
                            </CardFooter>
                        </Card>
                    </div>

                    <div ref={formRef} className="w-full md:w-1/2">
                        <Card className="bg-white/5 border border-gray-600 backdrop-blur-md text-white rounded-2xl">
                            <CardBody className="p-6 md:p-8">
                                <h3 className="text-gray-50 text-2xl font-bold mb-6">Send Me a Message</h3>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="text-sm text-gray-300 mb-2 block">Your Name</label>
                                            <input
                                                suppressHydrationWarning={true}
                                                type="text"
                                                name="name"
                                                value={formState.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-black/20 border border-gray-500 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="text-sm text-gray-300 mb-2 block">Your Email</label>
                                            <input
                                                suppressHydrationWarning={true}
                                                type="email"
                                                name="email"
                                                value={formState.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-black/20 border border-gray-500 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="text-sm text-gray-300 mb-2 block">Subject</label>
                                        <input
                                            suppressHydrationWarning={true}
                                            type="text"
                                            name="subject"
                                            value={formState.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-black/20 border border-gray-500 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Project Discussion"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="text-sm text-gray-300 mb-2 block">Your Message</label>
                                        <textarea
                                            name="message"
                                            value={formState.message}
                                            onChange={handleChange}
                                            rows={5}
                                            required
                                            className="w-full bg-black/20 border border-gray-500 rounded-lg py-3 px-4 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Hello, I'd like to talk about..."
                                        />
                                    </div>

                                    <Button suppressHydrationWarning={true} type="submit" className="bg-indigo-600 hover:bg-indigo-700 w-full sm:w-auto text-white font-medium py-3 px-8 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg">
                                        Send Message
                                        <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4" />
                                    </Button>
                                </form>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Contact;
