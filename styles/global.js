import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  productListing: {
    padding: 20
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  productPrice: {
    fontWeight: 'bold',
    color: '#00FF00',
  },
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});