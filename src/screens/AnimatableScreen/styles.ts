import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

interface ViewAnimatableProps {
  color: string;
}

export const Container = styled.View`
  background-color: #080818;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
`;

export const ViewAnimatable = styled(Animatable.View)<ViewAnimatableProps>`
  background-color: ${({ color }): string => color};
  width: 320px;
  margin-bottom: 40px;
  height: 70px;
  border-radius: 10px;
`;

export const ButtonAnimated = styled(Animatable.View)``;

export const TouchableOpacity = styled.TouchableOpacity`
  background-color: #ccc;
  width: 320px;
  margin-bottom: 40px;
  height: 70px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  color: #080818;
  font-size: 22px;
`;
