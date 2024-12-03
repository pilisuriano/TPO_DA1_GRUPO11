/*import * as React from "react";
import {Image, StyleSheet, Pressable, View, Text} from "react-native";
import { useNavigation } from '@react-navigation/native';*/
import React, { useState, useEffect } from "react";
import { View, TextInput, Button, FlatList, Text, StyleSheet, Image, Pressable } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchUsers, clearUsers } from "../../src/features/search/searchSlice";
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const Search = () => {
	const [query, setQuery] = useState("");
	const dispatch = useDispatch();
	const navigation = useNavigation();
	const { users, loading, error } = useSelector((state) => state.search);
	const { t } = useTranslation();

	/*const handleSearch = () => {
		if (query.trim() === "") {
		  dispatch(clearUsers());
		} else {
		  dispatch(fetchSearchUsers(query));
		}
	  };
	
	  useEffect(() => {
		if (query.trim() === "") {
		  dispatch(clearUsers());
		} else {
		  handleSearch();
		}
	  }, [query]);*/

	  const handleSearch = () => {
		if (query.trim() === "") {
		  dispatch(clearUsers());
		} else {
		  dispatch(fetchSearchUsers(query));
		}
	  };
	
	  useEffect(() => {
		if (query.trim() === "") {
		  dispatch(clearUsers());
		}
	  }, [query, dispatch]);


  	return (
    		/*<View style={styles.buscarUsuario2}>
      			<Pressable style={styles.wrapper} onPress={()=>{}}>
        				<Image style={[styles.icon, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/Group 12.png")} />
      			</Pressable>
      			<View style={styles.buscarUsuario2Child} />
      			<Image style={[styles.iconlybrokensearch, styles.iconLayout1]} resizeMode="cover" source={require("../../assets/images/Search.png")}/>
      			<Text style={styles.martinPerez}>Martin Perez</Text>
      			<Image style={styles.marca3Icon} resizeMode="cover" source={require("../../assets/images/Marca 2.png")}/>
      			<Image style={[styles.unsplashsibvworyqs0Icon, styles.unsplashymoIconLayout]} resizeMode="cover" source={require("../../assets/images/unsplash_sibVwORYqs0.png")} />
      			<Image style={[styles.unsplashkipqvvtoc1sIcon, styles.unsplashymoIconLayout]} resizeMode="cover" source={require("../../assets/images/unsplash_KIPqvvTOC1s.png")} />
      			<Image style={[styles.unsplashwnolnjo7ts8Icon, styles.unsplashymoIconLayout]} resizeMode="cover" source={require("../../assets/images/unsplash_WNoLnJo7tS8.png")} />
      			<Text style={[styles.martinPerezGomez, styles.martinTypo]}>Martin Perez Gomez</Text>
      			<Pressable style={[styles.unsplashymoYcN2oParent, styles.unsplashymoIconLayout]} onPress={() => navigation.navigate('userfound')}>
        				<Image style={[styles.unsplashymoYcN2oIcon, styles.unsplashymoIconLayout]} resizeMode="cover" source={require("../../assets/images/unsplash_ymo_yC_N_2o.png")} />
        				<Text style={[styles.martinPerez1, styles.martinTypo]}>Martin Perez</Text>
      			</Pressable>
      			<Text style={[styles.martinPerez2, styles.martinTypo]}>Martin Perez</Text>
      			<Text style={[styles.martinPerezGutierrez, styles.martinTypo]}>Martin Perez Gutierrez</Text>
    		</View>);*/
			<View style={styles.container}>
				<TextInput
					style={styles.input}
					placeholder={t('search')}
					value={query}
					onChangeText={setQuery}
					onSubmitEditing={handleSearch} // Manejar la búsqueda cuando se presiona "Enter"
				/>
				<Button title={t('searchU')} onPress={handleSearch} />
				{loading && <Text>{t('loading')}</Text>}
				{error && <Text style={styles.errorText}>{error}</Text>}
				<FlatList
					data={users}
					keyExtractor={(item) => item._id.toString()}
					renderItem={({ item }) => {
					console.log('Renderizando item:', item);
					return (
						<Pressable onPress={() => navigation.navigate('userfound', { user: item })}>
							<View style={styles.userContainer}>
								<Image style={styles.userImage} source={{ uri: item.profileImage }} />
								<View>
								<Text style={styles.userName}>{item.fullName}</Text>
								</View>
							</View>
						</Pressable>
					);
					}}
					ListEmptyComponent={() => (
					<View style={styles.emptyContainer}>
						<Text style={styles.emptyText}>{t('noUser')}</Text>
					</View>
					)}
				/>
				</View>
);
};

const styles = StyleSheet.create({
  	/*blackBase21Position: {
    		width: 390,
    		left: 0,
    		position: "absolute"
  	},
  	iconLayout1: {
    		maxHeight: "100%",
    		maxWidth: "100%",
    		overflow: "hidden"
  	},
  	unsplashymoIconLayout: {
    		height: 46,
    		position: "absolute"
  	},
  	martinTypo: {
    		textAlign: "center",
    		color: "#000",
    		fontFamily: "Poppins-SemiBold",
    		fontWeight: "600",
    		fontSize: 15,
    		position: "absolute"
  	},
  	blackBase21: {
    		height: 41,
    		top: 0,
    		width: 390
  	},
  	icon: {
    		height: "100%",
    		width: "100%",
    		maxHeight: "100%",
    		maxWidth: "100%"
  	},
  	wrapper: {
    		left: "88.21%",
    		top: "10.55%",
    		right: "6.36%",
    		bottom: "86.11%",
    		width: "5.44%",
    		height: "3.34%",
    		position: "absolute"
  	},
  	buscarUsuario2Child: {
    		top: 89,
    		left: 20,
    		borderRadius: 10,
    		borderStyle: "solid",
    		borderColor: "#7e5f5b",
    		borderWidth: 1,
    		width: 299,
    		height: 34,
    		position: "absolute",
    		backgroundColor: "#fff"
  	},
  	iconlybrokensearch: {
    		height: "1.23%",
    		width: "2.67%",
    		top: "11.85%",
    		right: "21.44%",
    		bottom: "86.92%",
    		left: "75.9%",
    		position: "absolute"
  	},
  	martinPerez: {
    		top: 101,
    		left: 44,
    		fontSize: 10,
    		fontWeight: "500",
    		fontFamily: "Roboto-Medium",
    		color: "#7e5f5b",
    		textAlign: "left",
    		opacity: 0.5,
    		position: "absolute"
  	},
  	marca3Icon: {
    		top: 51,
    		left: 120,
    		width: 150,
    		height: 28,
    		position: "absolute"
  	},
  	unsplashsibvworyqs0Icon: {
    		top: 356,
    		width: 46,
    		height: 46,
    		left: 51
  	},
  	unsplashkipqvvtoc1sIcon: {
    		top: 152,
    		width: 46,
    		height: 46,
    		left: 51
  	},
  	unsplashwnolnjo7ts8Icon: {
    		top: 288,
    		width: 46,
    		height: 46,
    		left: 51
  	},
  	martinPerezGomez: {
    		top: 367,
    		left: 109,
    		color: "#000",
    		fontFamily: "Poppins-SemiBold",
    		fontWeight: "600",
    		fontSize: 15
  	},
  	unsplashymoYcN2oIcon: {
    		width: 46,
    		height: 46,
    		left: 0,
    		top: 0
  	},
  	martinPerez1: {
    		top: 11,
    		left: 58
  	},
  	unsplashymoYcN2oParent: {
    		top: 220,
    		width: 153,
    		left: 51
  	},
  	martinPerez2: {
    		top: 164,
    		left: 109,
    		color: "#000",
    		fontFamily: "Poppins-SemiBold",
    		fontWeight: "600",
    		fontSize: 15
  	},
  	martinPerezGutierrez: {
    		top: 301,
    		left: 109,
    		color: "#000",
    		fontFamily: "Poppins-SemiBold",
    		fontWeight: "600",
    		fontSize: 15
  	},
  	unionIcon: {
    		width: 375,
    		height: 95
  	},
  	buscarUsuario2Item: {
    		top: 775,
    		height: 75
  	},
  	buscarUsuario2: {
    		flex: 1,
    		height: 844,
    		overflow: "hidden",
    		width: "100%",
    		backgroundColor: "#fff"
  	}*/
	  container: {
		flex: 1,
		padding: 20,
	  },
	  input: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 10,
		paddingHorizontal: 10,
	  },
	  errorText: {
		color: 'red',
		textAlign: 'center',
		marginTop: 10,
	  },
	  userContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: 'gray',
	  },
	  userImage: {
		width: 50,
		height: 50,
		borderRadius: 25,
		marginRight: 10,
	  },
	  userName: {
		fontSize: 18,
		fontWeight: 'bold',
	  },
	  userNickname: {
		fontSize: 16,
		color: 'gray',
	  },
	  emptyContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	  },
	  emptyText: {
		fontSize: 18,
		color: 'gray',
	  },
});

export default Search;
