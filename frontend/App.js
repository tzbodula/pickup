import { StyleSheet, Text, View } from 'react-native';
import {useEffect, useState} from 'react';
import {LOCAL_IP} from '@env'
export default function App() {
  
  const [eventList, setData] = useState([]);
  const getData = () => {
    fetch(`http://${LOCAL_IP}:3000/events/sport?sport=1`)
    .then(
      (res) => {
        return res.json()
      }
    ) .then((data) => {
      setData(data);
    })
  }

  useEffect(() => getData(),[])
  if (eventList.length == 0) {
    return(
      <Text>
        ...
      </Text>
    )
  } else {
    return (
      <Text>
        {eventList.map(x => <Text>{x.event_location} + "\n"</Text> )}
      </Text>
    );
  }
  
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
