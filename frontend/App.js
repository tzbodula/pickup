import { StyleSheet, Text, View } from 'react-native';
import {useEffect, useState} from 'react';
import {LOCAL_IP} from '@env'
export default function App() {
  
  const [eventList, setData] = useState([]);
  const getData = () => {
    fetch(`http://${LOCAL_IP}:3000/users/1/sports`)
    .then(
      (res) => {
        return res.json()
      }
    ) .then((data) => {
      setData(data);
    })
    .catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
       // ADD THIS THROW error
        throw error;
    });
  }

  useEffect(() => getData(), [eventList])

  return eventList.length == 0 ? 
  <Text>
  Loading...
  </Text>
  :
  <Text>
  {eventList.map(x => <Text key={x.sport_id}>{x.sport_name + " Sport Name " + x.sport_id} {'\n'} </Text>)}
  </Text>
  
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
