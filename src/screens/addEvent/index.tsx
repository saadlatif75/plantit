import {
  StyleSheet,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {CustomHeader} from '../../components/CustomHeader';
import EventInfoScreenComponent from '../../components/EventInfoScreenComponent';
type Props = {};

function AddEvent({navigation}: any) {
  const [ActiveItem, setActiveItem] = useState('1');
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        arrowLeftTintColor={'black'}
        centerText={'Create an Event'}
        textColor={'#000000'}
        marginHorizontal={'30%'}
        onLeftPress={() => navigation.goBack()}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 10,
          marginTop: 15,
        }}>
        {ActiveItem == '1' ? (
          <Image
            resizeMode="contain"
            style={{width: 25, height: 25, marginHorizontal: 10, marginTop: 10}}
            source={require('../../assests/PurpleOne.png')}
          />
        ) : (
          <Image
            resizeMode="contain"
            style={{width: 25, height: 25, marginHorizontal: 10, marginTop: 10}}
            source={require('../../assests/TickIcon.png')}
          />
        )}
        {ActiveItem == '1' ? (
          <Text style={{alignItems: 'center', marginTop: 10}}>Event info</Text>
        ) : null}
        <Image
          resizeMode="contain"
          style={{width: 25, height: 25, marginHorizontal: 5, marginTop: 10}}
          source={require('../../assests/chevron-right.png')}
        />
        {ActiveItem == '2' ? (
          <Image
            resizeMode="contain"
            style={{width: 25, height: 25, marginTop: 10}}
            source={require('../../assests/PurpleTwo.png')}
          />
        ) : ActiveItem == '3' || ActiveItem == '4' || ActiveItem == '5' ? (
          <Image
            resizeMode="contain"
            style={{width: 25, height: 25, marginTop: 10}}
            source={require('../../assests/TickIcon.png')}
          />
        ) : (
          <Image
            resizeMode="contain"
            style={{width: 25, height: 25, marginTop: 10}}
            source={require('../../assests/greyTwo.png')}
          />
        )}
        {ActiveItem == '2' || ActiveItem == '1' ? (
          <Text style={{alignItems: 'center', marginTop: 10, marginLeft: 5}}>
            Delegates
          </Text>
        ) : null}
        <Image
          resizeMode="contain"
          style={{width: 25, height: 25, marginHorizontal: 5, marginTop: 10}}
          source={require('../../assests/chevron-right.png')}
        />
        {ActiveItem == '3' ? (
          <Image
            resizeMode="contain"
            style={{width: 25, height: 25, marginTop: 10}}
            source={require('../../assests/PurpleThree.png')}
          />
        ) : ActiveItem == '4' || ActiveItem == '3' || ActiveItem == '5' ? (
          <Image
            resizeMode="contain"
            style={{width: 25, height: 25, marginTop: 10}}
            source={require('../../assests/TickIcon.png')}
          />
        ) : (
          <Image
            resizeMode="contain"
            style={{width: 25, height: 25, marginTop: 10}}
            source={require('../../assests/GreyThree.png')}
          />
        )}
        {ActiveItem == '3' || ActiveItem == '2' ? (
          <Text style={{alignItems: 'center', marginTop: 10, marginLeft: 5}}>
            More info
          </Text>
        ) : null}
        <Image
          resizeMode="contain"
          style={{width: 25, height: 25, marginHorizontal: 5, marginTop: 10}}
          source={require('../../assests/chevron-right.png')}
        />
        {ActiveItem == '4' ? (
          <Image
            resizeMode="contain"
            style={{width: 25, height: 25, marginTop: 10}}
            source={require('../../assests/PurpleFour.png')}
          />
        ) : ActiveItem == '2' || ActiveItem == '3' || ActiveItem == '1' ? (
          <Image
            resizeMode="contain"
            style={{width: 25, height: 25, marginTop: 10}}
            source={require('../../assests/GreyFour.png')}
          />
        ) : ActiveItem == '4' ? (
          <Image
            resizeMode="contain"
            style={{width: 25, height: 25, marginTop: 10}}
            source={require('../../assests/TickIcon.png')}
          />
        ) : (
          <Image
            resizeMode="contain"
            style={{width: 25, height: 25, marginTop: 10}}
            source={require('../../assests/TickIcon.png')}
          />
        )}
        {ActiveItem == '4' || ActiveItem == '3' ? (
          <Text style={{alignItems: 'center', marginTop: 10, marginLeft: 5}}>
            Invite
          </Text>
        ) : null}
      </View>
      {ActiveItem == '1' ? (
        <>
          <EventInfoScreenComponent />
          <TouchableOpacity
            onPress={() => {
              setActiveItem('2');
            }}
            style={{
              backgroundColor: 'red',
              width: '30%',
              marginVertical: '33%',
              marginHorizontal: 10,
              justifyContent: 'center',
            }}>
            <Text>Event Info Active Next</Text>
          </TouchableOpacity>
        </>
      ) : ActiveItem == '2' ? (
        <TouchableOpacity
          onPress={() => {
            setActiveItem('3');
          }}
          style={{
            backgroundColor: 'red',
            width: '30%',
            marginVertical: '33%',
            marginHorizontal: 10,
            justifyContent: 'center',
          }}>
          <Text>Delegatw Next</Text>
        </TouchableOpacity>
      ) : ActiveItem == '3' ? (
        <TouchableOpacity
          onPress={() => {
            setActiveItem('4');
          }}
          style={{
            backgroundColor: 'red',
            width: '30%',
            marginVertical: '33%',
            marginHorizontal: 10,
            justifyContent: 'center',
          }}>
          <Text>More INFO Next</Text>
        </TouchableOpacity>
      ) : ActiveItem == '4' ? (
        <TouchableOpacity
          onPress={() => {
            setActiveItem('5');
          }}
          style={{
            backgroundColor: 'red',
            width: '30%',
            marginVertical: '33%',
            marginHorizontal: 10,
            justifyContent: 'center',
          }}>
          <Text>Invite</Text>
        </TouchableOpacity>
      ) : null}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  forgotPasswordText: {
    color: '#000000',
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 32,
  },
  descriptionText: {
    color: '#1C2A2B',
    fontWeight: '400',
    lineHeight: 24,
  },
});

export {AddEvent};
