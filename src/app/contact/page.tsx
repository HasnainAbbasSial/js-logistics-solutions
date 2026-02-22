"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    Phone,
    Mail,
    MapPin,
    MessageSquare,
    Send,
    Clock,
    ExternalLink
} from "lucide-react";
import { useState } from "react";
import { sendContactEmail } from "../actions";
import PageHeader from "@/components/PageHeader";

const ContactPage = () => {
    return (
        <div className="min-h-screen">
            <PageHeader
                title="Let's Get You Rolling."
                description="Ready to see the difference JS Logistics Solutions can make for your bottom line?"
            />

            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        {/* Contact Information */}
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h2>
                            <p className="text-gray-500 text-xl max-w-2xl mx-auto">
                                We're here to support your trucking business 24/7. Reach out to us via phone or email and our team will get back to you immediately.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div className="bg-white dark:bg-secondary/40 p-10 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center shadow-xl hover:shadow-2xl transition-all">
                                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                    <Phone size={36} />
                                </div>
                                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Call Us</p>
                                <a href="tel:+14560467584" className="text-2xl font-bold hover:text-primary transition-colors">+1 456 046 7584</a>
                                <p className="text-gray-400 mt-2 italic text-sm">24/7 Dispatch Support</p>
                            </div>

                            <div className="bg-white dark:bg-secondary/40 p-10 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center shadow-xl hover:shadow-2xl transition-all">
                                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                    <Mail size={36} />
                                </div>
                                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Email Us</p>
                                <a href="mailto:info@jslogisticsolutions.com" className="text-xl md:text-2xl font-bold hover:text-primary transition-colors">info@jslogisticsolutions.com</a>
                            </div>

                            <div className="bg-white dark:bg-secondary/40 p-10 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center shadow-xl hover:shadow-2xl transition-all">
                                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                    <MapPin size={36} />
                                </div>
                                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Business Office</p>
                                <p className="text-xl font-bold italic">Downtown Business Center, New York, NY, USA</p>
                            </div>
                        </div>

                        <div className="mt-20 p-12 bg-primary text-white rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -skew-x-12 translate-x-1/2 -translate-y-1/2" />
                            <div className="relative z-10">
                                <div className="flex items-center justify-center gap-4 mb-6">
                                    <Clock size={32} />
                                    <h4 className="text-3xl font-bold">Fast Response Guarantee</h4>
                                </div>
                                <p className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed">
                                    We respond to all carrier inquiries within 30 minutes. Join the fastest-growing dispatch network in the country and start maximizing your RPM today.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Google Map */}
            <section className="h-[500px] w-full relative">
                <iframe
                    title="Google Map Location of JS Logistics Solutions"
                    width="100%"
                    height="100%"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=New%20York%2C%20NY%2C%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    className="grayscale hover:grayscale-0 transition-all duration-1000"
                ></iframe>

                {/* Overlay Card */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-8 bg-white p-6 rounded-2xl shadow-2xl max-w-xs border-l-4 border-primary">
                    <MapPin className="text-primary w-8 h-8 mb-2" />
                    <h4 className="text-xl font-bold text-secondary">JS Logistics Solutions</h4>
                    <p className="text-gray-500 text-sm mb-3">Downtown Business Center<br />New York, NY 10001</p>
                    <a
                        href="https://maps.google.com/maps?q=New%20York%2C%20NY%2C%20USA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-bold text-sm flex items-center gap-2 hover:underline"
                    >
                        Get Directions <ExternalLink size={14} />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;

