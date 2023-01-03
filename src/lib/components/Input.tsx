export default function Input({
  htmlFor,
  labelTitle,
  errors,
  touched,
  ...props
}) {
  return (
    <div className="flex flex-col gap-[9px]">
      <div className="flex justify-between">
        <label
          htmlFor={htmlFor}
          className={`text-[12px] font-bold leading-[-0.21px] ${
            errors && touched ? 'text-[#CD2C2C]' : 'text-[#000]'
          }`}
        >
          {labelTitle}
        </label>
        {errors && touched && (
          <p className="text-[12px] font-bold text-[#CD2C2C]">{errors}</p>
        )}
      </div>
      <input
        className={`h-[32px] w-[full] rounded-[8px] border-[1px] border-[#CFCFCF]  py-[25px] pl-[24px] text-[14px] font-bold tracking-[-0.25px]  ${
          errors
            ? 'focus:border-[#CD2C2C] focus:outline-none active:border-[#CD2C2C]'
            : 'focus:border-[#D87D4A] focus:outline-none active:border-[#D87D4A]'
        }`}
        {...props}
      />
    </div>
  );
}
