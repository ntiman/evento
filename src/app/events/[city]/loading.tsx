import Skeleton from "@/components/skeleton";
import SkeletonCard from "@/components/skeleton-card";

export default function Loading() {
  return (
    <div className="flex justify-center flex-wrap max-w-[1100px] mx-auto px-[20px] py-24 gap-20">
      {
        Array.from({length: 9}).map((item,i) => (
          <SkeletonCard key={i}></SkeletonCard>
        ))
      }
    </div>
  );
}
