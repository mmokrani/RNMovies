import React from 'react'
import { getFilmDetailFromApi } from '../API/TMDBApi'
import { View, Text, Image, ActivityIndicator, StyleSheet, ScrollView } from 'react-native'
import { getImageFromApi } from '../API/TMDBApi'
import moment from 'moment'

export default class FilmDetail extends React.Component {
    constructor(props) {
        super(props)
        console.log("constructor")
        this.state = {
            isLoading: true,
            filmDetail: undefined
        }
    }
    componentDidMount() {
        console.log("componentDidMount")
        getFilmDetailFromApi(this.props.navigation.getParam('idFilm')).then((data) => {
            console.log(data)
            this.setState({ filmDetail: data, isLoading: false })
        })
    }
    _displayLoading() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size="large"></ActivityIndicator>
                </View>)
        }
    }
    _displayFilm() {
        if (!this.state.isLoading) {
            console.log("display film : "+this.state.filmDetail.id)
            const film = this.state.filmDetail
            const image = getImageFromApi (film.poster_path)

            return (
                <ScrollView>
                    <View  style={styles.film_container}>
                        <Image style={styles.image} source={{uri:image}}></Image>
                        <Text style={styles.title}>{film.title}</Text>
                        <Text style={styles.description}>{film.overview}</Text>
                        <Text style={styles.sortie}>{moment(new Date(film.release_date)).format('DD/MM/YYYY')}</Text>
                        <Text style={styles.vote}>{film.vote_average}</Text>
                        <Text style={styles.budget}>{film.budget}</Text>
                        <Text style={styles.genre}>sss :{film.genres.map((item) => item.name).join('/ ')}</Text>
                    </View>
                    {this._displayLoading()}
                </ScrollView>
            )
        }
    }
    render() {
        console.log("render film")
            return (
                <View>
                    {this._displayFilm()}
                    {this._displayLoading()}
                </View>
            )
        
    }
}

const styles = StyleSheet.create({
    loading_container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    film_container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        paddingLeft: 5
    },
    image: {
        height: 169,
        margin: 5
    },
    title: {
        flex: 1,
        fontSize: 20,
        flexWrap: 'wrap',
        fontWeight: 'bold'
    },
    description:{
        fontStyle: 'italic',
        color: 'grey',
        flex: 1
    },
    sortie:{},
    vote:{},
    budget:{},
    compagnie:{}

})