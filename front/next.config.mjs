/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {hostname: "t3.ftcdn.net",},
            {hostname: "www.shutterstock.com",},
            {hostname: "www.apple.com",},
            {hostname: "encrypted-tbn0.gstatic.com",},
            {hostname: "ar.celulares.com",},
            {hostname: "maximstore.com",},
            {hostname: "http2.mlstatic.com",},
            {hostname: "media.es.wired.com",},
            {hostname: "cdn.thewirecutter.com",},
            {hostname: "m.media-amazon.com",},
            {hostname: "c1.neweggimages.com",},
            {hostname: "cdn-icons-png.flaticon.com",},
            {hostname: "img.freepik.com",},
        ]
    }
};

export default nextConfig;
