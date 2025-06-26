import React from "react";
import styles from "./Filter.module.css";

interface FilterProps {
  title: string;
  tag: string;
  tags: string[];
  onTitleChange: (val: string) => void;
  onTagChange: (val: string) => void;
}

const Filter: React.FC<FilterProps> = ({
  title,
  tag,
  tags,
  onTitleChange,
  onTagChange,
}) => {
  return (
    <div className={styles.filters}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <select
        value={tag}
        onChange={(e) => onTagChange(e.target.value)}
        title="Tags"
      >
        <option value="">All Tags</option>
        {tags.map((t, index) => (
          <option key={index} value={t}>
            {t}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
