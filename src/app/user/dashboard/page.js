'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { Box, Text, Button, Spinner } from '@chakra-ui/react';
import DashboardSideNav from "../../components/dashsidenav";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Fetch user data from localStorage
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setUser(userData);
    } else {
      // If no user data, redirect to login page
      router.push('../auth/login');
    }
  }, [router]);

  return (
    <Box
      w={'full'}
      h={['auto', 'auto', '100vh', '100vh']}
      bg={'#F8F8F8'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      {user ? (
        <Box
          w={'full'}
          display={'flex'}
          h={'100%'}
        >
          <Box display={['none', 'none', 'flex', 'flex']}>
            <DashboardSideNav />
          </Box>

          <Box
            w={'100%'}
            h={'100%'}
            px={['20px', '20px', '40px', '40px']}
            pt={'24px'}
          >
            <Box
              w={'full'}
              h={'50px'}
              display={'flex'}
              justifyContent={'right'}
              alignItems={'center'}
            >
              <Box
                w={'400'}
                display={'flex'}
                gap={'24px'}
                alignItems={'center'}
              >
                <Button
                  display={'flex'}
                  gap={'8px'}
                  bg={'#FFF239'}
                  w={'120px'}
                  border={'1px solid black'}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.99902 12.001C1.99902 8.22998 1.99902 6.34398 3.17102 5.17298C4.34302 4.00198 6.22802 4.00098 9.99902 4.00098H13.999C17.77 4.00098 19.656 4.00098 20.827 5.17298C21.998 6.34498 21.999 8.22998 21.999 12.001C21.999 15.772 21.999 17.658 20.827 18.829C19.655 20 17.77 20.001 13.999 20.001H9.99902C6.22802 20.001 4.34202 20.001 3.17102 18.829C2.00002 17.657 1.99902 15.772 1.99902 12.001Z" stroke="#111111" stroke-width="1.5" />
                    <path d="M9.99902 16.001H5.99902M13.999 16.001H12.499M1.99902 10.001H21.999" stroke="#111111" stroke-width="1.5" stroke-linecap="round" />
                  </svg>

                  <Text>Spend</Text>
                </Button>

                <Button
                  display={'flex'}
                  gap={'8px'}
                  bg={'black'}
                  w={'120px'}
                  color={'white'}
                >
                  <Text>Pay bill</Text>
                </Button>

                <svg className="notificationicon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.64994 3.0781L8 2.96806V2.60111V2.22222C8 1.78574 8.19456 1.35334 8.56441 1.02458C8.93619 0.694109 9.4518 0.5 10 0.5C10.5482 0.5 11.0638 0.694109 11.4356 1.02458C11.8054 1.35334 12 1.78574 12 2.22222V2.60111V2.968L12.35 3.07808C13.7239 3.51017 14.9035 4.30723 15.7327 5.34996C16.561 6.39167 17.0002 7.62809 17 8.88882V8.88889V14.4444V14.9444H17.5H18.75C18.9667 14.9444 19.1643 15.0215 19.3017 15.1436C19.4371 15.264 19.5 15.4138 19.5 15.5556C19.5 15.6974 19.4371 15.8471 19.3017 15.9675C19.1643 16.0896 18.9667 16.1667 18.75 16.1667H1.25C1.03332 16.1667 0.835655 16.0896 0.698299 15.9675C0.56286 15.8471 0.5 15.6974 0.5 15.5556C0.5 15.4138 0.56286 15.264 0.698299 15.1436C0.835656 15.0215 1.03332 14.9444 1.25 14.9444H2.5H3V14.4444V8.88889C3 6.24286 4.9073 3.94026 7.64994 3.0781ZM10 19.5C9.4518 19.5 8.93619 19.3059 8.56441 18.9754C8.33794 18.7741 8.1772 18.5339 8.0866 18.2778H11.9134C11.8228 18.5339 11.6621 18.7741 11.4356 18.9754C11.0638 19.3059 10.5482 19.5 10 19.5Z" fill="#111317" stroke="black" />
                </svg>

                <Box w={'20px'} h={'20px'} bg={'grey'} borderRadius={'10px'} ></Box>

              </Box>
            </Box>

            <Text fontSize={['18px', '18px', '24px', '24px']} pt={['30px', '30px', '0px', '0px']}>Welcome {user.firstName}!</Text>
            <Text fontWeight={700} fontSize={'32px'}>Dashboard</Text>

            <Box w={'full'} h={'600px'} pt={'30px'} display={'flex'} flexDirection={['column', 'column', 'column', 'row']} gap={'28px'}>
              <Box w={['full', 'full', 'full', '50%']} h={'full'} display={'flex'} flexDirection={'column'} gap={'20px'}>
                {/** account balance */}
                <Box w={'full'} h={['auto', 'auto', 'auto', '50%']} bg={'#FFF239'} border={'1px solid black'} borderRight={'4px solid black'} borderBottom={'4px solid black'} borderRadius={'8px'} p={'24px'} display={'flex'} alignItems={'center'} gap={['10px', '10px', '80px', '100px']}>
                  <Box w={'50%'} h={'full'} display={'flex'} flexDirection={'column'} gap={['8px', '8px', '16px', '16px']}>
                    <Text fontWeight={600} fontSize={['10px', '10px', '20px', '20px']}>Account balance</Text>
                    <Box display={'flex'} flexDirection={'column'}>
                      <Box display={'flex'} gap={'12px'} alignItems={'center'}>
                        <Box className="flagplaceholder" w={['20px', '20px', '40px', '40px']} h={['20px', '20px', '40px', '40px']} borderRadius={['10px', '10px', '20px', '20px']} bg={'green'}></Box>
                        <Text fontWeight={600} fontSize={['24px', '24px', '64px', '64px']}>000</Text>
                      </Box>
                      <Text fontSize={['10px', '10px', '16px', '16px']}>Yesterday NGN 000.00</Text>
                      <Box w={'full'} display={'flex'} gap={'8px'} pt={'16px'}>
                        <Button w={'50%'} h={'52px'} p={'20px'} bg={'black'} color={'white'} fontSize={['10px', '10px', '16px', '16px']}>Deposit</Button>
                        <Button w={'50%'} h={'52px'} p={'20px'} bg={'black'} color={'white'} fontSize={['10px', '10px', '16px', '16px']}>Withdraw</Button>
                      </Box>
                    </Box>
                  </Box>
                  <Box display={'flex'} w={'50%'} justifyContent={'space-between'} alignItems={'center'}>
                    <Box>
                      <Text fontWeight={500} fontSize={['10px', '10px', '12px', '12px']}>Providus Bank</Text>
                      <Text className="accountnumber" fontWeight={700} fontSize={['12px', '12px', '24px', '24px']}>2242433656</Text>
                      <Text fontWeight={500} fontSize={['10px', '10px', '14px', '14px']}>Account no.</Text>
                    </Box>

                    <Button bg={'black'} w={'32px'} h={'32px'} display={'flex'} justifyContent={'center'} alignItems={'center'} p={'10px'} borderRadius={'8px'}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.83301 8.05648C5.83301 7.46704 6.06716 6.90174 6.48396 6.48494C6.90076 6.06814 7.46606 5.83398 8.05551 5.83398H15.2772C15.569 5.83398 15.858 5.89147 16.1277 6.00316C16.3973 6.11485 16.6423 6.27856 16.8487 6.48494C17.0551 6.69132 17.2188 6.93632 17.3305 7.20597C17.4422 7.47562 17.4997 7.76462 17.4997 8.05648V15.2782C17.4997 15.57 17.4422 15.859 17.3305 16.1287C17.2188 16.3983 17.0551 16.6433 16.8487 16.8497C16.6423 17.0561 16.3973 17.2198 16.1277 17.3315C15.858 17.4432 15.569 17.5007 15.2772 17.5007H8.05551C7.76364 17.5007 7.47464 17.4432 7.20499 17.3315C6.93535 17.2198 6.69034 17.0561 6.48396 16.8497C6.27758 16.6433 6.11388 16.3983 6.00219 16.1287C5.89049 15.859 5.83301 15.57 5.83301 15.2782V8.05648Z" stroke="#E2E2E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M3.34333 13.9475C3.0875 13.8021 2.87471 13.5916 2.72658 13.3374C2.57846 13.0832 2.50028 12.7942 2.5 12.5V4.16667C2.5 3.25 3.25 2.5 4.16667 2.5H12.5C13.125 2.5 13.465 2.82083 13.75 3.33333" stroke="#E2E2E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </Button>
                  </Box>
                </Box>
                <Box w={'full'} h={'50%'} display={'flex'} gap={'16px'}>
                  <Box w={'50%'} h={'full'} bg={'#F7EBE8'} borderRadius={'8px'}></Box>
                  <Box w={'50%'} h={'full'} bg={'#E2E2E299'} borderRadius={'8px'}></Box>
                </Box>
              </Box>
              <Box w={['full', 'full', 'full', '50%']} h={'full'} bg={'black'} borderRadius={'8px'}></Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <Spinner size="md" color="black" />
      )}
    </Box>
  );
}
