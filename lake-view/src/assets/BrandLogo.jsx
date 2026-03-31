import logo160 from "./images/optimized/logo/header-logo-160.png";
import logo320 from "./images/optimized/logo/header-logo-320.png";

export function LakeViewCafeLogo({
  width = 60,
  height,
  className = "",
  alt = "Lake View Cafe Logo",
  ...props
}) {
  const resolvedWidth = Number(width) || 60;
  const resolvedHeight = height ?? Math.round((resolvedWidth * 223) / 320);

  return (
    <img
      src={logo320}
      srcSet={`${logo160} 160w, ${logo320} 320w`}
      sizes={`${resolvedWidth}px`}
      width={resolvedWidth}
      height={resolvedHeight}
      alt={alt}
      loading="eager"
      decoding="async"
      fetchPriority="high"
      className={className}
      {...props}
    />
  );
}

export default LakeViewCafeLogo;
