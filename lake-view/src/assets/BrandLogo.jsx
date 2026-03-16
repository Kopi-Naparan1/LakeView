import brandLogo from "../../../IMAGES/brandLogo.svg";

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
