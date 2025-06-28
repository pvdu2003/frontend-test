import React, { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import type { Column } from "../../shared/components/Table/Table";
import Table from "../../shared/components/Table/Table";
import {
  createPost,
  deletePost,
  getAllPost,
  getAllTags,
  updatePost,
} from "../../services/profile.service";
import Filter from "../../shared/components/Filter/Filter";
import Pagination from "../../shared/components/Pagination/Pagination";
import Popup from "../../shared/components/Popup/Popup";
import PostForm from "../../shared/components/PostForm/PostForm";
import Button from "../../shared/components/Button/Button";

export interface Post {
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
  const [pageSize, setPageSize] = useState(10);
  const [loading, setLoading] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [postToDelete, setPostToDelete] = useState<Post | null>(null);

  const handleEdit = (post: Post) => {
    setEditingPost(post);
    setIsPopupOpen(true);
  };

  const handleAdd = () => {
    setEditingPost(null);
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
    setEditingPost(null);
  };
  const handleDeleteClick = (post: Post) => {
    setPostToDelete(post);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = async () => {
    if (!postToDelete) return;
    try {
      await deletePost(postToDelete.id);
      setShowDeleteConfirm(false);
      setPostToDelete(null);
      fetchPosts();
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  const fetchTags = async () => {
    try {
      const response = await getAllTags();
      setTags(response);
    } catch (err) {
      console.error("Error fetching tags:", err);
    }
  };

  const fetchPosts = React.useCallback(async () => {
    setLoading(true);
    try {
      const response = await getAllPost(
        currentPage.toString(),
        title,
        selectedTag
      );
      setPosts(response.posts);
      setTotalPages(response.total_page);
      setPageSize(response.page_size);
    } catch (err) {
      console.error("Error fetching posts:", err);
    } finally {
      setLoading(false);
    }
  }, [currentPage, title, selectedTag]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const columns: Column<Post>[] = [
    { key: "title", header: "Title" },
    { key: "description", header: "Description" },
    {
      key: "tags",
      header: "Tags",
      render: (row) => (
        <div className={styles.tagList}>
          {(row.tags || []).map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      ),
    },
    {
      key: "actions",
      header: "Actions",
      onEdit: (row) => handleEdit(row),
      onDelete: (row) => handleDeleteClick(row),
    },
  ];

  useEffect(() => {
    fetchTags();
  }, []);

  return (
    <div className={styles.profile}>
      <h2>Post Management</h2>
      <Button text="Add Post" onClick={handleAdd} />
      <Filter
        title={title}
        tag={selectedTag}
        tags={tags}
        onTitleChange={(val) => setTitle(val)}
        onTagChange={(val) => setSelectedTag(val)}
      />
      {loading ? (
        <div className={styles.loading}>Loading...</div>
      ) : (
        <Table
          columns={columns}
          data={posts}
          currentPage={currentPage}
          pageSize={pageSize}
        />
      )}

      {posts.length !== 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
      <Popup
        isOpen={isPopupOpen}
        onClose={handlePopupClose}
        title={editingPost ? "Edit Post" : "Add Post"}
      >
        <PostForm
          post={editingPost}
          onSubmit={async (formData) => {
            if (editingPost) {
              await updatePost(editingPost.id, formData);
            } else {
              await createPost(formData);
            }
            handlePopupClose();
            fetchPosts();
          }}
        />
      </Popup>
      <Popup
        isOpen={showDeleteConfirm}
        onClose={() => {
          setShowDeleteConfirm(false);
          setPostToDelete(null);
        }}
        title="Confirm Delete"
      >
        <p>Are you sure you want to delete post {postToDelete?.title}?</p>
        <div className={styles.popupActions}>
          <Button onClick={confirmDelete} text="Yes, Delete" />
          <Button
            onClick={() => {
              setShowDeleteConfirm(false);
              setPostToDelete(null);
            }}
            text="Cancel"
            variant="secondary"
          ></Button>
        </div>
      </Popup>
    </div>
  );
};

export default Profile;
