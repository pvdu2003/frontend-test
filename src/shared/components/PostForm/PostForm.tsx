import React, { useState, useEffect } from "react";
import type { Post } from "../../../pages/Profile/Profile";
import styles from "./PostForm.module.css";

interface PostFormProps {
  post?: Post | null;
  onSubmit: (data: {
    title: string;
    description: string;
    tags: string[];
  }) => void;
}

const PostForm: React.FC<PostFormProps> = ({ post, onSubmit }) => {
  const [title, setTitle] = useState(post?.title || "");
  const [description, setDescription] = useState(post?.description || "");
  const [tags, setTags] = useState(post?.tags.join(", ") || "");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setDescription(post.description);
      setTags(post.tags.join(", "));
    }
  }, [post]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tagList = tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
    onSubmit({ title, description, tags: tagList });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className={styles.input}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className={styles.textarea}
      />
      <input
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        placeholder="Tags (comma-separated)"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Save
      </button>
    </form>
  );
};

export default PostForm;
