import api from "../axios/axiosInstance";

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
