const designTokens = {
  color: {
    black: "#000000",
    blue: "#1e50da",
    gray: "#8f8f95",
    grayDark: "#575b5f",
    grayDarker: "#323940",
    grayLight: "#ddddde",
    grayLighter: "#ececed",
    grayLightest: "#f7f7f8",
    green: "#31baa2",
    mutedBlue: "#dde9fe",
    mutedGreen: "#a4eacf",
    mutedOrange: "#ffcaa5",
    mutedPurple: "#ddcff7",
    mutedRed: "#ffc4d2",
    mutedTeal: "#c0eef6",
    mutedYellow: "#fff2b9",
    orange: "#f58b23",
    purple: "#7748d2",
    red: "#d52049",
    teal: "#10b5d0",
    utilitiesGray: "#c4c7ca",
    utilitiesModalOverlay: "#1a2631",
    white: "#ffffff",
    yellow: "#ffde52",
  },
  gradient: {
    brand: "linear-gradient(45deg, #da566c 0%, #8c4794 100%)",
    brandMuted: "linear-gradient(45deg, #edc2ca 0%, #e3cfe6 100%)",
    green: "linear-gradient(237.2deg, #4cbc88 6.74%, #329dd1 111%)",
    greenMuted: "linear-gradient(237.2deg, #d2f5e4 6.74%, #d5f1ff 111%)",
    red: "linear-gradient(45deg, #af0d1e 0%, #ff3570 100%)",
    redMuted: "linear-gradient(225deg, #ffb3b3 0%, #fd83b2 100%)",
    yellow: "linear-gradient(43.45deg, #ffb83a -2.87%, #ffe268 100%)",
    yellowMuted: "linear-gradient(43.67deg, #ffd995 -2.85%, #fff7d3 108.09%)",
    orange: "linear-gradient(47.51deg, #ff0264 -34.31%, #fddf31 111.92%)",
    orangeMuted: "linear-gradient(45.05deg, #f5bca5 -11.1%, #fff1d7 111.79%)",
    purple: "linear-gradient(225deg, #a572ff 0%, #543edd 100%)",
    purpleMuted: "linear-gradient(225deg, #eadeff 0%, #cbc3ff 100%)",
    blue: "linear-gradient(225deg, #329dd1 0%, #4f50a4 100%)",
    blueMuted: "linear-gradient(225deg, #b1e5ff 0%, #c5c6ff 100%)",
    manifold:
      "linear-gradient(272.4deg, #fe1360 -13.37%, #814eae 26.05%, #2d98cc 77.38%, #fd8745 95.25%, #fdC935 135.64%)",
  },
  shadow: {
    far:
      "0 2.767256498336792px 2.5735485553741455px rgba(24, 26, 32, 0.02),0 6.650102138519287px 6.184595108032227px rgba(24, 26, 32, 0.03),0 12.521552085876465px 11.64504337310791px rgba(24, 26, 32, 0.04),0 22.3363094329834px 20.772768020629883px rgba(24, 26, 32, 0.04),0 41.777610778808594px 38.85317611694336px rgba(24, 26, 32, 0.05),0 100px 93px rgba(24, 26, 32, 0.07)",
    near: "0 2px 8px rgba(0, 0, 0, 0.08)",
  },
  typography: {
    body: {
      fontSize: "16px",
      fontWeight: "400",
      letterSpacing: "normal",
      lineHeight: "1.01",
      textTransform: "none",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
    },
    caption: {
      fontSize: "12px",
      fontWeight: "400",
      letterSpacing: "normal",
      lineHeight: "1.14",
      textTransform: "none",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
    },
    heading: {
      fontSize: "20px",
      fontWeight: "400",
      letterSpacing: "normal",
      lineHeight: "1.02",
      textTransform: "none",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
    },
    headingExtraLarge: {
      fontSize: "32px",
      fontWeight: "500",
      letterSpacing: "normal",
      lineHeight: "0.96",
      textTransform: "none",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
    },
    headingLarge: {
      fontSize: "25px",
      fontWeight: "400",
      letterSpacing: "normal",
      lineHeight: "1.02",
      textTransform: "none",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
    },
    label: {
      fontSize: "14px",
      fontWeight: "400",
      letterSpacing: "normal",
      lineHeight: "1.04",
      textTransform: "none",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
    },
    monoBody: {
      fontSize: "14px",
      fontWeight: "400",
      letterSpacing: "normal",
      lineHeight: "1.1",
      textTransform: "none",
      fontFamily:
        "'IBM Plex Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",
    },
    monoCaption: {
      fontSize: "10px",
      fontWeight: "400",
      letterSpacing: "normal",
      lineHeight: "1.11",
      textTransform: "none",
      fontFamily:
        "'IBM Plex Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",
    },
    monoLabel: {
      fontSize: "12px",
      fontWeight: "400",
      letterSpacing: "normal",
      lineHeight: "1.14",
      textTransform: "none",
      fontFamily:
        "'IBM Plex Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",
    },
    sidebarBigTitle: {
      fontSize: "16px",
      fontWeight: "600",
      letterSpacing: "normal",
      lineHeight: "1",
      textTransform: "none",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
    },
    sidebarSmallTitle: {
      fontSize: "14px",
      fontWeight: "700",
      letterSpacing: "normal",
      lineHeight: "1",
      textTransform: "none",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
    },
    smallScreenBody: {
      fontSize: "16px",
      fontWeight: "400",
      letterSpacing: "normal",
      lineHeight: "1.07",
      textTransform: "none",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
    },
    smallScreenCaption: {
      fontSize: "13px",
      fontWeight: "400",
      letterSpacing: "normal",
      lineHeight: "1.05",
      textTransform: "none",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
    },
    smallScreenHeading: {
      fontSize: "18px",
      fontWeight: "400",
      letterSpacing: "normal",
      lineHeight: "1.04",
      textTransform: "none",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
    },
    smallScreenHeadingExtraLarge: {
      fontSize: "26px",
      fontWeight: "500",
      letterSpacing: "normal",
      lineHeight: "1.02",
      textTransform: "none",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
    },
    smallScreenHeadingLarge: {
      fontSize: "22px",
      fontWeight: "400",
      letterSpacing: "normal",
      lineHeight: "1.01",
      textTransform: "none",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
    },
    smallScreenLabel: {
      fontSize: "14px",
      fontWeight: "400",
      letterSpacing: "normal",
      lineHeight: "1.04",
      textTransform: "none",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
    },
    smallScreenSubheading: {
      fontSize: "13px",
      fontWeight: "600",
      letterSpacing: "0.03em",
      lineHeight: "1.05",
      textTransform: "uppercase",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
    },
    subheading: {
      fontSize: "13px",
      fontWeight: "600",
      letterSpacing: "0.03em",
      lineHeight: "1.05",
      textTransform: "uppercase",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
    },
    subheadingSmall: {
      fontSize: "11px",
      fontWeight: "500",
      letterSpacing: "0.04em",
      lineHeight: "1.09",
      textTransform: "uppercase",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
    },
  },
};

export default designTokens;
