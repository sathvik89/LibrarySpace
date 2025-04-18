export default function Book({ title, description, location, imageURL }) {
  return (
    <div>
      <h2>{title}</h2>
      <img
        style={{
          width: "100px",
          height: "100px",
        }}
        src={imageURL}
        alt={title}
      />
      <p>{description}</p>
      <h4>{location}</h4>
    </div>
  );
}
