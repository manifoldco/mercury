/**
 * This code was generated by Diez version 10.3.0.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { Color, DropShadow, File, Font, GradientStop, Image, LinearGradient, Point2D, Typograph } from "@diez/prefabs";

const componentsColors = {
    gray: Color.rgba(143, 143, 149, 1),
    red: Color.rgba(213, 32, 73, 1),
    white: Color.rgba(255, 255, 255, 1),
    grayDarker: Color.rgba(50, 57, 64, 1),
    grayDark: Color.rgba(87, 91, 95, 1),
    grayLightest: Color.rgba(247, 247, 248, 1),
    green: Color.rgba(49, 186, 162, 1),
    grayLight: Color.rgba(221, 221, 222, 1),
    yellow: Color.rgba(255, 222, 82, 1)
};

const componentsGradients = {
    gradientBlue: new LinearGradient({ stops: [GradientStop.make(0, Color.rgba(50, 157, 209, 1)), GradientStop.make(1, Color.rgba(79, 80, 164, 1))], start: Point2D.make(0.5, -0.5), end: Point2D.make(-0.5, 0.5) }),
    gradientGreen: new LinearGradient({ stops: [GradientStop.make(0, Color.rgba(76, 188, 136, 1)), GradientStop.make(1, Color.rgba(50, 157, 209, 1))], start: Point2D.make(0.821016851389819, -0.105676656843359), end: Point2D.make(-0.390336415164722, 0.674996301605858) })
};

const componentsShadows = {
    shadowNear: new DropShadow({ offset: Point2D.make(0, 2), radius: 8, color: Color.rgba(0, 0, 0, 0.07999999821186066) }),
    shadowFar: new DropShadow({ offset: Point2D.make(0, 6), radius: 10, color: Color.rgba(0, 0, 0, 0.15000000596046448) })
};

export const componentsFonts = {
    SfProText: {
        Regular: Font.fromFile("assets/Components.figma.contents/fonts/SFProText-Regular.otf")
    }
};

const componentsTypography = {
    headingLarge: new Typograph({ letterSpacing: -0.3125, fontSize: 25, lineHeight: 29.296875, color: Color.rgba(0, 0, 0, 1), font: componentsFonts.SfProText.Regular }),
    body: new Typograph({ letterSpacing: 0, fontSize: 16, lineHeight: 18.75, color: Color.rgba(87, 91, 95, 1), font: componentsFonts.SfProText.Regular }),
    label: new Typograph({ letterSpacing: 0, fontSize: 14, lineHeight: 16.40625, color: Color.rgba(247, 247, 248, 1), font: componentsFonts.SfProText.Regular }),
    caption: new Typograph({ letterSpacing: 0, fontSize: 12, lineHeight: 14.0625, color: Color.rgba(255, 255, 255, 1), font: componentsFonts.SfProText.Regular })
};

export const componentsComponentsFiles = {
    arrowLeft: new File({ src: "assets/Components.figma.contents/components/ArrowLeft.png" }),
    arrowLeft2x: new File({ src: "assets/Components.figma.contents/components/ArrowLeft@2x.png" }),
    arrowLeft3x: new File({ src: "assets/Components.figma.contents/components/ArrowLeft@3x.png" }),
    arrowLeft4x: new File({ src: "assets/Components.figma.contents/components/ArrowLeft@4x.png" }),
    arrowRight: new File({ src: "assets/Components.figma.contents/components/ArrowRight.png" }),
    arrowRight2x: new File({ src: "assets/Components.figma.contents/components/ArrowRight@2x.png" }),
    arrowRight3x: new File({ src: "assets/Components.figma.contents/components/ArrowRight@3x.png" }),
    arrowRight4x: new File({ src: "assets/Components.figma.contents/components/ArrowRight@4x.png" }),
    buttonWhiteDefault: new File({ src: "assets/Components.figma.contents/components/ButtonWhiteDefault.png" }),
    buttonWhiteDefault2x: new File({ src: "assets/Components.figma.contents/components/ButtonWhiteDefault@2x.png" }),
    buttonWhiteDefault3x: new File({ src: "assets/Components.figma.contents/components/ButtonWhiteDefault@3x.png" }),
    buttonWhiteDefault4x: new File({ src: "assets/Components.figma.contents/components/ButtonWhiteDefault@4x.png" }),
    buttonDisabledDefault: new File({ src: "assets/Components.figma.contents/components/ButtonDisabledDefault.png" }),
    buttonDisabledDefault2x: new File({ src: "assets/Components.figma.contents/components/ButtonDisabledDefault@2x.png" }),
    buttonDisabledDefault3x: new File({ src: "assets/Components.figma.contents/components/ButtonDisabledDefault@3x.png" }),
    buttonDisabledDefault4x: new File({ src: "assets/Components.figma.contents/components/ButtonDisabledDefault@4x.png" }),
    buttonDisabledFocus: new File({ src: "assets/Components.figma.contents/components/ButtonDisabledFocus.png" }),
    buttonDisabledFocus2x: new File({ src: "assets/Components.figma.contents/components/ButtonDisabledFocus@2x.png" }),
    buttonDisabledFocus3x: new File({ src: "assets/Components.figma.contents/components/ButtonDisabledFocus@3x.png" }),
    buttonDisabledFocus4x: new File({ src: "assets/Components.figma.contents/components/ButtonDisabledFocus@4x.png" }),
    buttonDisabledHover: new File({ src: "assets/Components.figma.contents/components/ButtonDisabledHover.png" }),
    buttonDisabledHover2x: new File({ src: "assets/Components.figma.contents/components/ButtonDisabledHover@2x.png" }),
    buttonDisabledHover3x: new File({ src: "assets/Components.figma.contents/components/ButtonDisabledHover@3x.png" }),
    buttonDisabledHover4x: new File({ src: "assets/Components.figma.contents/components/ButtonDisabledHover@4x.png" }),
    buttonDangerDefault: new File({ src: "assets/Components.figma.contents/components/ButtonDangerDefault.png" }),
    buttonDangerDefault2x: new File({ src: "assets/Components.figma.contents/components/ButtonDangerDefault@2x.png" }),
    buttonDangerDefault3x: new File({ src: "assets/Components.figma.contents/components/ButtonDangerDefault@3x.png" }),
    buttonDangerDefault4x: new File({ src: "assets/Components.figma.contents/components/ButtonDangerDefault@4x.png" }),
    buttonDangerFocus: new File({ src: "assets/Components.figma.contents/components/ButtonDangerFocus.png" }),
    buttonDangerFocus2x: new File({ src: "assets/Components.figma.contents/components/ButtonDangerFocus@2x.png" }),
    buttonDangerFocus3x: new File({ src: "assets/Components.figma.contents/components/ButtonDangerFocus@3x.png" }),
    buttonDangerFocus4x: new File({ src: "assets/Components.figma.contents/components/ButtonDangerFocus@4x.png" }),
    buttonDangerHover: new File({ src: "assets/Components.figma.contents/components/ButtonDangerHover.png" }),
    buttonDangerHover2x: new File({ src: "assets/Components.figma.contents/components/ButtonDangerHover@2x.png" }),
    buttonDangerHover3x: new File({ src: "assets/Components.figma.contents/components/ButtonDangerHover@3x.png" }),
    buttonDangerHover4x: new File({ src: "assets/Components.figma.contents/components/ButtonDangerHover@4x.png" }),
    buttonBrandDefault: new File({ src: "assets/Components.figma.contents/components/ButtonBrandDefault.png" }),
    buttonBrandDefault2x: new File({ src: "assets/Components.figma.contents/components/ButtonBrandDefault@2x.png" }),
    buttonBrandDefault3x: new File({ src: "assets/Components.figma.contents/components/ButtonBrandDefault@3x.png" }),
    buttonBrandDefault4x: new File({ src: "assets/Components.figma.contents/components/ButtonBrandDefault@4x.png" }),
    buttonBrandFocus: new File({ src: "assets/Components.figma.contents/components/ButtonBrandFocus.png" }),
    buttonBrandFocus2x: new File({ src: "assets/Components.figma.contents/components/ButtonBrandFocus@2x.png" }),
    buttonBrandFocus3x: new File({ src: "assets/Components.figma.contents/components/ButtonBrandFocus@3x.png" }),
    buttonBrandFocus4x: new File({ src: "assets/Components.figma.contents/components/ButtonBrandFocus@4x.png" }),
    buttonBrandHover: new File({ src: "assets/Components.figma.contents/components/ButtonBrandHover.png" }),
    buttonBrandHover2x: new File({ src: "assets/Components.figma.contents/components/ButtonBrandHover@2x.png" }),
    buttonBrandHover3x: new File({ src: "assets/Components.figma.contents/components/ButtonBrandHover@3x.png" }),
    buttonBrandHover4x: new File({ src: "assets/Components.figma.contents/components/ButtonBrandHover@4x.png" }),
    buttonBlackDefault: new File({ src: "assets/Components.figma.contents/components/ButtonBlackDefault.png" }),
    buttonBlackDefault2x: new File({ src: "assets/Components.figma.contents/components/ButtonBlackDefault@2x.png" }),
    buttonBlackDefault3x: new File({ src: "assets/Components.figma.contents/components/ButtonBlackDefault@3x.png" }),
    buttonBlackDefault4x: new File({ src: "assets/Components.figma.contents/components/ButtonBlackDefault@4x.png" }),
    buttonBlackHover: new File({ src: "assets/Components.figma.contents/components/ButtonBlackHover.png" }),
    buttonBlackHover2x: new File({ src: "assets/Components.figma.contents/components/ButtonBlackHover@2x.png" }),
    buttonBlackHover3x: new File({ src: "assets/Components.figma.contents/components/ButtonBlackHover@3x.png" }),
    buttonBlackHover4x: new File({ src: "assets/Components.figma.contents/components/ButtonBlackHover@4x.png" }),
    buttonBlackFocus: new File({ src: "assets/Components.figma.contents/components/ButtonBlackFocus.png" }),
    buttonBlackFocus2x: new File({ src: "assets/Components.figma.contents/components/ButtonBlackFocus@2x.png" }),
    buttonBlackFocus3x: new File({ src: "assets/Components.figma.contents/components/ButtonBlackFocus@3x.png" }),
    buttonBlackFocus4x: new File({ src: "assets/Components.figma.contents/components/ButtonBlackFocus@4x.png" }),
    buttonWhiteFocus: new File({ src: "assets/Components.figma.contents/components/ButtonWhiteFocus.png" }),
    buttonWhiteFocus2x: new File({ src: "assets/Components.figma.contents/components/ButtonWhiteFocus@2x.png" }),
    buttonWhiteFocus3x: new File({ src: "assets/Components.figma.contents/components/ButtonWhiteFocus@3x.png" }),
    buttonWhiteFocus4x: new File({ src: "assets/Components.figma.contents/components/ButtonWhiteFocus@4x.png" }),
    buttonWhiteHover: new File({ src: "assets/Components.figma.contents/components/ButtonWhiteHover.png" }),
    buttonWhiteHover2x: new File({ src: "assets/Components.figma.contents/components/ButtonWhiteHover@2x.png" }),
    buttonWhiteHover3x: new File({ src: "assets/Components.figma.contents/components/ButtonWhiteHover@3x.png" }),
    buttonWhiteHover4x: new File({ src: "assets/Components.figma.contents/components/ButtonWhiteHover@4x.png" }),
    componentLabel: new File({ src: "assets/Components.figma.contents/components/ComponentLabel.png" }),
    componentLabel2x: new File({ src: "assets/Components.figma.contents/components/ComponentLabel@2x.png" }),
    componentLabel3x: new File({ src: "assets/Components.figma.contents/components/ComponentLabel@3x.png" }),
    componentLabel4x: new File({ src: "assets/Components.figma.contents/components/ComponentLabel@4x.png" }),
    buttonWhiteDefault1: new File({ src: "assets/Components.figma.contents/components/ButtonWhiteDefault1.png" }),
    buttonWhiteDefault12x: new File({ src: "assets/Components.figma.contents/components/ButtonWhiteDefault1@2x.png" }),
    buttonWhiteDefault13x: new File({ src: "assets/Components.figma.contents/components/ButtonWhiteDefault1@3x.png" }),
    buttonWhiteDefault14x: new File({ src: "assets/Components.figma.contents/components/ButtonWhiteDefault1@4x.png" }),
    buttonDisabledDefault1: new File({ src: "assets/Components.figma.contents/components/ButtonDisabledDefault1.png" }),
    buttonDisabledDefault12x: new File({ src: "assets/Components.figma.contents/components/ButtonDisabledDefault1@2x.png" }),
    buttonDisabledDefault13x: new File({ src: "assets/Components.figma.contents/components/ButtonDisabledDefault1@3x.png" }),
    buttonDisabledDefault14x: new File({ src: "assets/Components.figma.contents/components/ButtonDisabledDefault1@4x.png" }),
    buttonDisabledHover1: new File({ src: "assets/Components.figma.contents/components/ButtonDisabledHover1.png" }),
    buttonDisabledHover12x: new File({ src: "assets/Components.figma.contents/components/ButtonDisabledHover1@2x.png" }),
    buttonDisabledHover13x: new File({ src: "assets/Components.figma.contents/components/ButtonDisabledHover1@3x.png" }),
    buttonDisabledHover14x: new File({ src: "assets/Components.figma.contents/components/ButtonDisabledHover1@4x.png" }),
    buttonDisabledFocus1: new File({ src: "assets/Components.figma.contents/components/ButtonDisabledFocus1.png" }),
    buttonDisabledFocus12x: new File({ src: "assets/Components.figma.contents/components/ButtonDisabledFocus1@2x.png" }),
    buttonDisabledFocus13x: new File({ src: "assets/Components.figma.contents/components/ButtonDisabledFocus1@3x.png" }),
    buttonDisabledFocus14x: new File({ src: "assets/Components.figma.contents/components/ButtonDisabledFocus1@4x.png" }),
    buttonDangerDefault1: new File({ src: "assets/Components.figma.contents/components/ButtonDangerDefault1.png" }),
    buttonDangerDefault12x: new File({ src: "assets/Components.figma.contents/components/ButtonDangerDefault1@2x.png" }),
    buttonDangerDefault13x: new File({ src: "assets/Components.figma.contents/components/ButtonDangerDefault1@3x.png" }),
    buttonDangerDefault14x: new File({ src: "assets/Components.figma.contents/components/ButtonDangerDefault1@4x.png" }),
    buttonDangerFocus1: new File({ src: "assets/Components.figma.contents/components/ButtonDangerFocus1.png" }),
    buttonDangerFocus12x: new File({ src: "assets/Components.figma.contents/components/ButtonDangerFocus1@2x.png" }),
    buttonDangerFocus13x: new File({ src: "assets/Components.figma.contents/components/ButtonDangerFocus1@3x.png" }),
    buttonDangerFocus14x: new File({ src: "assets/Components.figma.contents/components/ButtonDangerFocus1@4x.png" }),
    buttonDangerHover1: new File({ src: "assets/Components.figma.contents/components/ButtonDangerHover1.png" }),
    buttonDangerHover12x: new File({ src: "assets/Components.figma.contents/components/ButtonDangerHover1@2x.png" }),
    buttonDangerHover13x: new File({ src: "assets/Components.figma.contents/components/ButtonDangerHover1@3x.png" }),
    buttonDangerHover14x: new File({ src: "assets/Components.figma.contents/components/ButtonDangerHover1@4x.png" }),
    buttonBrandDefault1: new File({ src: "assets/Components.figma.contents/components/ButtonBrandDefault1.png" }),
    buttonBrandDefault12x: new File({ src: "assets/Components.figma.contents/components/ButtonBrandDefault1@2x.png" }),
    buttonBrandDefault13x: new File({ src: "assets/Components.figma.contents/components/ButtonBrandDefault1@3x.png" }),
    buttonBrandDefault14x: new File({ src: "assets/Components.figma.contents/components/ButtonBrandDefault1@4x.png" }),
    buttonBrandFocus1: new File({ src: "assets/Components.figma.contents/components/ButtonBrandFocus1.png" }),
    buttonBrandFocus12x: new File({ src: "assets/Components.figma.contents/components/ButtonBrandFocus1@2x.png" }),
    buttonBrandFocus13x: new File({ src: "assets/Components.figma.contents/components/ButtonBrandFocus1@3x.png" }),
    buttonBrandFocus14x: new File({ src: "assets/Components.figma.contents/components/ButtonBrandFocus1@4x.png" }),
    buttonBrandHover1: new File({ src: "assets/Components.figma.contents/components/ButtonBrandHover1.png" }),
    buttonBrandHover12x: new File({ src: "assets/Components.figma.contents/components/ButtonBrandHover1@2x.png" }),
    buttonBrandHover13x: new File({ src: "assets/Components.figma.contents/components/ButtonBrandHover1@3x.png" }),
    buttonBrandHover14x: new File({ src: "assets/Components.figma.contents/components/ButtonBrandHover1@4x.png" }),
    buttonBlackDefault1: new File({ src: "assets/Components.figma.contents/components/ButtonBlackDefault1.png" }),
    buttonBlackDefault12x: new File({ src: "assets/Components.figma.contents/components/ButtonBlackDefault1@2x.png" }),
    buttonBlackDefault13x: new File({ src: "assets/Components.figma.contents/components/ButtonBlackDefault1@3x.png" }),
    buttonBlackDefault14x: new File({ src: "assets/Components.figma.contents/components/ButtonBlackDefault1@4x.png" }),
    buttonBlackFocus1: new File({ src: "assets/Components.figma.contents/components/ButtonBlackFocus1.png" }),
    buttonBlackFocus12x: new File({ src: "assets/Components.figma.contents/components/ButtonBlackFocus1@2x.png" }),
    buttonBlackFocus13x: new File({ src: "assets/Components.figma.contents/components/ButtonBlackFocus1@3x.png" }),
    buttonBlackFocus14x: new File({ src: "assets/Components.figma.contents/components/ButtonBlackFocus1@4x.png" }),
    buttonBlackHover1: new File({ src: "assets/Components.figma.contents/components/ButtonBlackHover1.png" }),
    buttonBlackHover12x: new File({ src: "assets/Components.figma.contents/components/ButtonBlackHover1@2x.png" }),
    buttonBlackHover13x: new File({ src: "assets/Components.figma.contents/components/ButtonBlackHover1@3x.png" }),
    buttonBlackHover14x: new File({ src: "assets/Components.figma.contents/components/ButtonBlackHover1@4x.png" }),
    buttonWhiteFocus1: new File({ src: "assets/Components.figma.contents/components/ButtonWhiteFocus1.png" }),
    buttonWhiteFocus12x: new File({ src: "assets/Components.figma.contents/components/ButtonWhiteFocus1@2x.png" }),
    buttonWhiteFocus13x: new File({ src: "assets/Components.figma.contents/components/ButtonWhiteFocus1@3x.png" }),
    buttonWhiteFocus14x: new File({ src: "assets/Components.figma.contents/components/ButtonWhiteFocus1@4x.png" }),
    buttonWhiteHover1: new File({ src: "assets/Components.figma.contents/components/ButtonWhiteHover1.png" }),
    buttonWhiteHover12x: new File({ src: "assets/Components.figma.contents/components/ButtonWhiteHover1@2x.png" }),
    buttonWhiteHover13x: new File({ src: "assets/Components.figma.contents/components/ButtonWhiteHover1@3x.png" }),
    buttonWhiteHover14x: new File({ src: "assets/Components.figma.contents/components/ButtonWhiteHover1@4x.png" }),
    users: new File({ src: "assets/Components.figma.contents/components/Users.png" }),
    users2x: new File({ src: "assets/Components.figma.contents/components/Users@2x.png" }),
    users3x: new File({ src: "assets/Components.figma.contents/components/Users@3x.png" }),
    users4x: new File({ src: "assets/Components.figma.contents/components/Users@4x.png" }),
    avatarUserDefault: new File({ src: "assets/Components.figma.contents/components/AvatarUserDefault.png" }),
    avatarUserDefault2x: new File({ src: "assets/Components.figma.contents/components/AvatarUserDefault@2x.png" }),
    avatarUserDefault3x: new File({ src: "assets/Components.figma.contents/components/AvatarUserDefault@3x.png" }),
    avatarUserDefault4x: new File({ src: "assets/Components.figma.contents/components/AvatarUserDefault@4x.png" }),
    avatarTeamDefault: new File({ src: "assets/Components.figma.contents/components/AvatarTeamDefault.png" }),
    avatarTeamDefault2x: new File({ src: "assets/Components.figma.contents/components/AvatarTeamDefault@2x.png" }),
    avatarTeamDefault3x: new File({ src: "assets/Components.figma.contents/components/AvatarTeamDefault@3x.png" }),
    avatarTeamDefault4x: new File({ src: "assets/Components.figma.contents/components/AvatarTeamDefault@4x.png" }),
    user: new File({ src: "assets/Components.figma.contents/components/User.png" }),
    user2x: new File({ src: "assets/Components.figma.contents/components/User@2x.png" }),
    user3x: new File({ src: "assets/Components.figma.contents/components/User@3x.png" }),
    user4x: new File({ src: "assets/Components.figma.contents/components/User@4x.png" }),
    avatarUserImage: new File({ src: "assets/Components.figma.contents/components/AvatarUserImage.png" }),
    avatarUserImage2x: new File({ src: "assets/Components.figma.contents/components/AvatarUserImage@2x.png" }),
    avatarUserImage3x: new File({ src: "assets/Components.figma.contents/components/AvatarUserImage@3x.png" }),
    avatarUserImage4x: new File({ src: "assets/Components.figma.contents/components/AvatarUserImage@4x.png" }),
    bookmark: new File({ src: "assets/Components.figma.contents/components/Bookmark.png" }),
    bookmark2x: new File({ src: "assets/Components.figma.contents/components/Bookmark@2x.png" }),
    bookmark3x: new File({ src: "assets/Components.figma.contents/components/Bookmark@3x.png" }),
    bookmark4x: new File({ src: "assets/Components.figma.contents/components/Bookmark@4x.png" }),
    toastDefault: new File({ src: "assets/Components.figma.contents/components/ToastDefault.png" }),
    toastDefault2x: new File({ src: "assets/Components.figma.contents/components/ToastDefault@2x.png" }),
    toastDefault3x: new File({ src: "assets/Components.figma.contents/components/ToastDefault@3x.png" }),
    toastDefault4x: new File({ src: "assets/Components.figma.contents/components/ToastDefault@4x.png" }),
    check: new File({ src: "assets/Components.figma.contents/components/Check.png" }),
    check2x: new File({ src: "assets/Components.figma.contents/components/Check@2x.png" }),
    check3x: new File({ src: "assets/Components.figma.contents/components/Check@3x.png" }),
    check4x: new File({ src: "assets/Components.figma.contents/components/Check@4x.png" }),
    alertCircle: new File({ src: "assets/Components.figma.contents/components/AlertCircle.png" }),
    alertCircle2x: new File({ src: "assets/Components.figma.contents/components/AlertCircle@2x.png" }),
    alertCircle3x: new File({ src: "assets/Components.figma.contents/components/AlertCircle@3x.png" }),
    alertCircle4x: new File({ src: "assets/Components.figma.contents/components/AlertCircle@4x.png" }),
    tooltipDefault: new File({ src: "assets/Components.figma.contents/components/TooltipDefault.png" }),
    tooltipDefault2x: new File({ src: "assets/Components.figma.contents/components/TooltipDefault@2x.png" }),
    tooltipDefault3x: new File({ src: "assets/Components.figma.contents/components/TooltipDefault@3x.png" }),
    tooltipDefault4x: new File({ src: "assets/Components.figma.contents/components/TooltipDefault@4x.png" }),
    tooltipGreen: new File({ src: "assets/Components.figma.contents/components/TooltipGreen.png" }),
    tooltipGreen2x: new File({ src: "assets/Components.figma.contents/components/TooltipGreen@2x.png" }),
    tooltipGreen3x: new File({ src: "assets/Components.figma.contents/components/TooltipGreen@3x.png" }),
    tooltipGreen4x: new File({ src: "assets/Components.figma.contents/components/TooltipGreen@4x.png" }),
    info: new File({ src: "assets/Components.figma.contents/components/Info.png" }),
    info2x: new File({ src: "assets/Components.figma.contents/components/Info@2x.png" }),
    info3x: new File({ src: "assets/Components.figma.contents/components/Info@3x.png" }),
    info4x: new File({ src: "assets/Components.figma.contents/components/Info@4x.png" }),
    x: new File({ src: "assets/Components.figma.contents/components/X.png" }),
    x2x: new File({ src: "assets/Components.figma.contents/components/X@2x.png" }),
    x3x: new File({ src: "assets/Components.figma.contents/components/X@3x.png" }),
    x4x: new File({ src: "assets/Components.figma.contents/components/X@4x.png" }),
    messageDefault: new File({ src: "assets/Components.figma.contents/components/MessageDefault.png" }),
    messageDefault2x: new File({ src: "assets/Components.figma.contents/components/MessageDefault@2x.png" }),
    messageDefault3x: new File({ src: "assets/Components.figma.contents/components/MessageDefault@3x.png" }),
    messageDefault4x: new File({ src: "assets/Components.figma.contents/components/MessageDefault@4x.png" }),
    alertTriangle: new File({ src: "assets/Components.figma.contents/components/AlertTriangle.png" }),
    alertTriangle2x: new File({ src: "assets/Components.figma.contents/components/AlertTriangle@2x.png" }),
    alertTriangle3x: new File({ src: "assets/Components.figma.contents/components/AlertTriangle@3x.png" }),
    alertTriangle4x: new File({ src: "assets/Components.figma.contents/components/AlertTriangle@4x.png" }),
    flag: new File({ src: "assets/Components.figma.contents/components/Flag.png" }),
    flag2x: new File({ src: "assets/Components.figma.contents/components/Flag@2x.png" }),
    flag3x: new File({ src: "assets/Components.figma.contents/components/Flag@3x.png" }),
    flag4x: new File({ src: "assets/Components.figma.contents/components/Flag@4x.png" }),
    cover: new File({ src: "assets/Components.figma.contents/components/Cover.png" }),
    cover2x: new File({ src: "assets/Components.figma.contents/components/Cover@2x.png" }),
    cover3x: new File({ src: "assets/Components.figma.contents/components/Cover@3x.png" }),
    cover4x: new File({ src: "assets/Components.figma.contents/components/Cover@4x.png" })
};

export const componentsComponents = {
    arrowLeft: Image.responsive("assets/Components.figma.contents/components/ArrowLeft.png", 16, 16),
    arrowRight: Image.responsive("assets/Components.figma.contents/components/ArrowRight.png", 16, 16),
    buttonWhiteDefault: Image.responsive("assets/Components.figma.contents/components/ButtonWhiteDefault.png", 128, 40),
    buttonDisabledDefault: Image.responsive("assets/Components.figma.contents/components/ButtonDisabledDefault.png", 128, 40),
    buttonDisabledFocus: Image.responsive("assets/Components.figma.contents/components/ButtonDisabledFocus.png", 128, 40),
    buttonDisabledHover: Image.responsive("assets/Components.figma.contents/components/ButtonDisabledHover.png", 128, 40),
    buttonDangerDefault: Image.responsive("assets/Components.figma.contents/components/ButtonDangerDefault.png", 128, 40),
    buttonDangerFocus: Image.responsive("assets/Components.figma.contents/components/ButtonDangerFocus.png", 128, 40),
    buttonDangerHover: Image.responsive("assets/Components.figma.contents/components/ButtonDangerHover.png", 128, 40),
    buttonBrandDefault: Image.responsive("assets/Components.figma.contents/components/ButtonBrandDefault.png", 128, 40),
    buttonBrandFocus: Image.responsive("assets/Components.figma.contents/components/ButtonBrandFocus.png", 128, 40),
    buttonBrandHover: Image.responsive("assets/Components.figma.contents/components/ButtonBrandHover.png", 128, 40),
    buttonBlackDefault: Image.responsive("assets/Components.figma.contents/components/ButtonBlackDefault.png", 128, 40),
    buttonBlackHover: Image.responsive("assets/Components.figma.contents/components/ButtonBlackHover.png", 128, 40),
    buttonBlackFocus: Image.responsive("assets/Components.figma.contents/components/ButtonBlackFocus.png", 128, 40),
    buttonWhiteFocus: Image.responsive("assets/Components.figma.contents/components/ButtonWhiteFocus.png", 128, 40),
    buttonWhiteHover: Image.responsive("assets/Components.figma.contents/components/ButtonWhiteHover.png", 128, 40),
    componentLabel: Image.responsive("assets/Components.figma.contents/components/ComponentLabel.png", 600, 116),
    buttonWhiteDefault1: Image.responsive("assets/Components.figma.contents/components/ButtonWhiteDefault1.png", 85.75, 28.44444465637207),
    buttonDisabledDefault1: Image.responsive("assets/Components.figma.contents/components/ButtonDisabledDefault1.png", 98, 32),
    buttonDisabledHover1: Image.responsive("assets/Components.figma.contents/components/ButtonDisabledHover1.png", 98, 32),
    buttonDisabledFocus1: Image.responsive("assets/Components.figma.contents/components/ButtonDisabledFocus1.png", 98, 32),
    buttonDangerDefault1: Image.responsive("assets/Components.figma.contents/components/ButtonDangerDefault1.png", 98, 32),
    buttonDangerFocus1: Image.responsive("assets/Components.figma.contents/components/ButtonDangerFocus1.png", 98, 32),
    buttonDangerHover1: Image.responsive("assets/Components.figma.contents/components/ButtonDangerHover1.png", 98, 32),
    buttonBrandDefault1: Image.responsive("assets/Components.figma.contents/components/ButtonBrandDefault1.png", 98, 32),
    buttonBrandFocus1: Image.responsive("assets/Components.figma.contents/components/ButtonBrandFocus1.png", 98, 32),
    buttonBrandHover1: Image.responsive("assets/Components.figma.contents/components/ButtonBrandHover1.png", 98, 32),
    buttonBlackDefault1: Image.responsive("assets/Components.figma.contents/components/ButtonBlackDefault1.png", 98, 32),
    buttonBlackFocus1: Image.responsive("assets/Components.figma.contents/components/ButtonBlackFocus1.png", 98, 32),
    buttonBlackHover1: Image.responsive("assets/Components.figma.contents/components/ButtonBlackHover1.png", 98, 32),
    buttonWhiteFocus1: Image.responsive("assets/Components.figma.contents/components/ButtonWhiteFocus1.png", 98, 32),
    buttonWhiteHover1: Image.responsive("assets/Components.figma.contents/components/ButtonWhiteHover1.png", 98, 32),
    users: Image.responsive("assets/Components.figma.contents/components/Users.png", 32, 32),
    avatarUserDefault: Image.responsive("assets/Components.figma.contents/components/AvatarUserDefault.png", 64, 64),
    avatarTeamDefault: Image.responsive("assets/Components.figma.contents/components/AvatarTeamDefault.png", 64, 64),
    user: Image.responsive("assets/Components.figma.contents/components/User.png", 32, 32),
    avatarUserImage: Image.responsive("assets/Components.figma.contents/components/AvatarUserImage.png", 64, 64),
    bookmark: Image.responsive("assets/Components.figma.contents/components/Bookmark.png", 16, 16),
    toastDefault: Image.responsive("assets/Components.figma.contents/components/ToastDefault.png", 232, 33),
    check: Image.responsive("assets/Components.figma.contents/components/Check.png", 16, 16),
    alertCircle: Image.responsive("assets/Components.figma.contents/components/AlertCircle.png", 16, 16),
    tooltipDefault: Image.responsive("assets/Components.figma.contents/components/TooltipDefault.png", 207, 35),
    tooltipGreen: Image.responsive("assets/Components.figma.contents/components/TooltipGreen.png", 264, 35),
    info: Image.responsive("assets/Components.figma.contents/components/Info.png", 20, 20),
    x: Image.responsive("assets/Components.figma.contents/components/X.png", 16, 16),
    messageDefault: Image.responsive("assets/Components.figma.contents/components/MessageDefault.png", 608, 40),
    alertTriangle: Image.responsive("assets/Components.figma.contents/components/AlertTriangle.png", 20, 20),
    flag: Image.responsive("assets/Components.figma.contents/components/Flag.png", 20, 20),
    cover: Image.responsive("assets/Components.figma.contents/components/Cover.png", 620, 320)
};

export const componentsTokens = {
    colors: componentsColors,
    gradients: componentsGradients,
    shadows: componentsShadows,
    typography: componentsTypography
};
