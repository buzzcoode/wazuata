import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3,bigShoe4, shoe4, shoe5, shoe6, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3,thumbnailShoe4 } from "../assets/images";

export const navLinks = [
    { href: "/lista-reserva", label: "Lista de Espera" },
    { href: "/galeria", label: "Galeria" },
    { href: "/sobre-nos", label: "Sobre nós" },
    { href: "/contacto", label: "Contacto" }
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
    {
        thumbnail: thumbnailShoe4,
        bigShoe: bigShoe4,
    }
]

export const products = [
    {
        imgURL: shoe4,
        name: "AirMax Fusion X",
    },
    {
        imgURL: shoe5,
        name: "Zoom Ultra Boost",
    },
    {
        imgURL: shoe6,
        name: "React Volt Runner",
    }
]

export const services = [
        {
            imgURL: truckFast,
            label: "Lorem ipsum dolor",
            subtext: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto temporibus itaque nisi consectetur odit aspernatur debitis dicta quia cupiditate sint quas ipsum quos dignissimos vel."
        },
        {
            imgURL: shieldTick,
            label: "Lorem ipsum dolor",
            subtext: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto temporibus itaque nisi consectetur odit aspernatur debitis dicta quia cupiditate sint quas ipsum quos dignissimos vel."
        },
        {
            imgURL: support,
            label: "Lorem ipsum dolor",
            subtext: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto temporibus itaque nisi consectetur odit aspernatur debitis dicta quia cupiditate sint quas ipsum quos dignissimos vel."
        }
    ]
    
export const footerLinks = [
    {
        title: "Produtos",
        links: [
            { name: "Air Force 1", link: "#" },
            { name: "Air Max 1", link: "#" },
            { name: "Air Jordan 1", link: "#" },
            { name: "Air Force 2", link: "#" },
            { name: "Nike Waffle Racer", link: "#" },
            { name: "Nike Cortez", link: "#" }
        ]
    },
    {
        title: "Ajuda",
        links: [
            { name: "Sobre nós", link: "/sobre-nos" },
            { name: "FAQs", link: "#" },
            { name: "Como funciona?", link: "#" },
            { name: "Políticas de privacidade", link: "#" },
            { name: "Políticas de pagamento", link: "#" }
        ]
    },
    {
        title: "Entre em contacto",
        links: [
            { name: "comercial@wazuata.ao", link: "mailto:comercial@wazuata.ao" },
            { name: "923 xxx xxx", link: "tel:923xxxxxx" }
        ]
    }
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" }
]