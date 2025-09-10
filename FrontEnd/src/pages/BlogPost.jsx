import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API =
  import.meta.env.VITE_PRORITERZ_API || "https://proriterz.com/wp-json/wp/v2";

// Helper function to fix old Cloudways URLs
const fixImageUrl = (url) => {
  if (!url) return "https://via.placeholder.com/800x400?text=Image+Not+Found";
  return url.replace(
    "wordpress-1281832-4641891.cloudwaysapps.com",
    "proriterz.com"
  );
};

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        setLoading(true);
        const res = await fetch(`${API}/posts?slug=${slug}&_embed`);
        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
        const data = await res.json();

        if (data.length > 0) {
          setPost(data[0]);
        } else {
          setError("Post not found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  if (loading)
    return <p className="text-center p-4 text-white">Loading post...</p>;
  if (error)
    return <p className="text-center text-red-500 p-4">{error}</p>;

  const featuredImage = fixImageUrl(
    post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url
  );

  const fixedContent = post?.content?.rendered?.replaceAll(
    "wordpress-1281832-4641891.cloudwaysapps.com",
    "proriterz.com"
  );

  return (
    <div className="bg-gradient-to-r from-black via-[#0b223f] to-[#06263f] min-h-screen py-10">

      {/* Custom styling */}
      <style>
        {`
          .prose p {
            font-size: 1.125rem; /* Default paragraph size */
            line-height: 1.8;
            margin-bottom: 1.5rem;
          }

          .prose p strong {
            font-size: 1.75rem; /* Bigger highlighted sentences */
            display: block;
            text-align: center;
            margin: 2rem 0;
            font-weight: bold;
            color: #ffffff;
          }

          .prose h1 {
            font-size: 2.75rem;
            font-weight: bold;
            margin-top: 2.5rem;
            margin-bottom: 2rem;
          }

          .prose h2 {
            font-size: 2.25rem;
            font-weight: bold;
            margin-top: 2rem;
            margin-bottom: 1.75rem;
          }

          .prose h3 {
            font-size: 1.75rem;
            font-weight: bold;
            margin-top: 1.75rem;
            margin-bottom: 1.5rem;
          }

          .prose ul {
            list-style-type: disc;
            padding-left: 1.75rem;
          }

          .prose li {
            font-size: 1.25rem;
            margin-bottom: 1rem;
          }

          .prose img {
            max-width: 100%;
            border-radius: 0.5rem;
            margin: 1.75rem 0;
          }
        `}
      </style>

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Blog Title */}
        <h1
          className="text-4xl md:text-5xl font-extrabold text-center text-white leading-snug p-6"
          dangerouslySetInnerHTML={{ __html: post?.title?.rendered }}
        />

        {/* Featured Image */}
        <div className="flex justify-center p-6">
          <img
            src={featuredImage}
            alt={post?.title?.rendered || "Blog Image"}
            className="rounded-xl shadow-2xl max-h-[450px] w-full object-cover"
          />
        </div>

        {/* Blog Content */}
        <div
          className="prose prose-lg prose-invert max-w-none text-white mx-auto"
          dangerouslySetInnerHTML={{ __html: fixedContent }}
        />
      </div>
    </div>
  );
}
