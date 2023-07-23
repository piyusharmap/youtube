import { VIDEO_SHIMMER_VALUE } from "../../../constant";

const ShimmerCard = () => {
  return (
    <div className="w-full p-2 flex items-start gap-4 animate-pulse">
      <div className="h-52 w-96 bg-blackSecondary rounded-md"></div>
      <div className="w-full p-2">
        <p className="mb-2 w-1/2 p-4 bg-blackSecondary"></p>
        <p className="w-4/5 p-4 bg-blackSecondary"></p>
      </div>
    </div>
  );
};

export default function SearchShimmer() {
  return (
    <div className="w-full flex flex-col items-start gap-4 flex-grow p-2">
      {new Array(VIDEO_SHIMMER_VALUE).fill(0).map((element, index) => {
        return <ShimmerCard key={index} />;
      })}
    </div>
  );
}
