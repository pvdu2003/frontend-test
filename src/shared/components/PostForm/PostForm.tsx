import React, { useState, useEffect } from "react";
import type { Post } from "../../../pages/Profile/Profile";
import styles from "./PostForm.module.css";
import Button from "../Button/Button";

interface PostFormProps {
  post?: Post | null;
  allTags: string[];
  onSubmit: (data: {
    title: string;
    description: string;
    tags: string[];
  }) => void;
}

const PostForm: React.FC<PostFormProps> = ({ post, onSubmit, allTags }) => {
  const [title, setTitle] = useState(post?.title || "");
  const [description, setDescription] = useState(post?.description || "");
  const [selectedTags, setSelectedTags] = useState<string[]>(post?.tags || []);

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setDescription(post.description);
      setSelectedTags(post.tags);
    }
  }, [post]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, description, tags: selectedTags });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className={styles.input}
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className={styles.textarea}
        required
      />

      <label>Select Tags:</label>
      <div className={styles.tagOptions}>
        {allTags.map((tag) => (
          <button
            type="button"
            key={tag}
            className={`${styles.tagOption} ${
              selectedTags.includes(tag) ? styles.active : ""
            }`}
            onClick={() => toggleTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className={styles.tagList}>
        {selectedTags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
            <span
              className={styles.removeX}
              title="Remove"
              onClick={() => toggleTag(tag)}
            >
              ×
            </span>
          </span>
        ))}
      </div>

      <Button text="Save" onClick={() => {}} />
    </form>
  );
};

export default PostForm;
