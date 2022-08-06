export default function CategoryTitle({ title }: { title: string }) {
  return (
    <div className="flex h-[102px] items-center justify-center bg-black">
      <p className="text-[28px] font-bold tracking-[2px] text-white">{title}</p>
    </div>
  );
}
