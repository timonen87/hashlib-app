import { nodeIconsLucide } from "@/shared/lib/styleUtils";
import { cn } from "@/shared/ui/utils";
import { Loader } from "lucide-react";
import dinamicIconImports from "lucide-react/dynamicIconImports";

import { forwardRef, lazy, memo, Suspense, useEffect, useState } from "react";

type ForwarderIconProps = {
  name: string;
  className?: string;
  iconColor?: string;
  onClick?: () => void;
  stroke?: string;
  strokeWidth?: number;
  id?: string;
};

export const ForwardedIconComponent = memo(
  forwardRef(
    (
      {
        name,
        className,
        iconColor,
        stroke,
        strokeWidth,
        id = "",
      }: ForwarderIconProps,
      ref,
    ) => {
      const [showFallback, setShowFallback] = useState(false);

      useEffect(() => {
        const timer = setTimeout(() => {
          setShowFallback(true);
        }, 30);

        return () => clearTimeout(timer);
      }, []);

      let TargetIcon = nodeIconsLucide[name];
      if (!TargetIcon) {
        if (!dinamicIconImports[name]) {
          TargetIcon = nodeIconsLucide["unknown"];
        } else TargetIcon = lazy(dinamicIconImports[name]);
      }

      const style = {
        strokeWidth: strokeWidth ?? 1.5,
        ...(stroke && { stroke: stroke }),
        ...(iconColor && { color: iconColor, stroke: stroke }),
      };

      if (!TargetIcon) {
        return null; // Render nothing until the icon is loaded
      }

      const fallback = showFallback ? (
        <div className={cn(className, "flex items-center justify-center")}>
          <Loader />
        </div>
      ) : (
        <div className={className}></div>
      );

      return (
        <Suspense fallback={fallback}>
          <TargetIcon
            className={className}
            style={style}
            ref={ref}
            data-testid={id ? `${id}-${name}` : `icon-${name}`}
          />
        </Suspense>
      );
    },
  ),
);

export default ForwardedIconComponent;
