import {StyleSheet, FlatList, ActivityIndicator, Pressable} from 'react-native';
import {Text, View, } from '@/components/Themed';
import {fetchTopRatedMovies} from '@/api/movies';
import {useInfiniteQuery} from '@tanstack/react-query';
import MovieListItem from '@/components/MovieListitem';




export default function TabOneScreen() {
  const {data, isLoading, error, fetchNextPage} = useInfiniteQuery({
    queryKey: ["movies"],
    queryFn: fetchTopRatedMovies,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => pages.length + 1
  })

  if (isLoading)
  {
    return <ActivityIndicator />
  }
  if (error)
  {
    return <Text>{error.message}</Text>
  }

  const movies = data?.pages?.flat()

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        numColumns={2}
        contentContainerStyle={{gap: 15, padding: 5}}
        columnWrapperStyle={{gap: 15}}
        renderItem={({item}) => <MovieListItem movie={item} />}
        onEndReached={() => {
          fetchNextPage();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
