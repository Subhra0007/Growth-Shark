import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://proriterz.com/wp-json/wp/v2/posts?slug=${slug}&_embed`
        );
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

  if (loading) return <p className="text-center p-4">Loading post...</p>;
  if (error) return <p className="text-center text-red-500 p-4">{error}</p>;

  const featuredImage =
    post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "https://via.placeholder.com/800x400?text=No+Image";

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1
        className="text-3xl font-bold mb-4"
        dangerouslySetInnerHTML={{ __html: post?.title?.rendered }}
      />

      <img
        src={featuredImage}
        alt={post?.title?.rendered || "Blog Image"}
        className="w-full rounded-lg mb-6"
      />

      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post?.content?.rendered }}
      />
    </div>
  );
}
