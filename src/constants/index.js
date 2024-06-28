import {shoe5, shoe6, shoe7, customer1, customer2, manOnShoes1, manOnShoes2, manOnShoes3, sandals1, sandals2, sandals3, shoe1, shoe2, shoe3, shoe4, standAloneShoe1, standAloneShoes2, standAloneShoes3} from '../assets/images/index'
import { facebook, instagram, shieldTick, support, truckFast, twitter } from '../assets/icons/index';

export const navLinks = [
    {"url":"/", "label":"Home"},
    {"url":"#about", "label":"About Us"},
    {"url":"#products", "label":"Products"},
    {"url":"#services", "label":"Our values"}
];

export const shoes = [
    {
        id: 1,
        imgURL: shoe1,
        name:"Leather Brogue for men",
        price:"N15000",
        alt:"Leather shoe"
    },
    {
        id:2,
        imgURL: shoe3,
        name:"Leather Brogue for men",
        price:"N15000",
        alt:"Leather shoe"
    },
    {
        id: 3,
        imgURL: shoe4,
        name:"Leather Brogue for men",
        price: "N15000",
        alt:"Leather shoe"
    },
    {
        id: 4,
        imgURL:shoe5,
        name:"Leather Shoe for men",
        price:"N15000",
        alt:"Leather shoe"
    },
    {
        id: 5,
        imgURL:shoe5,
        name:"Leather Shoe for men",
        price:"N15000",
        alt:"Leather shoe"
    },
    {
        id: 6,
        imgURL:shoe5,
        name:"Leather Shoe for men",
        price:"N15000",
        alt:"Leather shoe"
    },
    {
        id:7,
        imgURL:shoe5,
        name:"Leather Shoe for men",
        price:"N15000",
        alt:"Leather shoe"
    },
    {
        id: 8,
        imgURL:shoe5,
        name:"Leather Shoe for men",
        price:"N15000",
        alt:"Leather shoe"
    },
    
];
export const sandals = [
    {
        imgURL: sandals1,
        label: "Brown leather sandals for men",
        alt: "Leather sandals",
        price: "N14000"
    },
    {
        imgURL: sandals2,
        label:"Brown leather sandals for men",
        alt:"Leather sandals",
        price: "N13000"
    },
    {
        imgURL: sandals3,
        label:"Black Leather sandals for men",
        alt:"Leather sandals",
        price: "N12000"
    }
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

export const services = [
    {
        imgURL: standAloneShoe1,
        label: "Unwavering Quality",
        subtext: "We prioritize premium materials and meticulous construction to ensure your Ellech shoes become trusted companions for years to come."
    },
    {
        imgURL: standAloneShoes2,
        label: "Effortless Class",
        subtext: "Our designs exude sophistication without sacrificing comfort. Every Ellech pair elevates your look, from everyday errands to special occasions."
    },
    {
        imgURL: standAloneShoes3,
        label: "Built to Endure",
        subtext: "We don't compromise on durability. Ellech shoes are made to withstand the test of time, becoming a staple in your wardrobe."
    },
    {
        imgURL: standAloneShoes2,
        label: "Customer Value at Heart",
        subtext: "We understand the importance of getting what you pay for. Ellech offers exceptional quality at a fair price, ensuring you look your best without breaking the bank."
    },
];

export const categories = [
    {
        label: "Men's shoes",
    },
    {
        label: "Men's sandals",
    }
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
        url: "",
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
            { name: "Coporate Shoes", link: "/" },
            { name: "Men's Sandals", link: "/" },
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
            { name: "Facebook", link: "" },
            { name: "Instagram", link: "" },
            { name: "Twitter", link: "" },
            { name: "ellech218@gmail.com", link: "mailto:ellech218@gmail.com" },
            { name: "+2348021682190", link: "tel:+2348021682190" },
        ],
    },
];