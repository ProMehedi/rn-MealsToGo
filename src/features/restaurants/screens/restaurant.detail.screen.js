import React, { useState } from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { List } from 'react-native-paper'
import styled from 'styled-components/native'

import RestaurantCard from '../components/restaurant.card.component'

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  position: relative;
  background-color: ${(props) => props.theme.colors.bg.primary};
`

const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false)
  const [lunchExpanded, setLunchExpanded] = useState(false)
  const [dinnerExpanded, setDinnerExpanded] = useState(false)
  const [drinksExpanded, setDrinksExpanded] = useState(false)

  const { restaurant } = route.params
  return (
    <SafeArea>
      <RestaurantCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Toast" />
          <List.Item title="Bacon" />
          <List.Item title="Sausage" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Hamburger" />
          <List.Item title="Cheese" />
          <List.Item title="Fries" />
          <List.Item title="Onion Rings" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Steak" />
          <List.Item title="Potato" />
          <List.Item title="Rice" />
          <List.Item title="Chips" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Milk" />
          <List.Item title="Water" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  )
}

export default RestaurantDetailScreen
