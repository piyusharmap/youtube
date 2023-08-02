export default function ({ info }) {
  return (
    <div className="p-2 flex Witems-start gap-4">
      <h1 className="h-8 w-8 flex justify-center items-center border-2 border-blue-600 rounded-full">
        {info?.author.slice(0, 1)}
      </h1>

      <p className="w-4/5">
        <span className="mr-2 text-sm opacity-80">{info?.author}</span>
        {info?.comment}
      </p>
    </div>
  );
}
