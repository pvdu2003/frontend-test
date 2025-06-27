import api from "../axios/axiosInstance";

interface PostPayload {
  title: string;
  description: string;
  tags: string[];
}

export const getAllPost = async (
  page?: string,
  title?: string,
  tags?: string
) => {
  try {
    const params: Record<string, string> = {};

    if (page?.trim()) {
      params.page = page.trim();
    }

    if (title?.trim()) {
      params.title = title.trim();
    }

    if (tags?.trim()) {
      params.tags = tags.trim();
    }
    const response = await api.get("/posts", {
      params,
    });

    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw error.response?.data || { message: "Server error" };
  }
};
export const getAllTags = async () => {
  try {
    const response = await api.get("/posts/tags");

    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw error.response?.data || { message: "Server error" };
  }
};
export const createPost = async (data: PostPayload) => {
  const response = await api.post("/posts", data);
  return response.data;
};

export const updatePost = async (id: string, data: PostPayload) => {
  const response = await api.patch(`/posts/${id}`, data);
  return response.data;
};

export const deletePost = async (id: string) => {
  const response = await api.delete(`/posts/${id}`);
  return response.data;
};
