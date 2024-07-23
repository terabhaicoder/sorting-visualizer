import { MAX_ANIMATION_SPEED, MNI_ANIMATION_SPEED } from "@/lib/utils";

export const Slider = ({
  min = MNI_ANIMATION_SPEED,
  max = MAX_ANIMATION_SPEED,
  step = 10,
  value,
  handleChange,
  isDisabled = false,
}: {
  min?: number;
  max?: number;
  step?: number;
  value: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled?: boolean;
}) => {
  return (
    <div className="flex gap-2 items-center justify-center">
      <span className="white">Slow</span>
      <input
        disabled={isDisabled}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-300 disabled:opacity-50"
        style={{
          background: `linear-gradient(to right, #4f46e5 ${
            ((value - min) / (max - min)) * 100
          }%, #b0b0b0 ${((value - min) / (max - min)) * 100}%)`,
        }}
      />
      <span className="white">Fast</span>
    </div>
  );
};
