const SearchBar = () => {
  return (
    <div className="bg-black w-1/2 p-4 m-auto ">
      <form className="flex gap-5">
        <input
          type="text"
          placeholder="serach  about your movies"
          className="py-2 px-4 bg-white w-3/4"
        />
        <button className="py-2 px-4 bg-red-700 text-white w-1/4">
          search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
