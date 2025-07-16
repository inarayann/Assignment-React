export const StepAnimateText: React.FC<any> = ({
  text,
  animationClass,
  delay = 0.6,
}) => {
  return (
    <span>
      {text.split("").map((char:any, index:number) => (
        <span
          key={index}
          className={animationClass}
          style={{
            animationDelay: `${index * delay}s`,
            WebkitAnimationDelay: `${index * delay}s`,
            display: "inline-block",
          }}
        >
           {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};