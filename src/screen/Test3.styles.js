import styled from 'styled-components'

export const MainWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 3fr 7fr;
  row-gap: 30px;
  height: 100%;
`
export const APIDisplay = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  margin: 0;
`
export const HeadingInfo = styled.h2`
  display: block;
  margin: 20px 0 10px 0;
`
export const APIInfo = styled.div`
  display: flex;
  margin-top: 20px;
  padding: 20px 10px;
  border: 2px solid #f3f3f3;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.4);
  }
`
export const Error = styled.h3`
  color: red;
`

export const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px auto;
  border: 16px solid #f3f3f3;
  border-top: 16px solid #30475e;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
