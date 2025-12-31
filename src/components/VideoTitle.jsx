const VideoTitle = ({ title, overview }) => {
  return (
    <div className="aspect-video w-screen pt-[10%] px-6 md:px-24 absolute text-white">
      <h1 className="text-xl md:text-5xl font-bold md:pt-0 pt-[15%] pb-4">
        {title}
      </h1>
      <p className="hidden md:block text-lg py-6 w-1/4">{overview}</p>
      <div className="flex">
        <button className="bg-white text-black text-lg md:text-2xl md:py-4 md:px-12 px-6 py-2 rounded-lg hover:bg-white/50">
          Play
        </button>
        <button className="hidden md:block  mx-2 text-white text-2xl bg-gray-500/30  py-4 px-12  rounded-lg">
          More
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
