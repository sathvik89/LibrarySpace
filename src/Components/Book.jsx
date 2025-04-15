export default function Book({ title, description, location, imageURL }) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={imageURL} alt={title} />
      <p>{description}</p>
      <h4>{location}</h4>
    </div>
  );
}
