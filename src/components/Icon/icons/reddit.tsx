import React from 'react';

const redditIcon = (
    fill: string,
    size: number,
    style?: React.CSSProperties,
) => (
    <svg
        aria-hidden="true"
        data-testid="test-icon"
        fill="none"
        height={size}
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
        style={style}
    >
        <title>reddit icon</title>
        <path
            d="m2315,5109c-800,-83 -1501,-518 -1927,-1196c-604,-960 -491,-2230 272,-3065c423,-463 951,-740 1585,-830c118,-17 511,-16 635,0c579,80 1097,337 1491,739c130,132 157,163 243,277c256,341 423,757 488,1211c17,118 17,512 0,630c-43,303 -122,561 -247,814c-134,268 -270,459 -483,674c-395,400 -889,649 -1457,733c-123,18 -478,26 -600,13zm1435,-1037c99,-50 147,-140 137,-259c-9,-112 -80,-196 -194,-229c-143,-42 -300,59 -328,209c-4,20 -10,37 -14,37c-3,0 -121,25 -261,55c-140,30 -262,55 -270,55c-12,0 -33,-84 -98,-387c-45,-214 -82,-394 -82,-400c0,-9 18,-13 58,-13c80,0 247,-25 361,-54c192,-49 380,-128 514,-217l58,-39l50,35c127,87 302,87 424,1c104,-74 158,-178 158,-306c0,-127 -55,-234 -160,-307l-53,-36l0,-107c0,-74 -6,-131 -20,-186c-109,-425 -584,-758 -1198,-839c-142,-19 -404,-19 -543,0c-537,71 -975,337 -1146,695c-52,110 -65,167 -69,310l-4,135l-34,17c-53,27 -132,121 -156,186c-18,47 -21,72 -18,147c5,111 27,164 99,240c71,75 140,107 245,113c96,5 158,-12 234,-63l50,-34l53,36c220,149 620,272 883,273c37,0 65,5 71,13c6,6 52,212 102,457c97,465 101,480 151,480c10,0 156,-29 325,-65l306,-66l46,51c92,102 202,124 323,62z"
            fill={fill}
        />
        <path id="svg_3" d="m1883,2544c-61,-22 -127,-85 -153,-145c-26,-63 -25,-162 4,-220c22,-47 78,-103 125,-125c58,-29 157,-30 220,-4c90,39 161,144 161,237c0,97 -60,197 -143,241c-60,31 -154,38 -214,16z"/>
   <path id="svg_4" d="m3071,2548c-108,-31 -191,-143 -191,-259c0,-95 71,-200 161,-239c63,-26 162,-25 220,4c47,22 103,78 125,125c29,58 30,157 4,220c-52,120 -192,186 -319,149z"/>
   <path id="svg_5" d="m1936,1689c-40,-32 -36,-73 14,-119c173,-160 589,-222 930,-139c103,25 230,84 288,134c38,33 43,42 40,73c-2,24 -11,41 -29,55c-32,23 -52,18 -106,-25c-145,-118 -468,-167 -745,-114c-128,25 -204,57 -307,131c-41,30 -51,31 -85,4z"/>

    </svg>
);
export default redditIcon;
