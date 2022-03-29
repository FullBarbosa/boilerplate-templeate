import GlobalStyle  from '../src/styles/global.ts';
export const decorators = [
  (Story) => (
    <>
      <GlobalStyle/>
      <Story/>
    </>
  )
]