import React, { useState } from 'react';
import { styled } from 'styled-components';
import Button from '../Button';
import Posts from './Posts';
// import StoreUpdateModal from './StoreUpdateModal';
import SearchBar from '../SearchBar';
import { useDispatch } from 'react-redux';
import { openStoreModal } from '../../redux/modules/storeAddSlice';

const Mapcontents = () => {
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(openStoreModal(true));
  };

  return (
    <StDiv>
      <Form>
        <SearchBar size="small" />
      </Form>
      <Button color="pink2" size="medium" full onClick={openModal}>
        장소 추가하기
      </Button>
      <StPostDiv>
        <Posts />
      </StPostDiv>
    </StDiv>
  );
};

export default React.memo(Mapcontents);

const StDiv = styled.div`
  bottom: 0;
  min-width: 600px;
  max-width: 600px;
  height: 94vh;
  background-color: var(--color_white);
  box-shadow: 0px 0px 9px 5px #00000014;
  z-index: 50;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const StPostDiv = styled.div`
  display: grid;
`;
