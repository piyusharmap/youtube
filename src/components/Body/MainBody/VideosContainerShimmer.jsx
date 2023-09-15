import { VIDEO_SHIMMER_VALUE } from "../../../constant";

const ShimmerCard = () => {
  return (
    <div className="w-[30%] m-1 p-2 mb-8">
      <div className="h-48 w-full bg-blackMain/50 dark:bg-white/50 rounded-xl"></div>
      <div className="mt-2 h-8 bg-blackMain/50 dark:bg-white/50 rounded-lg"></div>
      <div className="w-1/4 mt-2 h-4 bg-blackMain/50 dark:bg-white/50 rounded-lg"></div>
    </div>
  );
};

export default function VideosContainerShimmer() {
  return (
    <div className="py-2 flex flex-wrap justify-between items-start animate-pulse">
      {new Array(VIDEO_SHIMMER_VALUE).fill(0).map((element, index) => {
        return <ShimmerCard key={index} />;
      })}
    </div>
  );
}
