import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    // projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    projectId: 'xj53agcy',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    // token: process.env.REACT_APP_SANITY_TOKEN,
    token: 'sk536cY9Q3cVvykEguXXqemSnBEJpiG1EDhR8TqoAel09buIExghdXhJQHCYg0A8Xk3Z7tIPlWfu5RAmlhKfe9p12yZj9US7EBmtjSl7kQeOTAksxGPP4C4GZ0DX8LuBG3579hSPeogHQALU5dZnpBU6ZsXDIPeJNkSZQuFfTVizcAYPwDjJ',
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
