// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { postNewContent } = require("../../helper/retrieve-file-data");
const { web3Storage } = require("../../service");
const { v4: uuidv4 } = require("uuid");

export default async function handler(req, res) {
    const { title, video_url,thumbnail_url } = req.body;

    if (req.method === "POST") {
        await postNewContent({
            id: uuidv4(),
            title: title,
            slug: title.split(" ").join("-"),
            published_at: "20-JUN-2021 08:03:00",
            date: "06-20-2022",
            approved: true,
            price: {
                amount: 39.99,
                currency: "USDC",
            },
            categories: ["video", "file"],
            tags: [[{ title: "nftcollector", slug: "nftcollector" }]],
            owner: {
                name: "Brodband",
                slug: "/author",
                image: {
                    src: "/images/client/client-1.png",
                },
            },
            collection: {
                name: "Art Decco",
                slug: "/collection",
                image: {
                    src: "/images/client/client-2.png",
                },
                total_sale: "2500,000",
            },
            content: [
                "Lesson 1 - What is DAO",
                "Lesson 2 - How it Works",
                "Lesson 3 - Getting your hands dirty",
                "Lesson 4 - Practical use cases",
            ],
            video_url,
            images: [
                {
                    src: thumbnail_url,
                },
                {
                    src: "/images/portfolio/lg/portfolio-02.jpg",
                },
                {
                    src: "/images/portfolio/lg/portfolio-03.jpg",
                },
            ],
            authors: [
                {
                    id: 1,
                    name: "Mark Jordan",
                    slug: "/author",
                    image: {
                        src: "/images/client/client-2.png",
                    },
                },
            ],
        });
        res.status(200).json({ name: "John Doe" });
    }
}
