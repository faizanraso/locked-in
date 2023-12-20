"use client";
import React from "react";
import { motion } from "framer-motion";

const beamColours = {
  startColour: ["#18CCFC", "#00BCD4", "#6344F5"],
  transitionColour: ["#00BCD4", "#", "#"],
  stopColour: ["#", "#", "#"],
};

export const BackgroundSVG = () => {
  {
    /* Paths for background animation -- beams */
  }
  const paths = [
    "M-380 -189L684 875",
    "M-373 -197L691 867",
    "M-366 -205L698 859",
    "M-359 -213L705 851",
    "M-352 -221L712 843",
    "M-345 -229L719 835",
    "M-338 -237L726 827",
    "M-331 -245L733 819",
    "M-324 -253L740 811",
    "M-317 -261L747 803",
    "M-310 -269L754 795",
    "M-303 -277L761 787",
    "M-296 -285L768 779",
    "M-289 -293L775 771",
    "M-282 -301L782 763",
    "M-275 -309L789 755",
    "M-268 -317L796 747",
    "M-261 -325L803 739",
    "M-254 -333L810 731",
    "M-247 -341L817 723",
    "M-240 -349L824 715",
    "M-233 -357L831 707",
    "M-226 -365L838 699",
    "M-219 -373L845 691",
    "M-212 -381L852 683",
    "M-205 -389L859 675",
    "M-198 -397L866 667",
    "M-191 -405L873 659",
    "M-184 -413L880 651",
    "M-177 -421L887 643",
    "M-170 -429L894 635",
    "M-163 -437L901 627",
    "M-156 -445L908 619",
    "M-149 -453L915 611",
    "M-142 -461L922 603",
    "M-135 -469L929 595",
    "M-128 -477L936 587",
    "M-121 -485L943 579",
    "M-114 -493L950 571",
    "M-107 -501L957 563",
    "M-100 -509L964 555",
    "M-93 -517L971 547",
    "M-86 -525L978 539",
    "M-79 -533L985 531",
    "M-72 -541L992 523",
    "M-65 -549L999 515",
    "M-58 -557L1006 507",
    "M-51 -565L1013 499",
    "M-44 -573L1020 491",
    "M-37 -581L1027 483",
  ];

  return (
    <div className="absolute  inset-0 flex h-full w-full items-center justify-center [mask-repeat:no-repeat] [mask-size:40px]">
      <svg
        className=" pointer-events-none absolute z-0 h-full w-full "
        width="100%"
        height="100%"
        viewBox="0 0 696 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-380 -189L684 875M-373 -197L691 867M-366 -205L698 859M-359 -213L705 851M-352 -221L712 843M-345 -229L719 835M-338 -237L726 827M-331 -245L733 819M-324 -253L740 811M-317 -261L747 803M-310 -269L754 795M-303 -277L761 787M-296 -285L768 779M-289 -293L775 771M-282 -301L782 763M-275 -309L789 755M-268 -317L796 747M-261 -325L803 739M-254 -333L810 731M-247 -341L817 723M-240 -349L824 715M-233 -357L831 707M-226 -365L838 699M-219 -373L845 691M-212 -381L852 683M-205 -389L859 675M-198 -397L866 667M-191 -405L873 659M-184 -413L880 651M-177 -421L887 643M-170 -429L894 635M-163 -437L901 627M-156 -445L908 619M-149 -453L915 611M-142 -461L922 603M-135 -469L929 595M-128 -477L936 587M-121 -485L943 579M-114 -493L950 571M-107 -501L957 563M-100 -509L964 555M-93 -517L971 547M-86 -525L978 539M-79 -533L985 531M-72 -541L992 523M-65 -549L999 515M-58 -557L1006 507M-51 -565L1013 499M-44 -573L1020 491M-37 -581L1027 483M-30 -589L1034 475M-23 -597L1041 467M-16 -605L1048 459M-9 -613L1055 451M-2 -621L1062 443M5 -629L1069 435M12 -637L1076 427M19 -645L1083 419"
          stroke="url(#paint0_radial_242_278)"
          strokeOpacity="0.05"
          strokeWidth="0.5"
        ></path>

        {paths.map((path, index) => (
          <motion.path
            key={index}
            d={path}
            stroke={`url(#linearGradient-${index})`}
            strokeOpacity="0.4"
            strokeWidth="0.5"
          ></motion.path>
        ))}
        <defs>
          {paths.map((path, index) => (
            <motion.linearGradient
              id={`linearGradient-${index}`}
              x1="100%"
              x2="100%"
              y1="100%"
              y2="100%"
              animate={{
                x1: ["0%", "100%"],
                x2: ["0%", "95%"],
                y1: ["0%", "100%"],
                y2: ["0%", `${93 + Math.random() * 8}%`],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                ease: "easeInOut",
                repeat: Infinity,
                delay: Math.random() * 10,
              }}
            >
              <stop stopColor="#18CCFC" stopOpacity="0"></stop>
              <stop stopColor="#18CCFC"></stop>
              <stop offset="32.5%" stopColor="#6344F5"></stop>
              <stop offset="100%" stopColor="#AE48FF" stopOpacity="0"></stop>
            </motion.linearGradient>
          ))}
          <radialGradient
            id="paint0_radial_242_278"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(352 34) rotate(90) scale(555 1560.62)"
          >
            <stop offset="0.0666667" stopColor="var(--neutral-300)"></stop>
            <stop offset="0.243243" stopColor="var(--neutral-300)"></stop>
            <stop offset="0.43594" stopColor="white" stopOpacity="0"></stop>
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};
