import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { DefaultPost } from '@/assets/images';
import { GardenPost } from '@/services/gardenPost/types';
import useMapGardenDetailIdStore from '@/stores/useMapGardenDetailIdStore';

const RecentPostItem = ({ postData }: { postData: GardenPost }) => {
  const navigate = useNavigate();
  const { setGardenId } = useMapGardenDetailIdStore();

  const {
    imageUrl,
    gardenName,
    address,
    price,
    recruitEndDate,
    // isLiked,
    gardenId,
    latitude,
    longitude,
  } = postData;

  const endDate = new Date(recruitEndDate);
  const currentDate = new Date();

  const duration = Math.ceil(
    (endDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24),
  );

  const term =
    duration > 0
      ? `${duration}일 남음`
      : duration === 0
        ? '마감 임박'
        : '마감됨';

  const handlePostClick = () => {
    navigate('/map', {
      state: { data: { lat: latitude, lng: longitude } },
    });
    setGardenId(gardenId);
  };

  return (
    <Flex
      flexDir="column"
      flexShrink="0"
      gap="12px"
      onClick={handlePostClick}
      cursor="pointer"
    >
      <Box position="relative">
        <Image
          draggable="false"
          w={{ mobile: '190px', tablet: '276px' }}
          h={{ mobile: '129px', tablet: '168px' }}
          rounded="10px"
          src={imageUrl || DefaultPost}
          alt="recent post"
        />
      </Box>
      <Flex flexDir="column" gap="3px">
        <Text
          fontSize={{ mobile: '16px', tablet: '18px' }}
          fontWeight="semiBold"
        >
          {gardenName}
        </Text>
        <Text color="gray.700" fontSize="14px" fontWeight="regular">
          {address}
        </Text>
        <Flex alignItems="center" gap="8px">
          <Text fontSize="16px" fontWeight="bold">
            {Number(price).toLocaleString()} 원
          </Text>
          <Text color="gray.700" fontSize="12px">
            {term}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default RecentPostItem;
