const VideoTitle = ({ title, overview }) => {
  return (
    <div className="aspect-video w-screen pt-[20%] px-24 absolute text-white">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-lg py-6 w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black text-2xl py-4 px-12  rounded-lg hover:bg-white/50">
          Play
        </button>
        <button className="mx-2 text-white text-2xl bg-gray-500/30  py-4 px-12  rounded-lg">
          Overview
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
