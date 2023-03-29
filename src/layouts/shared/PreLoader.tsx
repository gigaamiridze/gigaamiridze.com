import React from "react";
import CircleLoader from "react-spinners/CircleLoader";
import { PreLoaderProps } from "../../interfaces";
import { LoaderWrapper } from "../../components";

function PreLoader(props: PreLoaderProps) {
  const { loading } = props;

  return (
    <LoaderWrapper>
      <CircleLoader
        size={150}
        color={"#64ffda"}
        loading={loading}
      />
    </LoaderWrapper>
  )
}

export default PreLoader;