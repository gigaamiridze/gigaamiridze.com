import { LoaderWrapper, Atom, FirstLine, SecondLine, ThirdLine } from "../../components";

function PreLoader() {
  return (
    <LoaderWrapper>
      <Atom>
        <FirstLine />
        <SecondLine />
        <ThirdLine />
      </Atom>
    </LoaderWrapper>
  )
}

export default PreLoader;