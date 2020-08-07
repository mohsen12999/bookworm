export const publishStatusDescription = (publish_status: number) =>
  publish_status === 0
    ? "ذخیره شده"
    : publish_status === 10
    ? "آماده انتشار"
    : publish_status === 100
    ? "منتشر شده"
    : "";
