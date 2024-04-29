'use client';

import React from 'react';
import { useState, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import useModalStore from '@/store/modalStore';

import useUserStore from '@/store/userStore';

import UserNicknameModifyModal from '@/components/modal/UserNicknameModify';

export default function Header() {
  // const [isLogin, setIsLogin] = useState<boolean>(true);
  // const [dropDown, setDropDown] = useState<boolean>(false);

  const router = useRouter();

  const { headerDropDown, setHeaderDropDown, nicknameModalState, setNicknameModalState, testNum, increaseTestNum } =
    useModalStore();

  const { isLogin, setIsLogin, deleteAccessToken } = useUserStore();

  // useEffect(() => {
  //   const handleRouteChange = () => {
  //     setDropDown(false);
  //   };
  // });

  const handleLoginState = () => {
    // if (isLogin === true) {
    //   setIsLogin(false);
    // } else {
    //   setIsLogin(true);
    // }
    setIsLogin();
  };

  // const handleDropDown = () => {
  //   if (dropDown === true) {
  //     setDropDown(false);
  //   } else {
  //     setDropDown(true);
  //   }
  // };

  // const handleDropDown = () => {
  //   setHeaderDropDown();
  // };

  const confirm = () => {
    console.log('zustand상태확인');
    console.log(nicknameModalState);
    console.log(testNum);
  };

  const increase = () => {
    increaseTestNum();
  };

  // const handleNicknameModal = () => {
  //   if (nicknameModalState === true) {
  //     setNicknameModalState(false);
  //   } else {
  //     setNicknameModalState(true);
  //   }
  //   setDropDown(false);
  // };

  const logout = () => {
    deleteAccessToken();
    // setIsLogin();

    // setDropDown(false);
    setHeaderDropDown();
    router.push('/');
  };

  // useEffect(() => {
  //   const unsubscribe = useUserStore.subscribe(() => {
  //     setIsLogin();
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  return (
    <div>
      <div className='z-10 w-full text-sm'>
        <div className='flex justify-between'>
          <div>
            {/* 로그인 상태 테스트 중 나중에 변경 */}
            <Link href='/'>
              <Image src='/Logo/ainlogo.svg' alt='Ain Logo' className='ml-3' width={120} height={30} priority />
            </Link>
            {/* <div onClick={handleLoginState}>
              <Image src='/logo/ainlogo.svg' alt='Ain Logo' className='ml-3' width={120} height={30} priority />
            </div> */}
          </div>
          {/* <button
            type='button'
            onClick={confirm}
            className='mb-10 text-md font-semibold px-7 py-1 rounded-full text-white'
            style={{ backgroundColor: '#BE44E9' }}
          >
            주스탠드 테스트
          </button>
          <button
            type='button'
            onClick={increase}
            className='mb-10 text-md font-semibold px-7 py-1 rounded-full text-white'
            style={{ backgroundColor: '#BE44E9' }}
          >
            testNum 1 증가
          </button> */}
          <div className='flex items-center relative'>
            {isLogin ? (
              <div className='flex flex-col'>
                {/* <div className='flex' onClick={handleDropDown}>
                 */}
                <div className='flex' onClick={setHeaderDropDown}>
                  <div>
                    <Image
                      src='/icon/islogin.svg'
                      alt='로그인한 상태'
                      className='mr-2 cursor-pointer'
                      width={28}
                      height={28}
                      priority
                    />
                  </div>

                  {/* {dropDown ? ( */}
                  {headerDropDown ? (
                    <div className='flex items-center'>
                      <Image
                        // src='/역삼각형.svg'
                        src='/icon/dropdown-triangle.svg'
                        alt='드롭다운 활성화'
                        className='mr-6 cursor-pointer'
                        width={10}
                        height={10}
                        priority
                      />
                    </div>
                  ) : (
                    <div className='flex items-center'>
                      <Image
                        // src='/삼각형.svg'
                        src='/icon/dropdown-triangle-revert.svg'
                        alt='드롭다운 활성화'
                        className='mr-6 cursor-pointer'
                        width={10}
                        height={10}
                        priority
                      />
                    </div>
                  )}
                </div>
                {/* {dropDown ? ( */}
                {headerDropDown ? (
                  <div className='absolute top-10 right-4'>
                    <div>
                      <button
                        type='button'
                        // onClick={handleNicknameModal}
                        onClick={setNicknameModalState}
                        className='mt-4 bg-white rounded-full text-xs w-28 px-2 py-2 font-semibold font-sans'
                        style={{ fontSize: '13px' }}
                      >
                        닉네임 수정
                      </button>
                    </div>
                    <div>
                      <button
                        type='button'
                        onClick={logout}
                        className='mt-1 bg-white rounded-full text-xs w-28 px-2 py-2 font-semibold font-sans'
                        style={{ fontSize: '13px' }}
                      >
                        로그아웃
                      </button>
                    </div>
                  </div>
                ) : (
                  ''
                )}
              </div>
            ) : (
              <Link href='/login'>
                <Image
                  src='/icon/login.svg'
                  alt='로그인'
                  className='mr-6 cursor-pointer'
                  width={20}
                  height={20}
                  priority
                />
              </Link>
            )}
          </div>
        </div>
      </div>
      <div>
        {/* <div className='relative'> */}
        {/* {nicknameModalState && (
            <div className='z-40'>
              <UserNicknameModifyModal closeModal={setNicknameModalState} />
            </div>
          )}
          {nicknameModalState && (
            <div
              className='overlay fixed top-0 left-0 w-full h-full bg-black opacity-70 z-30'
              onClick={setNicknameModalState}
            />
          )} */}

        {nicknameModalState && (
          <div className='static'>
            <div
              className='overlay justify-center fixed top-0  w-full h-full bg-black opacity-70 z-30 max-w-md'
              onClick={setNicknameModalState}
            />
            <div className='h-screen'>
              <div className='z-40 absolute h-full w-full '>
                <UserNicknameModifyModal closeModal={setNicknameModalState} />
              </div>
            </div>
          </div>
        )}
        {/* </div> */}
      </div>
    </div>
  );
}