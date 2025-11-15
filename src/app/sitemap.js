export default function sitemap() {
  return [
    {
      url: 'http://localhost:3000/', // Replace with your Vercel URL (e.g., yourname.vercel.app)
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];
}