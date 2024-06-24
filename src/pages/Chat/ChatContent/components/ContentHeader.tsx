import { Text, Image, Flex } from '@chakra-ui/react';
import BtnItems from './BtnItems';
import MobileHeader from './MobileHeader';
import { EnterChatRoom } from '@/services/chat/type';

const ContentHeader = ({ productInfo }: { productInfo: EnterChatRoom }) => {
  const {
    gardenName,
    gardenStatus,
    images,
    partnerNickname,
    price,
    partnerMannerGrade,
  } = productInfo;

  return (
    <Flex
      w="100%"
      zIndex="1"
      justifyContent="space-between"
      alignItems={{ mobile: 'flex-start', tablet: 'center' }}
      h={{ mobile: '193px', tablet: '86px' }}
      padding={{ mobile: '0 20px 10px 20px', tablet: '17px' }}
      flexDirection={{ mobile: 'column', tablet: 'row' }}
      borderBottom={{ mobile: '1px solid', tablet: 'none' }}
      borderLeft={{ mobile: 'none', tablet: '1px solid' }}
      borderColor={{ mobile: 'gray.200', tablet: 'orange.200' }}
      backgroundColor={{ mobile: 'white', tablet: 'orange.100' }}
    >
      <MobileHeader
        partnerNickname={partnerNickname}
        partnerMannerGrade={partnerMannerGrade}
      />
      <Flex alignItems="center" gap="15px">
        <Image
          w={{ mobile: '52px', tablet: '52px' }}
          h={{ mobile: '52px', tablet: '52px' }}
          borderRadius="10px"
          backgroundColor="gray.100"
          src={images[0]}
          flexShrink={0}
        />
        <Flex flexDirection="column">
          <Flex alignItems="center" gap="8px">
            <Text
              fontSize={{ mobile: '16px', tablet: '18px' }}
              fontWeight="semiBold"
            >
              {gardenStatus === 'ACTIVE' ? '분양중' : '분양 완료'}
              분양중
            </Text>
            <Text
              fontSize={{ mobile: '16px', tablet: '18px' }}
              fontWeight="medium"
            >
              {gardenName}
            </Text>
          </Flex>
          <Text
            fontSize={{ mobile: '16px', tablet: '18px' }}
            fontWeight="semiBold"
          >
            {price}원
          </Text>
        </Flex>
      </Flex>
      <BtnItems />
    </Flex>
  );
};

export default ContentHeader;
