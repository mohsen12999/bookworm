export const PostWriteStatusDescription = (publish_status: number) =>
  publish_status === 0
    ? "ذخیره شده"
    : publish_status === 10
    ? "اتمام نوشته"
    : publish_status === 40
    ? "تغییر کرده"
    : publish_status === 50
    ? "دارای نقص"
    : publish_status === 70
    ? "در حال بررسی"
    : publish_status === 100
    ? "منتشر شده"
    : "";

export const BookWriteStatusDescription = (publish_status: number) =>
  publish_status === 0
    ? "ذخیره شده"
    : publish_status === 10
    ? "اتمام نوشته"
    : publish_status === 40
    ? "تغییر کرده"
    : publish_status === 50
    ? "دارای نقص"
    : publish_status === 70
    ? "در حال بررسی"
    : publish_status === 100
    ? "منتشر شده"
    : "";

export const ChapterWriteStatusDescription = (publish_status: number) =>
  publish_status === 0
    ? "ذخیره شده"
    : publish_status === 10
    ? "اتمام نوشته"
    : publish_status === 40
    ? "تغییر کرده"
    : publish_status === 50
    ? "دارای نقص"
    : publish_status === 70
    ? "در حال بررسی"
    : publish_status === 100
    ? "منتشر شده"
    : "";
