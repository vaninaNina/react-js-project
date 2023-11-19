import "../createNft/create.css";

const Create = () => {
  return (
    <div className="container">
      <h2>Create NFT post</h2>
      <form>
        <label forHtml="title">Title:</label>
        <input type="text" id="title" name="title" required />

        <label forHtml="description">Description:</label>
        <textarea
          id="description"
          name="description"
          rows="4"
          required
        ></textarea>

        <label forHtml="price">Price:</label>
        <input type="text" id="price" name="price" required />

        <label forHtml="releaseDate">Release Date:</label>
        <input type="date" id="releaseDate" name="releaseDate" required />

        <label forHtml="author">Author:</label>
        <input type="text" id="author" name="author" required />

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Create;
