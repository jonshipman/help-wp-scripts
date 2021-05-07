export function Image(props) {
  return (
    <img
      className="absolute top-0 left-0 w-100 h-100 object-cover"
      {...props}
    />
  );
}

export default Image;
