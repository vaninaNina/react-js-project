import "../createNft/create.css";

const Create = () => {
  const createNftSubmitHandler = (e) => {
    e.preventDefault();

    const { title, description, price, releaseDate, author, imageUrl } =
      Object.fromEntries(new FormData(e.currentTarget));
  };

  return (
    <div className="container">
      <h2>Create NFT post</h2>
      <form>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" required />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          rows="4"
          required
        ></textarea>

        <label htmlFor="price">Price:</label>
        <input type="text" id="price" name="price" required />

        <label htmlFor="releaseDate">Release Date:</label>
        <input type="date" id="releaseDate" name="releaseDate" required />

        <label htmlFor="author">Author:</label>
        <input type="text" id="author" name="author" required />

        <label htmlFor="nft-img">Image:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          placeholder="Upload a photo..."
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Create;
