import React from "react";
import styles from "./FeatureItem.module.css";
import IconButton from "../IconButton/IconButton";

interface FeatureItemProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  title,
  description,
  icon,
}) => (
  <div className={styles.card}>
    <img className={styles.featureImage} src={icon} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <IconButton text="Learn More" />
  </div>
);

export default FeatureItem;
