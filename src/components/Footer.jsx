import { Facebook, Twitter, Linkedin, Youtube, Rss, Instagram } from 'lucide-react'
import Button from './ui/Button'
import Input from './ui/Input'

export default function Footer() {
    return (
        <footer className="bg-white">
            {/* Newsletter Signup */}
            <div className="bg-yellow-400 py-4">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center mb-4 md:mb-0">
                        <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-lg font-semibold">Sign up to Newsletter</span>
                    </div>
                    <p className="mb-4 md:mb-0">...and receive <span className="font-bold">$20 coupon for first shopping</span></p>
                    <div className="flex w-full md:w-auto">
                        <Input type="email" placeholder="Enter your email address" className="rounded-r-none" />
                        <Button type="submit" className="rounded-l-none bg-gray-800 hover:bg-gray-700 text-white">
                            Sign Up
                        </Button>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Column 1: Logo and Contact */}
                    <div>
                        <h2 className="text-3xl font-bold mb-4">electro<span className="text-yellow-400">.</span></h2>
                        <div className="flex items-center mb-4">
                            <svg className="w-8 h-8 mr-2 text-yellow-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 12.5C22 17.1944 17.6944 21 13 21C11.2205 21 9.57736 20.4417 8.20352 19.4712L3 21L4.52876 15.7965C3.55833 14.4226 3 12.7795 3 11C3 6.30558 7.30558 3 12 3C16.6944 3 21 6.80558 21 11.5C21 11.6698 20.9937 11.8379 20.9813 12.0042C20.9937 12.1663 21 12.3321 21 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div>
                                <p className="font-semibold">Got Questions ? Call us 24/7!</p>
                                <p className="text-lg">(800) 8001-8588, (0600) 874 548</p>
                            </div>
                        </div>
                        <p className="mb-2"><strong>Contact Info</strong></p>
                        <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                        <div className="flex mt-4 space-x-4">
                            <Facebook size={20} />
                            <Twitter size={20} />
                            <Linkedin size={20} />
                            <Youtube size={20} />
                            <Rss size={20} />
                            <Instagram size={20} />
                        </div>
                    </div>

                    {/* Column 2: Find It Fast */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Find It Fast</h3>
                        <ul className="space-y-2">
                            {["Laptops & Computers", "Cameras & Photography", "Smart Phones & Tablets", "Video Games & Consoles", "TV & Audio", "Gadgets", "Car Electronic & GPS"].map((item, index) => (
                                <li key={index}><a href="#" className="hover:text-yellow-400">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Customer Care */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Customer Care</h3>
                        <ul className="space-y-2">
                            {["My Account", "Track your Order", "Wishlist", "Customer Service", "Returns/Exchange", "FAQs", "Product Support"].map((item, index) => (
                                <li key={index}><a href="#" className="hover:text-yellow-400">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: More Categories */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">More Categories</h3>
                        <ul className="space-y-2">
                            {["Printers & Ink", "Software", "Office Supplies", "Computer Components"].map((item, index) => (
                                <li key={index}><a href="#" className="hover:text-yellow-400">{item}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright and Payment Methods */}
            <div className="border-t">
                <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
                    <p>© Electro - All Rights Reserved</p>
                    <div className="flex space-x-2 mt-4 md:mt-0">
                        {["Discover", "Mastercard", "PayPal", "Skrill", "Visa"].map((card, index) => (
                            <div key={index} className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center text-xs font-bold">
                                {card}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}