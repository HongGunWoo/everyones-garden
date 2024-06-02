import { List } from '@chakra-ui/react';
import GardenItem from '../../components/GardenItem';
import { gardenMockData } from '../../mockData';

const RecentlyViewedGardens = () => {
  return (
    <List w="100%" spacing="32px" px={{ mobile: '20px', tablet: '0px' }}>
      {gardenMockData.map((item, idx) => (
        <GardenItem key={item.id} item={item} idx={idx} />
      ))}
    </List>
  );
};

export default RecentlyViewedGardens;
