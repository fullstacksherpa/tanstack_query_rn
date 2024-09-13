import {StyleSheet, FlatList, ActivityIndicator, Pressable} from 'react-native';
import {Text, View, } from '@/components/Themed';
import {fetchTopRatedMovies} from '@/api/movies';
import {useQuery} from '@tanstack/react-query';
import MovieListItem from '@/components/MovieListitem';
import {Link} from 'expo-router';



export default function TabOneScreen() {
  const {data, isLoading, error} = useQuery({
    queryKey: ["movies"],
    queryFn: fetchTopRatedMovies,
  })

  if (isLoading)
  {
    return <ActivityIndicator />
  }
  if (error)
  {
    return <Text>{error.message}</Text>
  }


  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        contentContainerStyle={{gap: 15, padding: 5}}
        columnWrapperStyle={{gap: 15}}
        renderItem={({item}) => <MovieListItem movie={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
