export const PostPublishStatusDescription = (publish_status: number) =>
  publish_status === 0
    ? "ذخیره شده"
    : publish_status === 10
    ? "آماده انتشار"
    : publish_status === 100
    ? "منتشر شده"
    : "";

export const BookPublishStatusDescription = (publish_status: number) =>
  publish_status === 0
    ? "ذخیره شده"
    : publish_status === 10
    ? "آماده انتشار"
    : publish_status === 100
    ? "منتشر شده"
    : "";

export const ChapterPublishStatusDescription = (publish_status: number) =>
  publish_status === 0
    ? "ذخیره شده"
    : publish_status === 10
    ? "آماده انتشار"
    : publish_status === 100
    ? "منتشر شده"
    : "";
