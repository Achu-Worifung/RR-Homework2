import { Label } from "@/components/ui/label";

export default function DisplayInfo(
    {
      max_val,
      min_val,
      max_name,
      min_name,
    }: { max_val: number; min_val: number; max_name: string; min_name: string }
  ){
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <div className="flex gap-4 flex-col flex-1 justify-center items-center">
        <Label className="font-bold text-2xl">Min</Label>
        <span className="flex gap-11 text-xl ">
          <Label className="text-red-500 font-bold"> {min_name}:</Label>
          <Label className="text-red-500 font-extrabold">{min_val}</Label>
        </span>
      </div>
      <div className="flex gap-4 flex-col flex-1 justify-center items-center">
          <Label  className="font-bold text-2xl">Max</Label>
        <span className="flex gap-11 text-xl ">
          <Label className="text-green-500 font-bold"> {max_name}:</Label>
          <Label className="text-green-500 font-bold">{max_val}</Label>
        </span>
      </div>
    </div>
  );
}
