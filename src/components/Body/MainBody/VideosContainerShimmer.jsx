import { VIDEO_SHIMMER_VALUE } from "../../../constant";

const ShimmerCard = () => {
  return (
    <div className="h-52 w-1/4 m-1 p-2 mb-8 rounded-md">
      <div className="h-40 w-full bg-blackSecondary"></div>
      <div className="mt-2 h-6 bg-blackSecondary"></div>
      <div className="mt-1 h-4 bg-blackSecondary"></div>
    </div>
  );
};

export default function VideosContainerShimmer() {
  return (
    <div className="py-2 flex flex-wrap justify-around items-start animate-pulse">
      {new Array(VIDEO_SHIMMER_VALUE).fill(0).map((element, index) => {
        return <ShimmerCard key={index} />;
      })}
    </div>
  );
}
