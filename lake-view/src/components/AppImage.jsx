export default function AppImage({
  loading = "lazy",
  decoding = "async",
  fetchPriority,
  sizes,
  srcSet,
  width,
  height,
  ...props
}) {
  return (
    <img
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      sizes={sizes}
      srcSet={srcSet}
      width={width}
      height={height}
      {...props}
    />
  );
}
