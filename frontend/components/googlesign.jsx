import * as React from "react";
import {Image, StyleSheet, Text, View, Pressable, ImageBackground} from "react-native";

const SignInWithGoogle = () => {
  	
  	return (
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
              							<Text style={[styles.chooseAnAccount, styles.aTypo]}>Elige una cuenta</Text>
              							<Text style={[styles.toContinueTo, styles.aTypo]} />
            						</View>
          					</View>
          					<View style={[styles.accountsWrapper, styles.accountsWrapperSpaceBlock]}>
            						<Pressable style={styles.title} onPress={()=>{}}>
              							<View style={[styles.accountDetails, styles.accountFlexBox]}>
                								<View style={styles.profilePicture}>
                  									<Image style={[styles.profilePictureIcon, styles.aPosition]} resizeMode="cover" source="Profile Picture.png" />
                  									<Text style={[styles.a, styles.aPosition]}>M</Text>
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
          					<Text style={[styles.toContinueGoogleContainer, styles.signInWithTypo]}>
            						<Text style={styles.signInWithClr}>{`To continue, Google will share your name, email address, language preference, and profile picture with Company. Before using this app, you can review Company’s
`}</Text>
                        <Text style={styles.privacyPolicy}>privacy policy</Text>
                        <Text style={styles.signInWithClr}>{` and `}</Text>
                        <Text style={styles.privacyPolicy}>terms of service</Text>
                        <Text style={styles.signInWithClr}>.</Text>
                    </Text>
                </View>
            </View>
        </ImageBackground>);
};

const styles = StyleSheet.create({
    headerFlexBox: {
        justifyContent: "center",
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
    aTypo: {
        textAlign: "center",
        fontFamily: "Roboto-Regular"
    },
    accountsWrapperSpaceBlock: {
        paddingVertical: 0,
        alignSelf: "stretch"
    },
    aPosition: {
        left: 0,
        position: "absolute",
        width: 28
    },
    accountTypo: {
        color: "#3c4043",
        fontFamily: "Roboto-Medium",
        fontWeight: "500",
        textAlign: "left",
        lineHeight: 20,
        fontSize: 14
    },
    signInWithTypo: {
        lineHeight: 20,
        fontSize: 14,
        textAlign: "left",
        flex: 1
    },
    googleLogoIcon: {
        width: 14,
        height: 14,
        overflow: "hidden"
    },
    signInWith: {
        textAlign: "left",
        lineHeight: 20,
        fontSize: 14,
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
        lineHeight: 32,
        color: "#202124",
        textAlign: "center",
        alignSelf: "stretch"
    },
    toContinueTo: {
        fontSize: 16,
        lineHeight: 24,
        color: "#202124",
        textAlign: "center",
        alignSelf: "stretch"
    },
    headerText: {
        gap: 8,
        alignSelf: "stretch"
    },
    header: {
        paddingTop: 4,
        paddingHorizontal: 40,
        alignSelf: "stretch"
    },
    profilePictureIcon: {
        top: 0,
        height: 28
    },
    a: {
        top: 5,
        fontSize: 15,
        color: "#fff",
        display: "flex",
        textAlign: "center",
        fontFamily: "Roboto-Regular",
        justifyContent: "center",
        alignItems: "center"
    },
    profilePicture: {
        height: 28,
        width: 28
    },
    accountName: {
        alignSelf: "stretch"
    },
    emailgmailcom: {
        fontSize: 12,
        lineHeight: 16,
        textAlign: "left",
        alignSelf: "stretch"
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
        gap: 24,
        alignSelf: "stretch"
    },
    privacyPolicy: {
        color: "#1a73e8",
        fontFamily: "Roboto-Medium",
        fontWeight: "500"
    },
    toContinueGoogleContainer: {
        textAlign: "left"
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
        backgroundColor: "#fff",
        borderStyle: "solid",
        borderColor: "#dadce0",
        borderWidth: 1,
        paddingBottom: 36,
        gap: 32,
        alignSelf: "stretch"
    },
    signInWithGoogle: {
        width: "100%",
        alignItems: "center",
        flex: 1
    }
});

export default SignInWithGoogle;
