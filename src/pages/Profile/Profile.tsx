import React, { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import type { Column } from "../../shared/components/Table/Table";
import Table from "../../shared/components/Table/Table";
import { getAllPost, getAllTags } from "../../services/profile.service";
import Filter from "../../shared/components/Filter/Filter";

interface Post {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

const Profile: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState("");
  const [title, setTitle] = useState("");

  const fetchTags = async () => {
    try {
      const response = await getAllTags();
      setTags(response);
    } catch (err) {
      console.error("Error fetching tags:", err);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getAllPost("1", title, selectedTag);
        setPosts(response.posts);
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };

    fetchPosts();
  }, [selectedTag, title]);

  const columns: Column<Post>[] = [
    { key: "title", header: "Title" },
    { key: "description", header: "Description" },
    {
      key: "tags",
      header: "Tags",
      render: (row) => (
        <div className={styles.tagList}>
          {row.tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
              {index < row.tags.length - 1 && <span>, </span>}
            </span>
          ))}
        </div>
      ),
    },
  ];

  useEffect(() => {
    fetchTags();
  }, []);

  return (
    <div className={styles.profile}>
      <h2>Post Management</h2>

      <Filter
        title={title}
        tag={selectedTag}
        tags={tags}
        onTitleChange={(val) => setTitle(val)}
        onTagChange={(val) => setSelectedTag(val)}
      />
      <Table columns={columns} data={posts} />
    </div>
  );
};

export default Profile;
