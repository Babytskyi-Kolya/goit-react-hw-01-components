import styled from '@emotion/styled';

export const Item = styled.li`
list-style-type: none;
   display: flex;
   flex-wrap: wrap;
   padding-top: 10px;
   padding-bottom: 10px;
   padding-left: 15px;
   border: solid 1px;
   border-radius: 5%;
   background-color: #ffffff;

   :not(:last-child){
    margin-bottom: 5px;
   }
`;

export const Status = styled.span`
   width: 10px;
   height: 10px;
   padding: 5px;
   margin-right: 15px;
   margin-top: auto;
   margin-bottom: auto;
   border-radius: 100%;
`;

export const IMG = styled.img`
   margin-right: 20px;
`;