import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import axios from "axios";
function TestComponent() {
  const [objState, setObjState] = useState([]);

  useEffect(() => {
    const apiCaller = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setObjState(response.data.slice(0, 10));
    };

    apiCaller();
  }, []);
  console.log(objState);
  return (
    <View style={{ alignItems: "center", textAlign: "center" }}>
      {objState.map((item) => {
        return (
          <View key={item.id}>
            <Text>{item.title}</Text>
            <Image
              style={{
                width: 51,
                height: 51,
                resizeMode: "contain",
              }}
              source={{ uri: item.thumbnailUrl }}
            />
          </View>
        );
      })}
      <TouchableOpacity>
        <Text
          onPress={() =>
            setObjState((prevSate) => [
              ...prevSate,
              {
                albumId: 1,
                id: 99,
                title: "officia porro iure quia iusto qui ipsa ut modi",
                url: "https://via.placeholder.com/600/24f355",
                thumbnailUrl: "https://via.placeholder.com/150/24f355",
              },
            ])
          }
          style={{ color: "blue" }}
        >
          click me
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default TestComponent;
{
  /* <TouchableOpacity
        onPress={() =>
          setObjState((prevSate) => [
            ...prevSate,
            {
              albumId: 1,
              id: 99,
              title: "officia porro iure quia iusto qui ipsa ut modi",
              url: "https://via.placeholder.com/600/24f355",
              thumbnailUrl: "https://via.placeholder.com/150/24f355",
            },
          ])
        }
      >
        <Text>Hello</Text>
      </TouchableOpacity> */
}
