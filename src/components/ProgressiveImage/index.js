import React, {useState} from 'react';
import {ActivityIndicator, Image, View} from 'react-native';
import {styles} from './styles';
import {Images} from '../../assets/images';

export const ProgressiveImage = ({
  url,
  style,
  placeholder = Images.noPhoto,
}) => {
  const [loading, setLoading] = useState(true);
  return (
    <View>
      <Image
        source={url ? {uri: url} : placeholder}
        style={style}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      />
      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator color="#D3D3D3" />
        </View>
      )}
    </View>
  );
};
