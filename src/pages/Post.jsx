import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="py-8 p-4 flex justify-center">
      <div className="border rounded-xl border-gray-200/10 p-8 max-w-[57rem]">
        <Container>
          <div className="flex justify-center mb-4 relative max-h-80">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-xl w-full object-cover"
            />
          </div>
          <div className="flex justify-center mb-6">
            {isAuthor && (
              <div className="flex gap-2">
                <Link to={`/edit-post/${post.$id}`}>
                  <button className="rounded-md bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 font-semibold">
                    Edit Post
                  </button>
                </Link>
                <button
                  className="rounded-md bg-red-500 hover:bg-red-600 text-white px-3 py-2 font-semibold"
                  onClick={deletePost}
                >
                  Delete Post
                </button>
              </div>
            )}
          </div>
          <div className="w-full mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-center">
              {post.title}
            </h1>
          </div>
          <div className="browser-css text-lg leading-relaxed">
            {parse(String(post.content))}
          </div>
        </Container>
      </div>
    </div>
  ) : null;
}
