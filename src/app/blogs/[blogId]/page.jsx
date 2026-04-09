
const blogs = [
    {
        "id": 1,
        "title": "The Future of Artificial Intelligence",
        "author": "John Doe",
        "date": "2026-03-15",
        "tags": ["AI", "Technology", "Future"],
        "content": "Artificial Intelligence is rapidly evolving and shaping the future of industries worldwide. From healthcare to finance, AI is becoming an essential tool for innovation."
    },
    {
        "id": 2,
        "title": "10 Tips for a Healthier Lifestyle",
        "author": "Jane Smith",
        "date": "2026-02-28",
        "tags": ["Health", "Lifestyle", "Wellness"],
        "content": "Maintaining a healthy lifestyle doesn't have to be complicated. Simple habits like regular exercise, balanced nutrition, and proper sleep can make a big difference."
    },
    {
        "id": 3,
        "title": "Exploring the Beauty of Nature",
        "author": "Emily Johnson",
        "date": "2026-01-10",
        "tags": ["Travel", "Nature", "Adventure"],
        "content": "Nature offers some of the most breathtaking experiences. From mountains to oceans, exploring the natural world can bring peace and inspiration."
    },
    {
        "id": 4,
        "title": "Getting Started with Web Development",
        "author": "Michael Brown",
        "date": "2025-12-05",
        "tags": ["Programming", "Web Development", "Coding"],
        "content": "Web development is a great skill to learn in today's digital age. Start with HTML, CSS, and JavaScript to build your first website."
    }
]

const BlogDetailPage = async ({ params }) => {
    const { blogId } = await params;
    
    const blog = blogs.find(blog => blog.id === parseInt(blogId));
    console.log('show me params', blog);

    return (
        <div>
            <h4 className="text-3xl">Blog Detail coming soon!</h4>
            {
                blog && <div>
                    <h2 className="text-4xl font-bold mb-2">{blog.title}</h2>
                    <p>{blog.content}</p>
                </div>
            }
        </div>
    );
};

export default BlogDetailPage;