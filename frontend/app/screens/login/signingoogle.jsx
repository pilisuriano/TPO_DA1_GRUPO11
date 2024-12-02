import * as React from "react";
import {Image, StyleSheet, View, Text, Pressable, ImageBackground} from "react-native";

const SIGNINGoogle = () => {
  	
  	return (
    		<View style={styles.signInGoogle}>
      			<View style={styles.signInGoogleChild} />
      			<Text style={styles.iniciaSesin}>Inicia sesión</Text>
      			<Text style={[styles.correoElectrnico, styles.contraseaTypo]}>Correo electrónico</Text>
      			<Text style={[styles.contrasea, styles.contraseaTypo]}>Contraseña</Text>
      			<View style={[styles.rectangleParent, styles.groupChildLayout]}>
        				<View style={[styles.groupChild, styles.groupChildLayout]} />
        				<Text style={styles.listo}>Listo</Text>
      			</View>
      			<View style={[styles.signInGoogleItem, styles.groupChildLayout]} />
      			<Text style={[styles.martinsuarezhotmailcom, styles.textTypo]}>martinsuarez@hotmail.com</Text>
      			<View style={[styles.signInGoogleInner, styles.rectangleIconPosition]} />
      			<Text style={[styles.text, styles.textTypo]}>**********</Text>
      			<Text style={[styles.ingresaTusCredenciales, styles.contraseaTypo]}>Ingresa tus credenciales</Text>
      			<Text style={[styles.olvidSuContrasea, styles.contraseaTypo]}>¿Olvidó su contraseña?</Text>
        				<Image style={styles.iconlylightOutlinearrowL} resizeMode="cover" source="Iconly/Light-Outline/Arrow---Left-2.png" />
        				<Text style={styles.iniciaSesinCon}>Inicia Sesión con Google</Text>
        				<Image style={[styles.rectangleIcon, styles.rectangleIconPosition]} resizeMode="cover" source="Rectangle 15.png" />
        				<View style={styles.rectangleView} />
        				<View style={styles.signInWithGoogleParent}>
          					<ImageBackground style={styles.signInWithGoogle} resizeMode="cover" source="Sign in with Google.png">
            						<View style={[styles.accountChoiceBox, styles.headerFlexBox]}>
              							<View style={styles.title}>
                								<View style={[styles.titleContents, styles.accountFlexBox]}>
                  									<Image style={styles.googleLogoIcon} resizeMode="cover" source="Google Logo.png" />
                  									<Text style={[styles.signInWith, styles.signInWithClr]}>Sign in with Google</Text>
                								</View>
                								<View style={styles.pxBorderBottom} />
              							</View>
              							<View style={[styles.mainContent, styles.headerFlexBox]}>
                								<View style={[styles.header, styles.headerFlexBox]}>
                  									<View style={[styles.headerText, styles.headerFlexBox]}>
                    										<Text style={[styles.chooseAnAccount, styles.toContinueToTypo]}>Elige una cuenta</Text>
                    										<Text style={[styles.toContinueTo, styles.toContinueToTypo]} />
                  									</View>
                								</View>
                								<View style={[styles.accountsWrapper, styles.accountsWrapperSpaceBlock]}>
                  									<Pressable style={styles.title} onPress={()=>{}}>
                    										<View style={[styles.accountDetails, styles.accountFlexBox]}>
                      											<View style={styles.profileLayout}>
                        												<Image style={[styles.profilePictureIcon, styles.profileLayout]} resizeMode="cover" source="Profile Picture.png" />
                        												<Text style={styles.a}>M</Text>
                      											</View>
                      											<View style={styles.accountInfo}>
                        												<Text style={[styles.accountName, styles.accountTypo]}>Martin Suarez</Text>
                        												<Text style={[styles.emailgmailcom, styles.signInWithClr]}>martinsuarez@gmail.com</Text>
                      											</View>
                    										</View>
                    										<View style={[styles.pxBorderBottom1, styles.accountsWrapperSpaceBlock]}>
                      											<View style={styles.pxBorderBottom} />
                    										</View>
                  									</Pressable>
                  									<View style={styles.title}>
                    										<View style={[styles.anotherAccountOption1, styles.accountFlexBox]}>
                      											<Image style={styles.accountIcon} resizeMode="cover" source="Account Icon.png" />
                      											<Text style={[styles.useAnotherAccount, styles.accountTypo]}>Use another account</Text>
                    										</View>
                    										<View style={[styles.pxBorderBottom1, styles.accountsWrapperSpaceBlock]}>
                      											<View style={styles.pxBorderBottom} />
                    										</View>
                  									</View>
                								</View>
              							</View>
              							<View style={styles.description}>
                								<Text style={styles.signInWithTypo}>
                  									<Text style={styles.signInWithClr}>{`To continue, Google will share your name, email address, language preference, and profile picture with Company. Before using this app, you can review Company’s
`}</Text>
                                <Text style={styles.privacyPolicy}>privacy policy</Text>
                                <Text style={styles.signInWithClr}>{` and `}</Text>
                                <Text style={styles.privacyPolicy}>terms of service</Text>
                                <Text style={styles.signInWithClr}>.</Text>
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
                <Image style={styles.logo2Icon} resizeMode="cover" source="Logo 2.png" />
            </View>
        </View>);
};

const styles = StyleSheet.create({
    groupChildPosition: {
        left: 0,
        top: 0
    },
    contraseaTypo: {
        fontFamily: "Poppins-Medium",
        fontWeight: "500",
        opacity: 0.7,
        textAlign: "left",
        color: "#000",
        position: "absolute"
    },
    groupChildLayout: {
        height: 49,
        width: 321,
        position: "absolute"
    },
    textTypo: {
        opacity: 0.5,
        left: 53,
        fontFamily: "Roboto-Medium",
        fontWeight: "500",
        fontSize: 14,
        textAlign: "left",
        position: "absolute"
    },
    rectangleIconPosition: {
        top: 323,
        height: 49,
        width: 321,
        left: 34,
        borderRadius: 10,
        position: "absolute"
    },
    headerFlexBox: {
        justifyContent: "center",
        alignSelf: "stretch",
        alignItems: "center"
    },
    accountFlexBox: {
        gap: 12,
        flexDirection: "row",
        alignSelf: "stretch",
        alignItems: "center"
    },
    signInWithClr: {
        color: "#5f6368",
        fontFamily: "Roboto-Regular"
    },
    toContinueToTypo: {
        color: "#202124",
        fontFamily: "Roboto-Regular",
        alignSelf: "stretch",
        textAlign: "center"
    },
    accountsWrapperSpaceBlock: {
        paddingVertical: 0,
        alignSelf: "stretch"
    },
    profileLayout: {
        height: 28,
        width: 28
    },
    accountTypo: {
        color: "#3c4043",
        lineHeight: 20,
        fontFamily: "Roboto-Medium",
        fontWeight: "500",
        fontSize: 14,
        textAlign: "left"
    },
    blackBase21: {
        width: 390,
        height: 41,
        position: "absolute"
    },
    signInGoogleChild: {
        top: 822,
        left: 113,
        backgroundColor: "#000",
        width: 165,
        height: 4,
        borderRadius: 10,
        position: "absolute"
    },
    iniciaSesin: {
        top: 130,
        fontSize: 20,
        width: 215,
        textAlign: "left",
        color: "#000",
        fontFamily: "Poppins-SemiBold",
        fontWeight: "600",
        left: 34,
        position: "absolute"
    },
    correoElectrnico: {
        top: 210,
        width: 137,
        opacity: 0.7,
        fontSize: 14,
        fontWeight: "500",
        left: 34
    },
    contrasea: {
        top: 297,
        width: 102,
        opacity: 0.7,
        fontSize: 14,
        fontWeight: "500",
        left: 34
    },
    groupChild: {
        backgroundColor: "#bb4426",
        borderRadius: 10,
        left: 0,
        top: 0
    },
    listo: {
        top: 11,
        left: 137,
        color: "#fff",
        fontSize: 18,
        textAlign: "left",
        fontFamily: "Poppins-SemiBold",
        fontWeight: "600",
        position: "absolute"
    },
    rectangleParent: {
        top: 636,
        left: 34
    },
    signInGoogleItem: {
        top: 236,
        borderColor: "#7e5f5b",
        borderWidth: 0.5,
        borderStyle: "solid",
        backgroundColor: "#f2f2f2",
        left: 34,
        borderRadius: 10
    },
    martinsuarezhotmailcom: {
        top: 252,
        color: "#1a1a1a"
    },
    signInGoogleInner: {
        backgroundColor: "#f2f2f2"
    },
    text: {
        top: 339,
        color: "#000"
    },
    ingresaTusCredenciales: {
        top: 165,
        width: 202,
        fontSize: 16,
        opacity: 0.7,
        left: 34
    },
    olvidSuContrasea: {
        top: 384,
        left: 183,
        width: 173,
        opacity: 0.7,
        fontSize: 14,
        fontWeight: "500"
    },
    iconlylightOutlinearrowL: {
        height: "2.25%",
        width: "2.67%",
        top: "8.99%",
        right: "90.13%",
        bottom: "88.76%",
        left: "7.2%",
        maxWidth: "100%",
        maxHeight: "100%",
        position: "absolute",
        overflow: "hidden"
    },
    iniciaSesinCon: {
        top: 447,
        color: "#006175",
        width: 261,
        textAlign: "center",
        left: 53,
        fontSize: 18,
        fontFamily: "Poppins-Medium",
        fontWeight: "500",
        position: "absolute"
    },
    rectangleIcon: {
        opacity: 0.7
    },
    rectangleView: {
        left: -6,
        width: 396,
        height: 843,
        backgroundColor: "#f2f2f2",
        opacity: 0.7,
        borderRadius: 10,
        top: 0,
        position: "absolute"
    },
    googleLogoIcon: {
        width: 14,
        height: 14,
        overflow: "hidden"
    },
    signInWith: {
        lineHeight: 20,
        fontSize: 14,
        textAlign: "left",
        flex: 1
    },
    titleContents: {
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    pxBorderBottom: {
        backgroundColor: "#dadce0",
        height: 1,
        alignSelf: "stretch"
    },
    title: {
        alignSelf: "stretch"
    },
    chooseAnAccount: {
        fontSize: 24,
        lineHeight: 32
    },
    toContinueTo: {
        lineHeight: 24,
        fontSize: 16
    },
    headerText: {
        gap: 8
    },
    header: {
        paddingTop: 4,
        paddingHorizontal: 40
    },
    profilePictureIcon: {
        left: 0,
        top: 0,
        position: "absolute"
    },
    a: {
        top: 5,
        fontSize: 15,
        display: "flex",
        width: 28,
        fontFamily: "Roboto-Regular",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#fff",
        left: 0,
        position: "absolute"
    },
    accountName: {
        alignSelf: "stretch"
    },
    emailgmailcom: {
        fontSize: 12,
        lineHeight: 16,
        alignSelf: "stretch",
        textAlign: "left"
    },
    accountInfo: {
        flex: 1
    },
    accountDetails: {
        paddingVertical: 12,
        paddingHorizontal: 40
    },
    pxBorderBottom1: {
        paddingHorizontal: 40
    },
    accountIcon: {
        height: 20,
        width: 28
    },
    useAnotherAccount: {
        flex: 1
    },
    anotherAccountOption1: {
        paddingVertical: 14,
        paddingHorizontal: 40
    },
    accountsWrapper: {
        paddingHorizontal: 1
    },
    mainContent: {
        gap: 24
    },
    privacyPolicy: {
        color: "#1a73e8",
        fontFamily: "Roboto-Medium",
        fontWeight: "500"
    },
    signInWithTypo: {
        lineHeight: 20,
        fontSize: 14,
        textAlign: "left",
        flex: 1
    },
    description: {
        paddingTop: 9,
        paddingBottom: 3,
        paddingHorizontal: 40,
        flexDirection: "row",
        alignSelf: "stretch"
    },
    accountChoiceBox: {
        borderRadius: 8,
        borderColor: "#dadce0",
        borderWidth: 1,
        paddingBottom: 36,
        gap: 32,
        borderStyle: "solid",
        backgroundColor: "#fff"
    },
    signInWithGoogle: {
        alignItems: "center",
        left: 0,
        top: 0,
        position: "absolute"
    },
    logo2Icon: {
        top: 40,
        left: 150,
        borderRadius: 183,
        width: 35,
        height: 35,
        position: "absolute"
    },
    signInWithGoogleParent: {
        top: 180,
        left: 16,
        width: 358,
        height: 451,
        position: "absolute"
    },
    signInGoogle: {
        width: "100%",
        height: 844,
        overflow: "hidden",
        flex: 1,
        backgroundColor: "#fff"
    }
});

export default SIGNINGoogle;
