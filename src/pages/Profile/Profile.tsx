import React, { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import type { Column } from "../../shared/components/Table/Table";
import Table from "../../shared/components/Table/Table";
import { getAllPost, getAllTags } from "../../services/profile.service";
import Filter from "../../shared/components/Filter/Filter";
import Pagination from "../../shared/components/Pagination/Pagination";

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
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

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
        const response = await getAllPost(
          currentPage.toString(),
          title,
          selectedTag
        );
        setPosts(response.posts);
        setTotalPages(response.total_page);
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };

    fetchPosts();
  }, [selectedTag, title, currentPage]);

  const columns: Column<Post>[] = [
    { key: "title", header: "Title" },
    { key: "description", header: "Description" },
    {
      key: "tags",
      header: "Tags",
      render: (row) => (
        <div className={styles.tagList}>
          {(row.tags || []).map((tag, index, arr) => (
            <span key={index} className={styles.tag}>
              {tag}
              {index < arr.length - 1 && ", "}
            </span>
          ))}
        </div>
      ),
    },
    {
      key: "actions",
      header: "Actions",
      onEdit: (row) => console.log("Edit", row),
      onDelete: (row) => console.log("Delete", row),
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
      {posts.length !== 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  );
};

export default Profile;
