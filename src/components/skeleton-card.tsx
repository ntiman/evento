import Skeleton from "./skeleton";

export default function SkeletonCard() {
  return (
    <div className="space-y-4">
        <Skeleton className="h-12 w-12 rounded-full"></Skeleton>
        <Skeleton className="h-4 w-[250px]"></Skeleton>
        <Skeleton className="h-4 w-[250px]"></Skeleton>
    </div>
  )
}
