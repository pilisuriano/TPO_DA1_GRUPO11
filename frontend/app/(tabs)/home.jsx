import * as React from "react";
import { FlatList, Image, StyleSheet, View, Text, TouchableOpacity, TextInput, Pressable, s } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

const posts = [
	{
		id: '1',
		profilePic: require("../../assets/images/Profile Picture.png"),
		name: 'Alan Moreno',
		time: 'Hace 3 horas',
		location: 'Buenos Aires, Argentina',
		postImage: require("../../assets/images/imageasado.png"),
		comment: '¡Hola amigos! Recién creé mi cuenta. Feliz de estar aquí.',
		likes: 247,
		comments: 57,
		cantComentarios: 'Ver los 57 comentarios',
	},
	{
		id: '2',
		profilePic: require("../../assets/images/Profile Picture.png"),
		name: 'Chris Lui',
		time: 'Hace 1 hora',
		location: 'Cancún, México',
		postImage: require("../../assets/images/imageasado.png"),
		comment: 'Una tarde espléndida en Cancún.',
		likes: 183,
		comments: 32,
		cantComentarios: 'Ver los 32 comentarios',
	},
	{
		id: '2',
		profilePic: require("../../assets/images/Profile Picture.png"),
		name: 'Chris Lui',
		time: 'Hace 1 hora',
		location: 'Cancún, México',
		postImage: require("../../assets/images/imageasado.png"),
		comment: 'Una tarde espléndida en Cancún.',
		likes: 183,
		comments: 85,
		cantComentarios: 'Ver los 85 comentarios',
	},
];

const Post = ({ post }) => (
	<View style={styles.postContainer}>
		{/* Encabezado de la publicación */}
		<View style={styles.header}>
			<Image source={post.profilePic} style={styles.profilePic} />
			<View style={styles.headerInfo}>
				<Text style={styles.name}>{post.name}</Text>
				<Text style={styles.details}>{post.time}  ·   {post.location}</Text>
			</View>
		</View>

		{/* Imagen de la publicación */}
		<Image source={post.postImage} style={styles.postImage} />

		{/* Pie de la publicación */}
		<View style={styles.footer}>
			<Text style={styles.comment}>{post.comment}</Text>
			<View style={styles.reactions}>
				<TouchableOpacity style={styles.iconContainer}>
					<Icon name="heart" size={20} color="red" />
					<Text style={styles.reactionText}>{post.likes}</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.iconContainer}>
					<Icon name="comment" size={20} color="gray" />
					<Text style={styles.reactionText}>{post.comments}</Text>
				</TouchableOpacity>


			</View>
			<View>
				<Text style={styles.cantComentarios}>{post.cantComentarios}</Text>
			</View>
		</View>
	</View>
);

const Home = () => {
	const navigation = useNavigation();

	return (
		<View>
			{/* Barra de búsqueda */}
			<View style={styles.containerInicio}>
				<Image style={[styles.memento]} source={require("../../assets/images/Marca 2.png")} />
				<View style={styles.searchBar}>
					<Pressable style={[styles.timelinePublicidadChild, styles.unsplash4Qfycgpc4cBorder]} onPress={() => navigation.navigate('search')} >
						<Text style={styles.buscar}>Buscar...</Text>
						<Image style={[styles.searchIcon]} source={require("../../assets/images/Search.png")} />
					</Pressable>
					<Image style={[styles.icon]} source={require("../../assets/images/Group 12.png")} />
				</View></View>
			<FlatList
				data={posts}
				renderItem={({ item }) => <Post post={item} />}
				keyExtractor={(item) => item.id}
				contentContainerStyle={styles.container}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	timelinePublicidadChild: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: 230,
		height: 34,
		borderColor: "#7e5f5b",
		borderRadius: 10,
		borderWidth: 1,
		borderStyle: "solid",
		backgroundColor: "#ffffff",
	},
	postContainer: {
		marginBottom: 20,
		backgroundColor: '#f0f0f0',
		borderRadius: 10,
		padding: 10,
		borderColor: '#000000',
		borderWidth: 1,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10,
	},

	profilePic: {
		width: 40,
		height: 40,
		borderRadius: 20,
		marginRight: 10,
	},
	name: {
		fontWeight: 'bold',
	},
	headerInfo: {
		flex: 1,
	},
	details: {
		color: 'gray',
	},
	postImage: {
		width: '100%',
		height: 200,
		borderRadius: 10,
		marginBottom: 10,
		borderColor: '#000000',
		borderWidth: 1,
	},

	footer: {
		marginTop: 10,
	},
	comment: {
		marginBottom: 10,
	},
	reactions: {
		flexDirection: 'row',
	},

	iconContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 20,
	},
	reactionText: {
		marginLeft: 5,
	},

	container: {
		padding: 10,
		top: 10,
		backgroundColor: '#ffffff',
	},
	cantComentarios: {
		color: 'gray',
	},
	searchBar: {
		position: "static",
		backgroundColor: "#ffffff",
		width: "100%",
		top: 10,
		height: 50,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
	containerInicio: {
		alignItems: "center",
		position: "static",
		flexDirection: "column",
		backgroundColor: "#ffffff",
		width: "100%",
		padding: 10,
		top:10,

	},
	memento: {
		height: 40,
		position: "static",
		marginTop: 8,
		width: '60%',

	},
	icon: {
	},
	searchIcon: {
		width: 15,
		height: 15,
		position: 'relative',
	},
	unsplash4Qfycgpc4cBorder: {
		borderWidth: 1,
		borderStyle: "solid"
	},
	buscar: {
		fontFamily: "Roboto-Medium",
		color: "#7e5f5b",
		opacity: 0.5,
		textAlign: "right",
		textAlignVertical: "center",
		fontSize: 12,
	},

});

export default Home;