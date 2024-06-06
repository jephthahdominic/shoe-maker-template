import {bigShoe2, bigShoe3, bigShoe1, shoe5, shoe6, shoe7, shoe8, customer1, customer2, manOnShoes1, manOnShoes2, manOnShoes3} from '../assets/images/index'
import { facebook, instagram, shieldTick, support, truckFast, twitter } from '../assets/icons/index';

export const navLinks = [
    {"url":"#", "label":"Home"},
    {"url":"#about", "label":"About Us"},
    {"url":"#showcase", "label":"Products"},
    {"url":"#contact", "label":"Contact us"}
];

export const shoes = [
    {
        bigShoe: bigShoe1,
        alt:"Leather shoe"
    },
    {
        bigShoe: bigShoe2,
        alt:"Leather shoe"
    },
    {
        bigShoe: bigShoe3,
        alt:"Leather shoe"
    },
];

export const classicMen = [
    // {
    //     imgURL: manOnShoes1,
    //     alt:"Man wearing classic shoes"
    // },
    {
        imgURL: manOnShoes3,
        alt:"Man wearing classic shoes"
    },
    {
        imgURL: manOnShoes2,
        alt:"Man wearing classic shoes"
    }
    
]

export const popularProducts = [
    {
        imgURL: shoe5,
        name:"Brown leather Brogue for men",
        price: "N15000"
    },
    {
        imgURL:shoe6,
        name:"Brown Leather Shoe for men",
        price:"N15000"
    },
    {
        imgURL:shoe7,
        name:"Brown Leather shoe for men",
        price:"N15000"
    },
    {
        imgURL: shoe8,
        name:"Brown high-sole Brogue for men",
        price:"N15000"
    }
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];

export const socialMedia = [
    {
        imgURL: facebook,
        alt:"Facebook",
        Url: "",
    },
    {
        imgURL: instagram,
        alt:"Instagram",
        url:""
    },
    {
        imgURL: twitter,
        alt:"Twitter",
        url:""
    }
];

export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];