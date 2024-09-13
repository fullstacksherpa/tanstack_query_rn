import {fetchMovie} from '@/api/movies';
import {addMovieToWatchList} from '@/api/watchlist';
import {FontAwesome} from '@expo/vector-icons';
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import {Link, Stack, useLocalSearchParams} from 'expo-router';
import {Pressable} from 'react-native';
import {ActivityIndicator, Text, View, Image} from 'react-native';

const MovieDetails = () => {
  const {id} = useLocalSearchParams();
  const queryClient = useQueryClient();

  const {data, isLoading, error} = useQuery({
    queryKey: ["movies", id],
    queryFn: () => fetchMovie(id),
  })

  const {mutate} = useMutation({
    mutationFn: () => addMovieToWatchList(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['watchlist'])
    }
  })

  if (isLoading)
  {
    return <ActivityIndicator />
  }

  if (error)
  {
    return <Text>Failed to fetch data</Text>
  }
  return (
    <View>
      <Stack.Screen options={{title: data.title}} />
      <Image source={{uri: 'https://image.tmdb.org/t/p/w500' + data.backdrop_path, }} style={{width: '100%', height: 300}} />
      <View style={{padding: 10}}>
        <Text style={{fontWeight: '500', fontSize: 24, marginVertical: 10, color: 'white'}}>{data.title}</Text>
        <View style={{marginVertical: 10}}>
          <Pressable style={{flexDirection: 'row', alignItems: 'center', gap: 5, }} onPress={() => mutate()}>
            <FontAwesome name='bookmark-o' size={24} color="white" />
            <Text style={{color: 'white'}}>Add to Watchlist</Text>
          </Pressable>
        </View>
        <Text style={{fontSize: 16, color: 'white'}}>{data.overview}</Text>
      </View>
    </View>
  );
};

export default MovieDetails;