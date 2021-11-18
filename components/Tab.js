import React, {useRef} from 'react';
import styled from 'styled-components/native';
import {Transition, Transitioning} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const checkSwitch=(param)=>{

    switch(param) {
      case 'folder':
        return "Documents";
      default:
        param;
      }
    
    }
    

const bgColors = {
  home: '#fff',
  message: '#fff',
  note: '#fff',
  menu: '#fff',
};

const textColors = {
  home: '#6E0B14',
  message: '#6E0B14',
  note: '#6E0B14',
  menu: '#6E0B14',
};

const Container = styled.TouchableWithoutFeedback``;

const Background = styled(Transitioning.View)`
  flex: auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.focused ? bgColors[props.label] : 'white')};
  border-radius: 100px;
  margin: 6px;
`;
const Label = styled.Text`
  color: ${(props) => textColors[props.label]};
  font-weight: 600;
  margin-left: 8px;
`;


function Tab({label, accessibilityState, onPress}) {
  const focused = accessibilityState.selected;
  const icon = label;

  const transition = (
    <Transition.Sequence>
      <Transition.Out type="fade" durationMs={0} />
      <Transition.Change interpolation="easeInOut" durationMs={100} />
      <Transition.In type="fade" durationMs={10} />
    </Transition.Sequence>
  );

  const ref = useRef();

  return (
    <Container
      onPress={() => {
        ref.current.animateNextTransition();
        onPress();
      }}>
      <Background
        focused={focused}
        label={label}
        ref={ref}
        transition={transition}>
        <Icon 
            name={icon}
            size={25}
            color="#606060"
            />
        {focused && (
          <Label label={label}>
            {label.charAt(0).toUpperCase() + label.slice(1)}
          </Label>
        )}
      </Background>
    </Container>
  );
}

export default Tab;