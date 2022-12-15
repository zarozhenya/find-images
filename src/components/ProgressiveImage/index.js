import React, {useState} from 'react';
import {ActivityIndicator, Image, View} from 'react-native';
import {styles} from './styles';

export const ProgressiveImage = ({url, style}) => {
  const [loading, setLoading] = useState(true);
  return (
    <View>
      <Image
        source={{uri: url}}
        style={style}
        onLoadEnd={() => setLoading(false)}
      />
      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator />
        </View>
      )}
    </View>
  );
};
