import { InteractiveNode } from "./InteractiveNode";

export function TowerMap() {
  return (
    <svg
      id="svg"
      viewBox="-370 0 1600 1460"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: 1600, display: "block", flexShrink: 0 }}
    >
      <defs>
        <radialGradient id="gIsland" cx="50%" cy="35%" r="55%">
          <stop offset="0%" stopColor="#1C1712" />
          <stop offset="100%" stopColor="#0E0C09" />
        </radialGradient>
        <radialGradient id="gPeak" cx="50%" cy="60%" r="50%">
          <stop offset="0%" stopColor="#B8923E" stopOpacity=".7" />
          <stop offset="100%" stopColor="#B8923E" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="gOcclusion" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3D9A88" stopOpacity="0" />
          <stop offset="75%" stopColor="#3D9A88" stopOpacity="0" />
          <stop offset="100%" stopColor="#3D9A88" stopOpacity=".18" />
        </radialGradient>
        <linearGradient id="gFDiv" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#A9803F" stopOpacity="0" />
          <stop offset="30%" stopColor="#A9803F" stopOpacity=".35" />
          <stop offset="70%" stopColor="#A9803F" stopOpacity=".35" />
          <stop offset="100%" stopColor="#A9803F" stopOpacity="0" />
        </linearGradient>
        <filter id="fg">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" result="noise" />
          <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.6 0" />
        </filter>
      </defs>

      <g className="tower-reveal">

      {/* THE OCCLUSION — the cloaking field enveloping the island, cresting at the Cloaking Engine's floor */}
      <g opacity=".6">
        <ellipse cx="430" cy="1345" rx="852" ry="480" fill="url(#gOcclusion)" />
        <ellipse cx="430" cy="1345" rx="850" ry="480" fill="none" stroke="#3D9A88" strokeWidth="2.5" filter="url(#fg)" opacity=".35" />
        <ellipse cx="430" cy="1345" rx="850" ry="480" fill="none" stroke="#2A7060" strokeWidth="1.2" strokeDasharray="10,6" opacity=".6" />
      </g>
      {/* Label sits left of the tower footprint (outside x 190–670) and below
          the ellipse's dashed boundary there (arc stays above y~993 across
          this label's width) so neither the tower nor the arc line cross it */}
      <text x="-90" y="1030" textAnchor="middle" fontFamily="Cinzel" fontSize="11" fill="#5FA592" letterSpacing="3" opacity=".85">
        THE OCCLUSION
      </text>

      {/* ISLAND BASE — jagged rocky coastline; crest still tucks up behind the
          tower bands */}
      <path
        d="M 1308.5,1280.0 L 1310.6,1304.5 1215.9,1324.6 1193.6,1347.4 1162.7,1371.0 1095.8,1391.5 962.6,1398.7 938.2,1432.8 801.4,1437.1 673.9,1440.5 550.4,1441.7 430.0,1458.6 301.2,1453.0 201.0,1430.7 64.5,1434.6 -23.1,1416.2 -164.1,1412.5 -194.1,1384.5 -318.4,1372.9 -368.6,1350.5 -365.1,1325.1 -370.5,1302.2 -519.6,1280.0 -514.7,1253.8 -356.7,1235.4 -362.4,1210.1 -371.0,1180.6 -197.8,1174.9 -137.9,1153.4 -50.1,1135.7 53.1,1120.6 191.9,1123.3 312.2,1121.7 430.0,1095.1 554.0,1113.4 666.0,1124.7 798.7,1124.1 891.2,1141.4 970.3,1159.5 1127.7,1163.2 1150.5,1190.5 1208.9,1211.3 1210.5,1235.7 1367.9,1254.0 Z"
        fill="url(#gIsland)"
        stroke="#332C22"
        strokeWidth="1.5"
      />
      <path
        d="M 1238.2,1280.0 L 1211.6,1300.2 1215.2,1321.7 1131.0,1338.4 1029.8,1351.2 1013.6,1375.4 874.3,1380.0 763.2,1386.9 668.9,1400.2 549.1,1402.9 430.0,1413.1 301.1,1413.0 201.6,1394.9 62.6,1397.9 -43.0,1386.4 -89.7,1365.0 -188.5,1353.5 -247.8,1336.5 -325.6,1320.1 -394.8,1301.4 -307.9,1280.0 -305.0,1261.0 -271.8,1242.7 -266.5,1222.0 -168.1,1209.0 -91.8,1194.7 -56.9,1170.4 55.3,1159.8 191.7,1160.1 302.7,1148.6 430.0,1144.5 551.1,1155.1 672.2,1158.1 791.4,1164.1 895.2,1175.3 984.5,1189.4 1054.4,1205.8 1107.2,1223.6 1143.9,1242.1 1222.2,1259.5 Z"
        fill="none"
        stroke="#282217"
        strokeWidth="1"
        opacity=".5"
      />
      <path
        d="M 1035.3,1280.0 L 1042.4,1294.3 1013.6,1308.2 967.9,1321.2 931.5,1335.9 836.1,1344.3 749.4,1353.5 660.7,1364.2 545.6,1367.1 430.0,1361.5 319.5,1363.3 198.0,1364.6 102.7,1355.3 12.4,1346.1 -48.3,1333.3 -124.2,1322.5 -198.6,1310.4 -173.7,1294.1 -248.3,1280.0 -209.7,1265.0 -205.4,1249.3 -131.4,1237.0 -47.8,1226.7 34.4,1217.4 100.8,1204.3 216.8,1202.2 323.0,1199.4 430.0,1191.8 534.8,1201.1 646.9,1200.9 740.5,1208.6 862.7,1211.5 908.1,1226.7 981.7,1237.7 1025.5,1251.2 1038.7,1265.7 Z"
        fill="none"
        stroke="#201B12"
        strokeWidth="1"
        opacity=".3"
      />

      <text x="430" y="1402" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="9" fill="#5C5446" letterSpacing="3.5">
        DAKARE BAY  ·  CLOAKED ISLAND  ·  OFF THE COAST OF COMMALOIRE
      </text>

      {/* CONTINUOUS PATROL — a looping route circling the tower; back half is drawn
          under the tower bands so the loop passes visibly behind the structure */}
      <path
        className="patrol-loop"
        d="M 110,1228 A 320,80 0 0 1 430,1148 A 320,80 0 0 1 750,1228"
        fill="none"
        stroke="#B8503A"
        strokeWidth="1.5"
        strokeDasharray="14,10"
        opacity=".5"
      />

      {/* TOWER BANDS */}
      <polygon points="155,1228 705,1228 687.5,1091 172.5,1091" fill="#131313" />
      <polygon points="172.5,1091 687.5,1091 670,954 190,954" fill="#0D0D0D" />
      <polygon points="190,954 670,954 652.5,817 207.5,817" fill="#131313" />
      <polygon points="207.5,817 652.5,817 635,680 225,680" fill="#0D0D0D" />
      <polygon points="225,680 635,680 617.5,543 242.5,543" fill="#131313" />
      <polygon points="242.5,543 617.5,543 582.5,269 277.5,269" fill="#0D0D0D" />
      <polygon points="277.5,269 582.5,269 565,135 295,135" fill="#131313" />

      <polygon points="295,135 565,135 705,1228 155,1228" fill="none" stroke="#3A3A3A" strokeWidth="2" />

      {/* CONTINUOUS PATROL — front half, drawn over the tower bands so it passes in front */}
      <path
        className="patrol-loop"
        d="M 110,1228 A 320,80 0 0 0 430,1308 A 320,80 0 0 0 750,1228"
        fill="none"
        stroke="#B8503A"
        strokeWidth="1.5"
        strokeDasharray="14,10"
        opacity=".5"
      />
      <text x="430" y="1358" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="9.5" fill="#9C6C54" letterSpacing="2" opacity=".8">
        ↻ CONTINUOUS PATROL
      </text>

      {[
        [172.5, 1091, 687.5],
        [190, 954, 670],
        [207.5, 817, 652.5],
        [225, 680, 635],
        [242.5, 543, 617.5],
        [277.5, 269, 582.5],
        [295, 135, 565],
      ].map(([x1, y, x2]) => (
        <g key={y}>
          <line x1={x1} y1={y} x2={x2} y2={y} stroke="#3A3A3A" strokeWidth="1.5" />
          <line x1={x1} y1={y} x2={x2} y2={y} stroke="url(#gFDiv)" strokeWidth="1.5" />
        </g>
      ))}

      {/* PEAK CAP */}
      <polygon points="430,62 295,135 565,135" fill="#101010" stroke="#3A3A3A" strokeWidth="1.5" />
      <ellipse className="pk" cx="430" cy="100" rx="48" ry="55" fill="url(#gPeak)" filter="url(#fg)" />
      <circle className="peak-surge-outer" cx="430" cy="100" r="130" fill="url(#gPeak)" pointerEvents="none" />
      <circle className="peak-surge-core" cx="430" cy="100" r="30" fill="#F5E3A8" pointerEvents="none" />
      <polygon points="430,62 424,88 436,88" fill="#B8923E" opacity=".85" />
      <line x1="430" y1="62" x2="430" y2="90" stroke="#D8B36A" strokeWidth="1.2" opacity=".9" />

      {/* FLOOR NUMBER LABELS */}
      {[
        [138, 1165, "F1"],
        [122, 1028, "F2"],
        [108, 891, "F3"],
        [94, 754, "F4"],
        [80, 617, "F5"],
        [66, 406, "F6"],
        [38, 206, "F7"],
      ].map(([x, y, label]) => (
        <text key={label} x={x} y={y} textAnchor="end" fontFamily="Cinzel" fontSize="12" fill="#8C8C8C" letterSpacing="2">
          {label}
        </text>
      ))}

      {/* FLOOR NAME LABELS */}
      {[
        [716, 1165, "VESTIBULE"],
        [700, 1028, "BARRACKS"],
        [684, 873, "PRODUCTION"],
        [668, 754, "OPERATIONS"],
        [652, 617, "RELIQUARY"],
        [636, 406, "THRESHOLD"],
        [604, 206, "CONTROL"],
      ].map(([x, y, label]) => (
        <text key={label} x={x} y={y} fontFamily="IBM Plex Mono" fontSize="10" fill="#7E7E7E" letterSpacing="2">
          {label}
        </text>
      ))}

      {/* DRAFTING MARKS — datum line, registration crosshairs, compass rose */}
      <g opacity=".5">
        <line x1="-354" y1="135" x2="-354" y2="1228" stroke="#5C5C5C" strokeWidth="1" />
        {[135, 269, 543, 680, 817, 954, 1091, 1228].map((y) => (
          <line key={y} x1="-358" y1={y} x2="-350" y2={y} stroke="#5C5C5C" strokeWidth="1" />
        ))}
      </g>

      <g opacity=".35">
        <line x1="-344" y1="40" x2="-326" y2="40" stroke="#5C5C5C" strokeWidth="1" />
        <line x1="-335" y1="31" x2="-335" y2="49" stroke="#5C5C5C" strokeWidth="1" />
        <circle cx="-335" cy="40" r="6" fill="none" stroke="#5C5C5C" strokeWidth="1" />

        <line x1="1186" y1="40" x2="1204" y2="40" stroke="#5C5C5C" strokeWidth="1" />
        <line x1="1195" y1="31" x2="1195" y2="49" stroke="#5C5C5C" strokeWidth="1" />
        <circle cx="1195" cy="40" r="6" fill="none" stroke="#5C5C5C" strokeWidth="1" />

        <line x1="1186" y1="1420" x2="1204" y2="1420" stroke="#5C5C5C" strokeWidth="1" />
        <line x1="1195" y1="1411" x2="1195" y2="1429" stroke="#5C5C5C" strokeWidth="1" />
        <circle cx="1195" cy="1420" r="6" fill="none" stroke="#5C5C5C" strokeWidth="1" />
      </g>

      <g transform="translate(-295,1412)" opacity=".55">
        <circle r="20" fill="none" stroke="#8C6A35" strokeWidth="1" />
        <circle r="1.6" fill="#8C6A35" />
        <line x1="0" y1="-20" x2="0" y2="20" stroke="#8C6A35" strokeWidth=".75" />
        <line x1="-20" y1="0" x2="20" y2="0" stroke="#8C6A35" strokeWidth=".75" />
        <polygon points="0,-20 -4,-9 0,-13 4,-9" fill="#B8923E" />
        <text y="-25" textAnchor="middle" fontFamily="Cinzel" fontSize="10.5" fill="#B8923E" letterSpacing="1">N</text>
      </g>

      {/* FLOOR 1 */}
      <InteractiveNode id="n-reception" badge={{ x: 394, y: 1128 }}>
        <polygon points="183,1112 410,1112 410,1207 171,1207" fill="#1C1916" stroke="#5C5648" strokeWidth="1.5" className="nr" />
        <circle cx="294" cy="1140" r="6" fill="#857E70" opacity=".8" className="nc" />
        <text x="294" y="1168" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="11.5" fill="#A29A8C" letterSpacing="1">RECEPTION</text>
        <text x="294" y="1187" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="10.5" fill="#84806E">HALL</text>
      </InteractiveNode>

      <InteractiveNode id="n-dorm" badge={{ x: 661, y: 1128 }}>
        <polygon points="450,1112 677,1112 689,1207 450,1207" fill="#1C1916" stroke="#5C5648" strokeWidth="1.5" className="nr" />
        <circle cx="566" cy="1140" r="6" fill="#857E70" opacity=".8" className="nc" />
        <text x="566" y="1168" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="11.5" fill="#A29A8C" letterSpacing="1">INITIATE</text>
        <text x="566" y="1187" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="10.5" fill="#84806E">DORMITORIES</text>
      </InteractiveNode>

      <InteractiveNode id="n-overseer-1" badge={{ x: 447, y: 1095 }} pulse>
        <polygon points="430,1091 415,1109 430,1127 445,1109" fill="#170B1E" stroke="#8B5CC7" strokeWidth="1.8" className="nr" />
        <circle cx="430" cy="1109" r="5" fill="#8B5CC7" opacity=".9" className="nc" />
      </InteractiveNode>

      {/* FLOOR 2 */}
      <InteractiveNode id="n-armoury" badge={{ x: 325, y: 991 }}>
        <polygon points="200,975 341,975 341,1070 188,1070" fill="#171410" stroke="#7A5C30" strokeWidth="1.5" className="nr" />
        <circle cx="268" cy="1005" r="6" fill="#A9803F" opacity=".8" className="nc" />
        <text x="268" y="1038" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="11.5" fill="#C4A063" letterSpacing="1">ARMOURY</text>
      </InteractiveNode>

      <InteractiveNode id="n-theatre" badge={{ x: 482, y: 991 }}>
        <rect x="363" y="975" width="135" height="95" rx="0" fill="#171410" stroke="#7A5C30" strokeWidth="1.5" className="nr" />
        <circle cx="430.5" cy="1003" r="6" fill="#A9803F" opacity=".8" className="nc" />
        <text x="430.5" y="1031" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="11.5" fill="#C4A063" letterSpacing="1">BRIEFING</text>
        <text x="430.5" y="1050" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="10.5" fill="#A17E48">THEATRE</text>
      </InteractiveNode>

      <InteractiveNode id="n-veteran" badge={{ x: 644, y: 991 }}>
        <polygon points="520,975 660,975 672,1070 520,1070" fill="#1C1916" stroke="#5C5648" strokeWidth="1.5" className="nr" />
        <circle cx="592" cy="1003" r="6" fill="#857E70" opacity=".8" className="nc" />
        <text x="592" y="1031" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="11.5" fill="#A29A8C" letterSpacing="1">VETERAN</text>
        <text x="592" y="1050" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="10.5" fill="#84806E">QUARTERS</text>
      </InteractiveNode>

      <InteractiveNode id="n-sergeant" badge={{ x: 447, y: 958 }} pulse>
        <polygon points="430,954 415,972 430,990 445,972" fill="#170B1E" stroke="#8B5CC7" strokeWidth="1.8" className="nr" />
        <circle cx="430" cy="972" r="5" fill="#8B5CC7" opacity=".9" className="nc" />
      </InteractiveNode>

      {/* FLOOR 3 — PRODUCTION */}
      <InteractiveNode id="n-cloak" badge={{ x: 396, y: 854 }}>
        <polygon points="218,838 412,838 412,933 206,933" fill="#0E1E1A" stroke="#2A7060" strokeWidth="1.5" className="nr" />
        <circle cx="312" cy="866" r="6" fill="#3D9A88" opacity=".8" className="nc" />
        <text x="312" y="894" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="11.5" fill="#5FA592" letterSpacing="1">Occlusion</text>
        <text x="312" y="913" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="10.5" fill="#3E8272">ENGINE</text>
      </InteractiveNode>

      <InteractiveNode id="n-workshop" badge={{ x: 626, y: 854 }}>
        <polygon points="448,838 642,838 654,933 448,933" fill="#171410" stroke="#7A5C30" strokeWidth="1.5" className="nr" />
        <circle cx="548" cy="866" r="6" fill="#A9803F" opacity=".8" className="nc" />
        <text x="548" y="894" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="11.5" fill="#C4A063" letterSpacing="1">LITHEAN</text>
        <text x="548" y="913" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="10.5" fill="#A17E48">WORKSHOP</text>
      </InteractiveNode>

      <InteractiveNode id="n-overseer-3" badge={{ x: 447, y: 821 }} pulse>
        <polygon points="430,817 415,835 430,853 445,835" fill="#170B1E" stroke="#8B5CC7" strokeWidth="1.8" className="nr" />
        <circle cx="430" cy="835" r="5" fill="#8B5CC7" opacity=".9" className="nc" />
      </InteractiveNode>

      {/* FLOOR 4 — OPERATIONS */}
      <InteractiveNode id="n-comms" badge={{ x: 398, y: 717 }}>
        <polygon points="235,701 414,701 414,796 223,796" fill="#1C1916" stroke="#5C5648" strokeWidth="1.5" className="nr" />
        <circle cx="322" cy="731" r="6" fill="#857E70" opacity=".8" className="nc" />
        <text x="322" y="764" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="11.5" fill="#A29A8C" letterSpacing="1">COMMS WEB</text>
      </InteractiveNode>

      <InteractiveNode id="n-docking" badge={{ x: 609, y: 717 }}>
        <polygon points="446,701 625,701 637,796 446,796" fill="#1C1916" stroke="#5C5648" strokeWidth="1.5" className="nr" />
        <circle cx="538" cy="729" r="6" fill="#857E70" opacity=".8" className="nc" />
        <text x="538" y="757" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="11.5" fill="#A29A8C" letterSpacing="1">EUCLID</text>
        <text x="538" y="776" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="10.5" fill="#84806E">DOCKING</text>
      </InteractiveNode>

      <InteractiveNode id="n-overseer-4" badge={{ x: 447, y: 684 }} pulse>
        <polygon points="430,680 415,698 430,716 445,698" fill="#170B1E" stroke="#8B5CC7" strokeWidth="1.8" className="nr" />
        <circle cx="430" cy="698" r="5" fill="#8B5CC7" opacity=".9" className="nc" />
      </InteractiveNode>

      {/* FLOOR 5 — RELIQUARY */}
      <InteractiveNode id="n-trace" badge={{ x: 605, y: 566 }}>
        <polygon points="246,556 614,556 628,668 232,668" fill="#171410" stroke="#7A5C30" strokeWidth="2" className="nr" />
        <circle cx="430" cy="577" r="6" fill="#A9803F" opacity=".8" className="nc" />
        <text x="430" y="627" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="12.5" fill="#C4A063" letterSpacing="2">HALL OF THE</text>
        <text x="430" y="648" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="11.5" fill="#A17E48" letterSpacing="1">TRACE EVIDENT</text>
      </InteractiveNode>

      <InteractiveNode id="n-keeper" badge={{ x: 447, y: 547 }} pulse>
        <polygon points="430,543 415,561 430,579 445,561" fill="#170B1E" stroke="#8B5CC7" strokeWidth="1.8" className="nr" />
        <circle cx="430" cy="561" r="5" fill="#8B5CC7" opacity=".9" className="nc" />
      </InteractiveNode>

      {/* FLOOR 6 — THRESHOLD (extended: absorbs the floor above) */}
      <InteractiveNode id="n-strand" badge={{ x: 562, y: 335 }}>
        <polygon points="284,321 576,321 598,491 262,491" fill="#0E1E1A" stroke="#2A7060" strokeWidth="2" className="nr" />
        <circle cx="430" cy="376" r="7" fill="#3D9A88" opacity=".8" className="nc" />
        <text x="430" y="419" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="12.5" fill="#5FA592" letterSpacing="2">STRAND</text>
        <text x="430" y="440" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="11.5" fill="#3E8272" letterSpacing="1">DIVIDER</text>
      </InteractiveNode>

      <InteractiveNode id="n-overseer-6" badge={{ x: 447, y: 273 }} pulse>
        <polygon points="430,269 415,287 430,305 445,287" fill="#170B1E" stroke="#8B5CC7" strokeWidth="1.8" className="nr" />
        <circle cx="430" cy="287" r="5" fill="#8B5CC7" opacity=".9" className="nc" />
      </InteractiveNode>

      {/* FLOOR 7 — final boss room: its own heavier treatment (radiating
          aura rings + a breathing core glow) so it reads a tier above the
          mid-tower overseer encounters rather than just another pulse marker */}
      <InteractiveNode id="n-precipice" badge={{ x: 539, y: 171 }}>
        <circle className="boss-aura" cx="430" cy="202" r="46" fill="none" stroke="#B8923E" strokeWidth="1.5" />
        <circle className="boss-aura boss-aura-2" cx="430" cy="202" r="46" fill="none" stroke="#E8C878" strokeWidth="1" />
        <polygon points="305,155 555,155 567,250 293,250" fill="#1A1410" stroke="#B8923E" strokeWidth="2.5" className="nr boss-frame" filter="url(#fg)" />
        <circle cx="430" cy="180" r="9" fill="#B8923E" opacity=".9" className="nc boss-core" />
        <text x="430" y="216" textAnchor="middle" fontFamily="Cinzel" fontSize="15.5" fill="#E8C878" letterSpacing="2">EXECUTORS</text>
        <text x="430" y="234" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="10.5" fill="#C7A268" letterSpacing="1.5">PRECIPICE</text>
      </InteractiveNode>

      {/* Document texture: paper grain, non-interactive */}
      <rect x="-370" y="0" width="1600" height="1460" filter="url(#grain)" opacity=".05" pointerEvents="none" />

      </g>
    </svg>
  );
}
