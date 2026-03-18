import brandLogo from "../assets/images/To_Use/brandLogo.svg";

export function LakeViewCafeLogo({
  width = 50,
  height,
  className = "",
  alt = "Lake View Café Logo",
  ...props
}) {
  return (
    <img
      src={brandLogo}
      width={width}
      height={height}
      alt={alt}
      className={className}
      {...props}
    />
  );
}

export default LakeViewCafeLogo;
