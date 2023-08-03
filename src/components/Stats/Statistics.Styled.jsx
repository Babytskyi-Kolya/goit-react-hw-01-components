import styled from '@emotion/styled';


// export const Stat = styled.li`
// list-style-type: none;
// `;
export const Section = styled.section`
width: 350px;
margin: 0 auto;
`;

export const Title = styled.h2`
text-align: center;
`;

export const Wrap = styled.ul`
display: flex;
background-color: #808080;
margin: 0;
padding: 0;
justify-content: space-between;
`;

export const Stat = styled.li`
list-style-type: none;
display: flex;
flex-wrap: wrap;
padding-top: 10px;
`;

export const Label = styled.span`
   text-align: center;
   width: 50px;
   padding: 10px;
   border-right: 3px;
   :last-child {
    border-right: 0px;
}
`;