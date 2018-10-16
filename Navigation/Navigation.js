import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
import { createStackNavigator } from 'react-navigation'

const SearchStackNavigation = createStackNavigator({
    SearchNav:{
        screen: Search,
        navigationOptions: {
            title: 'Recherche'
        }
    },
    DetailNav:{
        screen: FilmDetail,
        screenOptions:{
            title: 'Détail du film'
        }
    }
})

export default SearchStackNavigation